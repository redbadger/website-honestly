#!/usr/bin/env bash
set -euo pipefail

#
# Create a new preview site namespaced under the current commit SHA
#
createCommitSite() {
  COMMIT_REF=$(git rev-parse --short HEAD)
  export ENVIRONMENT_NAME="staging"
  export URL_BASENAME="$COMMIT_REF/"
  source bin/load-env.sh

  echo Deploying site to $URL_BASENAME
  make clean
  make build
  echo Copying assets to S3
  aws s3 sync ./dist/assets s3://$BUCKET_NAME/$COMMIT_REF/assets
  make services-deploy
  make publish-service-invoke
  echo Done!

  echo Registering deployment with GitHub
  ./bin/register-github-deployment.js $COMMIT_REF
  echo Done!
}

masterToStaging() {
  echo Deploying current master to staging
  source bin/load-env.sh
  make clean
  make build
  echo Copying assets to S3
  aws s3 sync ./dist/assets s3://$BUCKET_NAME/assets
  make services-deploy
  make publish-service-invoke
  echo Done!
}

case "$1" in
  create-commit-site)
    createCommitSite
    ;;
  master-to-staging)
    masterToStaging
    ;;
  *)
    echo "Eh? Unknown command '$1'"
    exit 1
    ;;
esac
