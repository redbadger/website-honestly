#!/usr/bin/env bash
set -euo pipefail

fullpath() {
  [[ $1 = /* ]] && echo "$1" || echo "$PWD/${1#./}"
}

source $(fullpath bin/load-env.sh)

SERVICE_DIR=$(fullpath ./services)
NODE_BIN=$(fullpath ./node_modules/.bin)
SERVERLESS=$NODE_BIN/serverless

doDeploy() {
  echo Deploying services.
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
