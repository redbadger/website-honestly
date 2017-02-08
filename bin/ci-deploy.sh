#!/usr/bin/env bash
set -euo pipefail

#
# Create a new preview site namespaced under the current commit SHA
#
createCommitSite() {
  COMMIT_REF=$(git rev-parse --short HEAD)
  export ENVIRONMENT_NAME="staging"
  export URL_BASENAME="$COMMIT_REF/"

  echo Deploying commit preview site to $URL_BASENAME
  make clean
  make fetch
  make dev-commit
  echo Copying assets to S3
  aws s3 sync ./dist/assets-honestly s3://$BUCKET_NAME/$COMMIT_REF/assets-honestly
  aws s3 cp ./dist/manifest.json s3://$BUCKET_NAME/$COMMIT_REF/manifest.json
  aws s3 cp ./dist/robots.txt s3://$BUCKET_NAME/$COMMIT_REF/robots.txt
  aws s3 cp ./dist/sw.js s3://$BUCKET_NAME/$COMMIT_REF/sw.js
  aws s3 sync ./dist/static-site/$COMMIT_REF/ s3://$BUCKET_NAME/$COMMIT_REF/
  echo Done!

  echo Registering deployment with GitHub
  ./bin/register-github-deployment.js $COMMIT_REF
  echo Done!
}

deployMaster() {
  echo Deploying current master to $1
  make clean
  make build
  echo Copying assets to S3
  aws s3 sync ./dist/assets-honestly s3://$BUCKET_NAME/assets-honestly
  aws s3 cp ./dist/robots.txt s3://$BUCKET_NAME/robots.txt
  aws s3 cp ./dist/sw.js s3://$BUCKET_NAME/sw.js
  make services-deploy
  make publish-service-invoke
  ./bin/register-github-release.js $1
  echo Done!
}

case "$1" in
  create-commit-site)
    source bin/load-ci-env.sh STAGING
    source bin/construct-additional-env.sh
    createCommitSite
    ;;

  master-to-staging)
    export ENVIRONMENT_NAME=staging
    source bin/load-ci-env.sh STAGING
    source bin/construct-additional-env.sh
    deployMaster staging
    ;;

  master-to-production)
    export ENVIRONMENT_NAME=live
    export INSERT_TRACKING=true
    source bin/load-ci-env.sh PROD
    source bin/construct-additional-env.sh
    deployMaster live
    ;;
  *)
    echo "Eh? Unknown command '$1'"
    exit 1
    ;;
esac
