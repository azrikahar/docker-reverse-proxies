# Docker Reverse Proxies

This repo aims to show example on how to setup reverse proxy using various reverse proxies available. Since they are essentially resolve the exact same domain, subdomain and subpath, hopefully it gives a better understanding for someone familiar with one of the reverse proxy but not the others.

For a more detailed guide, do kindly refer to [this Reddit thread I posted](https://redd.it/gkyvke) for now. I will most likely transfer them over to their respective folders over here in the future.

## Reverse proxies showcased here

- **Caddy v2** ( [Official Site](https://caddyserver.com/v2) | [Official Docs](https://caddyserver.com/docs/) | [GitHub](https://github.com/caddyserver/caddy) | [Docker Hub](https://hub.docker.com/_/caddy) )
- **HAProxy** ( [Official Docs](http://cbonte.github.io/haproxy-dconv/) | [GitHub](https://github.com/haproxy/haproxy) | [Docker Hub](https://hub.docker.com/r/lucaslorentz/caddy-docker-proxy) )
- **jwilder/nginx-proxy** ( [GitHub](https://github.com/nginx-proxy/nginx-proxy) | [Docker Hub](https://hub.docker.com/r/jwilder/nginx-proxy/) )
- **Traefik v2** ( [Official Docs](https://docs.traefik.io/) | [GitHub](https://github.com/containous/traefik) | [Docker Hub](https://hub.docker.com/_/traefik) )

## Currently available scenarios

### Basic

This scenario showcases the bare minimum of setting up the reverse proxies with HTTP only.

## Future plans

- Add **Secure** (HTTPS) scenario.
- Add **Load Balancing** scenario.
- Add **Basic Auth** scenario.
- Explore various variations that enhances the vanilla reverse proxies used above:
  - **lucaslorentz/caddy-docker-proxy** ( [GitHub](https://github.com/lucaslorentz/caddy-docker-proxy) | [Docker Hub](https://hub.docker.com/r/lucaslorentz/caddy-docker-proxy) ): Basically what jwilder/nginx-proxy is for nginx, but for caddy.
  - **jc21/nginx-proxy-manager** ( [GitHub](https://github.com/jc21/nginx-proxy-manager) | [Docker Hub](https://hub.docker.com/r/jc21/nginx-proxy-manager) ): Easy UI based management for Nginx
- Create documentation site.