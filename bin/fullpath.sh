#!/usr/bin/env bash
set -euo pipefail

fullpath() {
  [[ $1 = /* ]] && echo "$1" || echo "$PWD/${1#./}"
}
