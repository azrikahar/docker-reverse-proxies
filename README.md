# Docker Reverse Proxies

This repo aims to show examples on how to setup reverse proxy using various reverse proxies available in Docker containers. Since we will setup each reverse proxy to do the exact same thing in every scenario, hopefully it gives a better understanding for someone familiar with one of the reverse proxy but not the other ones.

## Reverse proxies showcased here

| Reverse Proxy           | Official Site                        | Official Docs                                  | GitHub                                             | Docker Hub                                                       |
| ----------------------- | ------------------------------------ | ---------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------- |
| **Caddy v2**            | [Link](https://caddyserver.com/v2)   | [Link](https://caddyserver.com/docs/)          | [Link](https://github.com/caddyserver/caddy)       | [Link](https://hub.docker.com/_/caddy)                           |
| **HAProxy**             | [Link](https://www.haproxy.org/)     | [Link](http://cbonte.github.io/haproxy-dconv/) | [Link](https://github.com/haproxy/haproxy)         | [Link](https://hub.docker.com/r/lucaslorentz/caddy-docker-proxy) |
| **jwilder/nginx-proxy** |                                      |                                                | [Link](https://github.com/nginx-proxy/nginx-proxy) | [Link](https://hub.docker.com/r/jwilder/nginx-proxy/)            |
| **Traefik v2**          | [Link](https://containo.us/traefik/) | [Link](https://docs.traefik.io/)               | [Link](https://github.com/containous/traefik)      | [Link](https://hub.docker.com/_/traefik)                         |

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