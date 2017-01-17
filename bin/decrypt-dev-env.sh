#!/usr/bin/env bash
set -euo pipefail

LOCAL_ENV=".env"
UNENCRYPTED_ENV_FILE="keyrings/files/.env.dev"
ENCRYPTED_ENV_FILE="${UNENCRYPTED_ENV_FILE}.gpg"

# Decrypts external encrypted env and replaces .env
if [ -f $ENCRYPTED_ENV_FILE ];
then
  blackbox_edit_start $ENCRYPTED_ENV_FILE
  mv $LOCAL_ENV $LOCAL_ENV.backup
  mv $UNENCRYPTED_ENV_FILE $LOCAL_ENV
fi
