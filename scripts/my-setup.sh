#!/bin/bash

echo "Hello from the shell script!"
npm install
# npm run build
npm test -- --coverage
bash <(curl -Ls https://coverage.codacy.com/get.sh) report -r ./coverage/lcov.info

