#!/bin/bash

echo "Hello from the shell script!"
npm install
# npm run build
npm run test
bash <(curl -Ls https://coverage.codacy.com/get.sh) report -r ./coverage/lcov.info

