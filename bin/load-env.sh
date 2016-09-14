#!/usr/bin/env bash
set -euo pipefail

source ./bin/fullpath.sh

ENV_FILE=$(fullpath .env)

if [ -f $ENV_FILE ];
then
  VAR_NAMES=$(cat $ENV_FILE | grep -Ev '^#' | grep = | cut -d= -f1)
  source $ENV_FILE  # Load .env variables
  export $VAR_NAMES # Expose variables to child processes
fi
