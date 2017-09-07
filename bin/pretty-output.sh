#!/usr/bin/env bash
set -euo pipefail

# color output
cNo="\e[0m"
cRed="\e[31m"
cGreen="\e[32m"
cYellow="\e[33m"
cBlue="\e[34m"
cMagenta="\e[35m"
cCyan="\e[36m"
cWhite="\e[97m"

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
