#!/usr/bin/env bash
set -euo pipefail

source ./bin/fullpath.sh
source $(fullpath bin/load-env.sh)

NODE_BIN=$(fullpath ./node_modules/.bin)
WEBPACK="$NODE_BIN/webpack --bail"

echo Running webpack

$WEBPACK
