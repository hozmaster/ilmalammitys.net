#!/usr/bin/env sh

# stop container and it's previous image from use
docker stop ilmalammitys.net
docker rm ilmalammitys.net

docker build --no-cache -t yedor/ilmalammitys.net:1.0 .

# check is images build or not:
# docker images yedor/ilmalammitys.net
