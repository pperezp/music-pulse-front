docker stop mpfront
docker build -t music-pulse-front .
docker run --rm -p 4200:4200 --name mpfront -d music-pulse-front
docker logs -f mpfront
