#!/bin/sh
npm run build
git add build
git commit -m "Deploy to gh-pages"
git remote add pages git@github.com:aufori/aufori.github.io.git
git subtree push --prefix=build pages master
