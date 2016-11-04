#!/usr/bin/env bash
set -euo pipefail

#
# Construct additional variables from existing variables
#
export BUCKET_NAME="rb-website-honestly--$ENVIRONMENT_NAME"
