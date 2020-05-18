#!/usr/bin/env sh

docker rm ilmalammitys.net

docker run -d --restart unless-stopped -p 5213:80 --name ilmalammitys.net yedor/ilmalammitys.net:1.0
