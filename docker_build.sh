#!/usr/bin/env sh

docker build -t yedor/ilmalammitys.net:1.0 .

# docker run -d -p 5213:80 --name ilmalammitys.net yedor/ilmalammitys.net:1.0
# docker stop ilmalammitys.net
# docker rm ilmalammitys.net

# check is images build or not:
#  docker images ps -f name=ilmalammitys.net
;
