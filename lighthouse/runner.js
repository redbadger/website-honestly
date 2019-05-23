const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const fetch = require('node-fetch');

const repoFullName = process.env.GITHUB_REPOSITORY;
const githubEventPath = process.env.GITHUB_EVENT_PATH;
const githubAuthToken = process.env.GITHUB_TOKEN;

/* eslint-disable no-use-before-define */

function runLighthouse({ targetUrl }) {
  const chromeFlags = [
    '--headless',
    '--no-sandbox', // chrome sandboxing requires docker container to have the
    // `SYS_ADMIN` capability added which is not supported by GitHub actions
  ];

  return chromeLauncher.launch({ chromeFlags }).then(chrome => {
    const opts = {
      port: chrome.port,
      output: 'html',
    };

    const config = null;

    return lighthouse(targetUrl, opts, config).then(results => {
      // use results.lhr for the JS-consumable output
      // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
      // use results.report for the HTML/JSON/CSV output as a string
      // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
      return chrome.kill().then(() => results);
    });
  });
}

function readArgumentsFromEnvironment() {
  if (!githubEventPath) {
    // eslint-disable-next-line no-console
    console.warn(`GITHUB_EVENT_PATH environment variable is not set, running locally.`);
    return {
      targetUrl: 'https://www-staging.red-badger.com/658e7ac/',
      ref: 'lighthouse_check',
      repo: {
        owner: 'redbadger',
        name: 'website-honestly',
      },
    };
  }

  const { deployment } = JSON.parse(fs.readFileSync(githubEventPath));

  const [owner, name] = repoFullName.split('/');

  return {
    targetUrl: deployment.url,
    ref: deployment.ref,
    repo: {
      owner,
      name,
    },
  };
}

function run() {
  const { targetUrl, repo, ref } = readArgumentsFromEnvironment();

  runLighthouse({ targetUrl }).then(results => reportResults({ results, repo, ref }));
}

async function reportResults({ results, repo, ref }) {
  const scores = Object.entries(results.lhr.categories)
    .map(([categoryName, { score }]) => `| ${categoryName} | ${score * 100} |`)
    .join('\n');

  const body = `
Lighthouse scores for latest changes:


| Category | Score |
| -------- | ----- |
${scores}
  `;

  const pullRequestIds = await getPullRequestIdsForRef({ repo, ref });

  await Promise.all(pullRequestIds.map(issueId => createComment({ body, issueId })));
}

async function createComment({ body, issueId }) {
  const query = `
  mutation AddLighthouseComment($IssueId: ID!, $Body: String!) {
    addComment(input: {subjectId: $IssueId, body: $Body}) {
      clientMutationId
    }
  }
  `;

  const variables = {
    IssueId: issueId,
    Body: body,
  };

  await gitHubGraphqlRequest({ query, variables });
}

async function getPullRequestIdsForRef({ repo: { owner, name }, ref }) {
  const query = `
  query PullRequestIdsForRef($RepoOwner: String!, $RepoName: String!, $Ref: String!) {
    repository(owner: $RepoOwner, name: $RepoName) {
      ref(qualifiedName: $Ref) {
        associatedPullRequests(states: OPEN, first: 10) {
          nodes {
            id
          }
        }
      }
    }
  }
  `;

  const variables = {
    RepoOwner: owner,
    RepoName: name,
    Ref: ref,
  };

  console.log('Getting pull requests for ref:', variables);

  const {
    repository: {
      ref: { associatedPullRequests },
    },
  } = await gitHubGraphqlRequest({ query, variables });

  return associatedPullRequests.nodes.map(({ id }) => id);
}

async function gitHubGraphqlRequest({ query, variables }) {
  const response = await fetch(`https://api.github.com/graphql`, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${githubAuthToken}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Bad response from GitHub api: ${response.statusText}`);
  }

  const { data } = await response.json();

  return data;
}

run();

process.on('unhandledRejection', error => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
});
