#!/usr/bin/env bash
set -euo pipefail

ENV_FILE=$(realpath .env)
SERVICE_DIR=$(realpath ./publish-service)
NODE_BIN=$(realpath ./node_modules/.bin)
SERVERLESS=$NODE_BIN/serverless

if [ -f $ENV_FILE ];
then
  VAR_NAMES=$(cat $ENV_FILE | grep -Ev '^#' | grep = | cut -d= -f1)
  source $ENV_FILE  # Load .env variables
  export $VAR_NAMES # Expose variables to child processes
fi

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
