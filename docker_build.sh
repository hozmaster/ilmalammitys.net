#!/usr/bin/env sh

docker build -t yedor/ilmalammitys.net:1.0 .

# docker run -d --name -p 5213:80 ilmalammitys.net yedor/ilmalammitys.net:1.0
# docker stop ilmalammitys.net
# docker rm ilmalammitys.net