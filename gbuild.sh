#!/bin/zsh
ng build --prod --output-path docs --base-href /cashel/
cp docs/index.html docs/404.html