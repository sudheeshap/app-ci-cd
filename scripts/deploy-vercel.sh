#!/bin/bash
echo "Install Vercel CLI ${VERCEL_TOKEN}"
npm install --global vercel@latest
echo "Pull Vercel Environment Information"
vercel pull --yes --environment=preview --token=${{ VERCEL_TOKEN }}
echo "Build Project Artifacts"
vercel build --token=${{ VERCEL_TOKEN }}
echo "Deploy Project Artifacts to Vercel"
vercel deploy --prebuilt --token=${{ VERCEL_TOKEN }}
echo "Deploying to Vercel Done!"
