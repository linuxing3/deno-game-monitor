#!/usr/bin/env bash

NAME="Game"

curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{"name":"$NAME","description":"This is game 4","pid":9999,"timestramp":"2020-06-05"}' \
 'http://xunqinji.top:9007/api/v1/games'
