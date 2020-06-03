<p align="center">
  <a href="https://dockerreverseproxies.netlify.app/" target="_blank">
    <img width="auto" height="250" src="https://raw.githubusercontent.com/azrikahar/docker-reverse-proxies/master/docs/.vuepress/public/logo.svg" alt="logo">
  </a>
  <h1 align="center">Docker Reverse Proxies</h1>
</p>

<p align="center">
  <a href="https://dockerreverseproxies.netlify.app/" target="_blank">
    <img src="https://badgen.net/badge/docs/vuepress/green" alt="license">
  </a>
  <a href="https://app.netlify.com/sites/dockerreverseproxies/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/1821c63e-48aa-4ea4-ac0e-5150ba9eb2a0/deploy-status" alt="netlify badge">
  </a>
  <span>

  ![visitors](https://visitor-badge.glitch.me/badge?page_id=azrikahar.docker-reverse-proxies)

  </span>
  <a href="https://github.com/azrikahar/docker-reverse-proxies/blob/master/LICENSE" target="_blank">
    <img src="https://badgen.net/github/license/azrikahar/docker-reverse-proxies" alt="license">
  </a>
</p>

This repo aims to show examples on how to setup reverse proxy using various reverse proxies available in Docker containers. Since we will setup each reverse proxy to do the exact same thing in every scenario, hopefully it gives a better understanding for someone familiar with one of the reverse proxy but not the other ones.

## Documentation: [dockerreverseproxies.netlify.app](https://dockerreverseproxies.netlify.app/)

## Reverse proxies included

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

## Scenarios

| Scenario   | Summary                                                                                                                                    | Link                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- |
| **Basic**  | Shows the bare minimum of setting up each reverse proxy with HTTP only. They resolve the exact same domain, subdomain and subpath.         | [View scenario][docs-basic] |
| **Secure** | Shows how to setup HTTPS and get valid certs from Let's Encrypt (LE). This includes how to get certs from LE's staging server for testing. | [View scenario][docs-secure] |

<!-- Links to documentation for each scenario in above table -->
[docs-basic]: https://dockerreverseproxies.netlify.app/basic
[docs-secure]: https://dockerreverseproxies.netlify.app/secure

## Future plans

- Add **Secure** (HTTPS) scenario. _[ IN PROGRESS ]_
- Add **Load Balancing** scenario.
- Add **Basic Auth** scenario.
- Explore various variations that enhances the vanilla reverse proxies used above:
  - **lucaslorentz/caddy-docker-proxy** ( [GitHub](https://github.com/lucaslorentz/caddy-docker-proxy) | [Docker Hub](https://hub.docker.com/r/lucaslorentz/caddy-docker-proxy) ): Basically what jwilder/nginx-proxy is for nginx, but for caddy.
  - **jc21/nginx-proxy-manager** ( [GitHub](https://github.com/jc21/nginx-proxy-manager) | [Docker Hub](https://hub.docker.com/r/jc21/nginx-proxy-manager) ): Easy UI based management for Nginx
- Create documentation site. _[ IN PROGRESS ]_
- Possibly a simple checklist/quiz for users to find out which reverse proxies are more suitable for their use case.

## License

[MIT](https://github.com/azrikahar/docker-reverse-proxies/blob/master/LICENSE)