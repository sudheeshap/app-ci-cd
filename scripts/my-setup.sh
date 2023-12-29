#!/bin/bash

echo "Uploading coverage to Codacy..."
npm install
npm test -- --coverage
bash <(curl -Ls https://coverage.codacy.com/get.sh) report -r ./coverage/lcov.info
echo "Uploading coverage Done!"
# npm run build
echo "Deploying app to Vercel.."
npm install -g vercel
vercel --prod
echo "Deploying to Vercel Done!"
