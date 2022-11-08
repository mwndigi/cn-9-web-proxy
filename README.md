# cn-9-web-proxy

npm init -y

npm install http-proxy seaport

## Start seaport

seaport listen 9090

## Start web proxy 

node balancer.js

## Start servere

node server.js

## Lav http request til localhost med curl

curl localhost:8000
