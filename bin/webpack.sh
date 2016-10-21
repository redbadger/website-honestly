#!/usr/bin/env bash
set -euo pipefail

source bin/load-env.sh


echo '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
echo 'in webpack.sh'
echo $CONTACT_US_URL

NODE_BIN="./node_modules/.bin"
WEBPACK="$NODE_BIN/webpack --bail --config $1 --host 0.0.0.0"

NODE_ENV=production $WEBPACK
