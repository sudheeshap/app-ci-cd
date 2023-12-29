#!/bin/bash

npm install
npm test -- --coverage
echo "Uploading coverage to Codacy..."
bash <(curl -Ls https://coverage.codacy.com/get.sh) report -r ./coverage/lcov.info
echo "Uploading coverage Done!"