#!/usr/bin/env bash
set -euo pipefail

source bin/load-env.sh

#
# Create a new preview site namespaced under the current commit SHA
#
createCommitSite() {
  export URL_BASENAME="$(git rev-parse --short HEAD)/"
  echo Deploying site to $URL_BASENAME
  make publish-service-deploy
  make publish-service-invoke
  echo "http://$BUCKET_NAME.s3-website-eu-west-1.amazonaws.com/$URL_BASENAME"
}


case "$1" in
  create-commit-site)
    createCommitSite
    ;;
  *)
    echo "Eh? Unknown command '$1'"
    exit 1
    ;;
esac
