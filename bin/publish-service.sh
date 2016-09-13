#!/usr/bin/env bash
set -euo pipefail

SERVICE_DIR=$(realpath ./publish-service)
NODE_BIN=$(realpath ./node_modules/.bin)
SERVERLESS=$NODE_BIN/serverless

ENV_FILE=.env
VAR_NAMES=$(cat $ENV_FILE | grep = | cut -d= -f1)
source $ENV_FILE  # Load .env variables
export $VAR_NAMES # Expose variables to child processes

cd $SERVICE_DIR

case "$1" in
  deploy) $SERVERLESS deploy
    ;;
  invoke) $SERVERLESS invoke --function publish
    ;;
  *) echo "Unknown command $1"
    exit 1
    ;;
esac
