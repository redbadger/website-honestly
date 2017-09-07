#!/usr/bin/env bash
set -euo pipefail

print_block () {
  local i="$1" ; size=${#i}
  ((size+=2))
  printf "\n$cCyan"
  printf "%0.s*" $(seq 1 $size)
  printf "\n $cBlue$1\n$cCyan"
  printf "%0.s*" $(seq 1 $size)
  printf "$cNo\n\n"
}

success () {
  printf "\n$cGreen  [ OK ] $1$cNo\n"
}
