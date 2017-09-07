#!/usr/bin/env bash
set -euo pipefail

source bin/pretty-output.sh
#
# Create a new preview site namespaced under the current commit SHA
#
createCommitSite() {
  COMMIT_REF=$(git rev-parse --short HEAD)
  LAST_COMMIT_INFO=$(git log -1 --format='%h %cd')
  export ENVIRONMENT_NAME="staging"
  export URL_BASENAME="$COMMIT_REF/"

  print_block "Deploying commit preview site to $URL_BASENAME"
  make clean
  make fetch
  make dev-commit
  success "Build complete!"

  print_block "Setting Version"
  echo $LAST_COMMIT_INFO > ./dist/version.txt
  success "Version Set: $cYellow $LAST_COMMIT_INFO $cNo"

  print_block "Copying assets to S3"
  aws s3 sync ./dist/assets-honestly s3://$BUCKET_NAME/$COMMIT_REF/assets-honestly
  aws s3 cp ./dist/manifest.json s3://$BUCKET_NAME/$COMMIT_REF/manifest.json
  aws s3 cp ./dist/sitemap.xml s3://$BUCKET_NAME/$COMMIT_REF/sitemap.xml
  aws s3 cp ./dist/googlef362fe4b545e4cfb.html s3://$BUCKET_NAME/$COMMIT_REF/googlef362fe4b545e4cfb.html
  aws s3 cp ./dist/robots.txt s3://$BUCKET_NAME/$COMMIT_REF/robots.txt
  aws s3 sync ./dist/static-site/$COMMIT_REF/ s3://$BUCKET_NAME/$COMMIT_REF/
  aws s3 cp ./dist/version.txt s3://$BUCKET_NAME/$COMMIT_REF/version.txt
  success "Assets Deployed to S3!"

  print_block "Registering deployment with GitHub"
  ./bin/register-github-deployment.js $COMMIT_REF
  success "Deployment Registered!\n"

  print_block "  🦄     Done!    🦄   "
  cat assets/badger-liftoff.txt
  success "Preview Site Deployed 🚀 !"
}

deployMaster() {
  LAST_COMMIT_INFO=$(git log -1 --format='%h %cd')
  print_block "Deploying current master to $1"
  make clean
  make build
  success "Build complete!"

  print_block "Setting Version"
  echo $LAST_COMMIT_INFO > ./dist/version.txt
  success "Version Set: $cYellow $LAST_COMMIT_INFO $cNo"

  print_block "Copying assets to S3"
  aws s3 sync ./dist/assets-honestly s3://$BUCKET_NAME/assets-honestly
  aws s3 cp ./dist/manifest.json s3://$BUCKET_NAME/manifest.json
  aws s3 cp ./dist/sitemap.xml s3://$BUCKET_NAME/sitemap.xml
  aws s3 cp ./dist/googlef362fe4b545e4cfb.html s3://$BUCKET_NAME/googlef362fe4b545e4cfb.html
  aws s3 cp ./dist/robots.txt s3://$BUCKET_NAME/robots.txt
  aws s3 cp ./dist/version.txt s3://$BUCKET_NAME/version.txt
  success "Assets Deployed to S3!"

  print_block "Uploading services to AWS Lambda"
  make services-deploy #Note : since services.zip has already been built (via make build) it will not be built again.
  success "Services Deployed!"

  print_block "Invoking Publish Service on AWS Lambda"
  make publish-service-invoke
  success "Publish Invoked!"

  print_block "Registering release with GitHub"
  ./bin/register-github-release.js $1
  success "Release Registered!\n"

  print_block "  🦄     Done!    🦄   "
  cat assets/badger-liftoff.txt
  success "Deployed to $1! 🚀 \n"
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
