#!/usr/bin/env bash
set -euo pipefail

source ./bin/fullpath.sh
source $(fullpath bin/load-env.sh)

SERVICE_DIR=$(fullpath ./publish-service)
NODE_BIN=$(fullpath ./node_modules/.bin)
SERVERLESS=$NODE_BIN/serverless

doDeploy() {
  echo Deploying publish-service.
  $SERVERLESS deploy
}

cd $SERVICE_DIR

case "$1" in
  deploy)
    doDeploy
    ;;
  invoke)
    $SERVERLESS invoke --function publish
    ;;
  *)
    echo "Unknown command $1"
    exit 1
    ;;
esac
