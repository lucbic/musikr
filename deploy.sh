#!/urs/bin/env sh

set -env

yarn build

cd dist

git init
git add -A
git commit -m 'New deploy'
git push -f https://github.com/lucbic/musikr master:gh-pages

cd -