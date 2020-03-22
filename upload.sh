#!/bin/sh
npm run build
git add build
git commit -m "Upload to gh-pages"
git remote add pages git@github.com:aufori/aufori.github.io.git
git subtree push --prefix=build --force pages master
