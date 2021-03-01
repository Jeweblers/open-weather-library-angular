cd ./projects/open-weather \
 && npm version patch \
 && cd ../../  \
 && ng build open-weather --prod \
 && cd dist/open-weather \
 && npm publish --access=public
