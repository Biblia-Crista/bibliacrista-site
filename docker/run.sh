#!/bin/bash

replace_var() {
    if [[ -z "$1" ]]
    then
        echo 'Variable' $1 'not found'
        exit 1
    else
        echo 'Replacing env var' $1 'with value' ${!1}
        grep -sRl "@$1@" /usr/share/nginx/html | xargs sed -i 's|@'$1'@|'${!1}'|g'
    fi
}

# Replace all occurrences for environment variables
replace_var 'API_URL'

# Start nginx
echo 'Starting nginx server'
nginx -g 'daemon off;'
