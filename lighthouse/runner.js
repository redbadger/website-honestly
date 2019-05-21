const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');

function readArgumentsFromEnvironment() {
  const { deployment } = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH));

  return {
    targetUrl: deployment.url,
  };
}

function runLighthouse({ targetUrl }) {
  const chromeFlags = [
    '--headless',
    '--no-sandbox', // chrome sandboxing requires docker container to have the
    // `SYS_ADMIN` capability added which is not supported by GitHub actions
  ];

  return chromeLauncher.launch({ chromeFlags }).then(chrome => {
    const opts = {
      port: chrome.port,
    };

    const config = null;

    return lighthouse(targetUrl, opts, config).then(results => {
      // use results.lhr for the JS-consumable output
      // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
      // use results.report for the HTML/JSON/CSV output as a string
      // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
      return chrome.kill().then(() => results.lhr);
    });
  });
}

function run() {
  const args = readArgumentsFromEnvironment();

  runLighthouse(args).then(results => {
    console.log(results);
  });
}

run();
