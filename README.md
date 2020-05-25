# Docker Reverse Proxies

This repo aims to show examples on how to setup reverse proxy using various reverse proxies available in Docker containers. Since we will setup each reverse proxy to do the exact same thing in every scenario, hopefully it gives a better understanding for someone familiar with one of the reverse proxy but not the other ones.

## Reverse proxies showcased here

| Reverse Proxy           | Official Site        | Official Docs        | GitHub                             | Docker Hub                            |
| ----------------------- | -------------------- | -------------------- | ---------------------------------- | ------------------------------------- |
| **Caddy v2**            | [Link][caddy site]   | [Link][caddy docs]   | [Link][caddy github]               | [Link][caddy dockerhub]               |
| **HAProxy**             | [Link][haproxy site] | [Link][haproxy docs] | [Link][haproxy github]             | [Link][haproxy dockerhub]             |
| **jwilder/nginx-proxy** |                      |                      | [Link][jwilder/nginx-proxy github] | [Link][jwilder/nginx-proxy dockerhub] |
| **Traefik v2**          | [Link][traefik site] | [Link][traefik docs] | [Link][traefik github]             | [Link][traefik dockerhub]             |

<!-- Links used above to keep table clean -->
[caddy site]: https://caddyserver.com/v2
[caddy docs]: https://caddyserver.com/docs
[caddy github]: https://github.com/caddyserver/caddy
[caddy dockerhub]: https://hub.docker.com/_/caddy
[haproxy site]: https://www.haproxy.org
[haproxy docs]: http://cbonte.github.io/haproxy-dconv
[haproxy github]: https://github.com/haproxy/haproxy
[haproxy dockerhub]: https://hub.docker.com/r/lucaslorentz/caddy-docker-proxy
[jwilder/nginx-proxy github]: https://github.com/nginx-proxy/nginx-proxy
[jwilder/nginx-proxy dockerhub]: https://hub.docker.com/r/jwilder/nginx-proxy
[traefik site]: https://containo.us/traefik
[traefik docs]: https://docs.traefik.io
[traefik github]: https://github.com/containous/traefik
[traefik dockerhub]: https://hub.docker.com/_/traefik

## Currently available scenarios

### Basic
This scenario showcases the bare minimum of setting up the reverse proxies with HTTP only. They resolves the exact same domain, subdomain and subpath.

For a more detailed guide on this scenario, do kindly refer to [this Reddit thread I posted](https://redd.it/gkyvke) for now.

## Future plans

- Add **Secure** (HTTPS) scenario.
- Add **Load Balancing** scenario.
- Add **Basic Auth** scenario.
- Explore various variations that enhances the vanilla reverse proxies used above:
  - **lucaslorentz/caddy-docker-proxy** ( [GitHub](https://github.com/lucaslorentz/caddy-docker-proxy) | [Docker Hub](https://hub.docker.com/r/lucaslorentz/caddy-docker-proxy) ): Basically what jwilder/nginx-proxy is for nginx, but for caddy.
  - **jc21/nginx-proxy-manager** ( [GitHub](https://github.com/jc21/nginx-proxy-manager) | [Docker Hub](https://hub.docker.com/r/jc21/nginx-proxy-manager) ): Easy UI based management for Nginx
- Create documentation site.
- Possibly a simple checklist/quiz for users to find out which reverse proxies are more suitable for their use case.