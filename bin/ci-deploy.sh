#!/bin/bash

set -euo pipefail

# pretty printing
source bin/pretty-print.sh

#
# Create a new preview site namespaced under the current commit SHA
#
createCommitSite() {
  COMMIT_REF=$(git rev-parse --short HEAD)
  LAST_COMMIT_INFO=$(git log -1 --format='%h %cd')
  export URL_BASENAME="$COMMIT_REF/"

  pretty_block "Deploying commit preview site to $URL_BASENAME"
  make clean
  make fetch
  make generate-sitemap
  make dev-commit #Note : we don't invoke lambdas for commitSites so we need to build the files "manually"
  pretty_success "Build complete!"

  pretty_block "Setting Version"
  echo $LAST_COMMIT_INFO > ./dist/version.txt
  pretty_success "Version Set: $cYellow $LAST_COMMIT_INFO $cNo"

  pretty_block "Copying assets to S3"
  aws s3 sync ./dist/assets-honestly s3://$BUCKET_NAME/$COMMIT_REF/assets-honestly
  aws s3 cp ./dist/manifest.json s3://$BUCKET_NAME/$COMMIT_REF/manifest.json
  aws s3 cp ./dist/sitemap.xml s3://$BUCKET_NAME/$COMMIT_REF/sitemap.xml
  aws s3 cp ./dist/google16329df1f462dd5e.html s3://$BUCKET_NAME/$COMMIT_REF/google16329df1f462dd5e.html
  aws s3 cp ./dist/robots.txt s3://$BUCKET_NAME/$COMMIT_REF/robots.txt
  aws s3 sync ./dist/static-site/$COMMIT_REF/ s3://$BUCKET_NAME/$COMMIT_REF/
  aws s3 cp ./dist/version.txt s3://$BUCKET_NAME/$COMMIT_REF/version.txt
  pretty_success "Assets Deployed to S3!"

  pretty_block "Registering deployment with GitHub"
  ./bin/register-github-deployment.js $COMMIT_REF
  pretty_success "Deployment Registered!\n"

  pretty_block "  🦄     Done!    🦄   "
  cat assets/badger-liftoff.txt
  pretty_success "Preview Site Deployed 🚀 !"
}

deployMaster() {
  LAST_COMMIT_INFO=$(git log -1 --format='%h %cd')
  pretty_block "Deploying current master to $1"
  make clean
  make generate-sitemap
  make build
  pretty_success "Build complete!"

  pretty_block "Setting Version"
  echo $LAST_COMMIT_INFO > ./dist/version.txt
  pretty_success "Version Set: $cYellow $LAST_COMMIT_INFO $cNo"

  pretty_block "Copying assets to S3"
  aws s3 sync ./dist/assets-honestly s3://$BUCKET_NAME/assets-honestly
  aws s3 cp ./dist/manifest.json s3://$BUCKET_NAME/manifest.json
  aws s3 cp ./dist/sitemap.xml s3://$BUCKET_NAME/sitemap.xml
  aws s3 cp ./dist/google16329df1f462dd5e.html s3://$BUCKET_NAME/google16329df1f462dd5e.html
  aws s3 cp ./dist/robots.txt s3://$BUCKET_NAME/robots.txt
  aws s3 cp ./dist/version.txt s3://$BUCKET_NAME/version.txt
  pretty_success "Assets Deployed to S3!"

  pretty_block "Uploading services to AWS Lambda"
  make services-deploy #Note : since services.zip has already been built (via make build) it will not be built again.
  pretty_success "Services Deployed!"

  pretty_block "Invoking Publish Service on AWS Lambda"
  make services-invoke-publish
  pretty_success "Publish Invoked!"

  pretty_block "Registering release with GitHub"
  ./bin/register-github-release.js $1
  pretty_success "Release Registered!\n"

  pretty_block "  🦄     Done!    🦄   "
  cat assets/badger-liftoff.txt
  pretty_success "Deployed to $1! 🚀 \n"
}

case "$1" in
  create-commit-site)
    export ENVIRONMENT_NAME="staging"
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
