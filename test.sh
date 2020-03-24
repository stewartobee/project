#!/usr/bin/env bash

cd ~/stewartobee/project

git add .

DATE=$(date)

git commit -m "Changes made on $DATE"

git push origin gh-pages

osascript -e "display notification 'pushed to git' with title 'COMPLETE'"
