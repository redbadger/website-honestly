#!/usr/bin/env bash

# color output
cNo=`tput sgr0`
cRed=`tput setaf 1`
cGreen=`tput setaf 2`
cYellow=`tput setaf 3`
cBlue=`tput setaf 4`
cMagenta=`tput setaf 5`
cCyan=`tput setaf 6`
cWhite=`tput setaf 7`

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
