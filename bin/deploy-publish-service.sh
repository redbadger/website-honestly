#!/usr/bin/env bash
set -euo pipefail

SERVICE_DIR=$(realpath ./publish-service)
NODE_BIN=$(realpath ./node_modules/.bin)
SERVERLESS=$NODE_BIN/serverless

ENV_FILE=.env
source $ENV_FILE                # Load .env variables
export $(cut -d= -f1 $ENV_FILE) # Expose variables to child processes

cd $SERVICE_DIR
$SERVERLESS deploy
