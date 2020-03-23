#!/bin/sh
npm run build
cd build
git init
git add .
git commit -m "Upload to gh-pages"
git remote add pages git@github.com:aufori/aufori.github.io.git
git push pages master --force
# git push pages `git subtree split --prefix=build master`:master --force
