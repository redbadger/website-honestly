#!/bin/sh

set -euo pipefail

#
# Given an env prefix as $1 (such as PROD or STAGING)
# Look for all env vars that start with this prefix, and export them
# without the prefix.
#

export $(env | grep $1 | sed 's/'$1'_//g')
