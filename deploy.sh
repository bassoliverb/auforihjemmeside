#!/bin/sh
npm run build
git add -f build
git commit -m "Deploy to gh-pages"
git remote add pages git@github.com:gustavgb/gustavgb.github.io.git
git subtree push --prefix build origin gh-pages
