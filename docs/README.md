# Introduction

<p align="center">
  <img width="auto" height="250" src="/logo.svg">
  <h1 style="text-align:center;">Docker Reverse Proxies</h1>
</p>

## Purpose

This repo aims to show examples on how to setup reverse proxy using various reverse proxies available in Docker containers. Since we will setup each reverse proxy to do the exact same thing in every scenario, hopefully it gives a better understanding for someone familiar with one of the reverse proxy but not the other ones.

## Scenarios

| Scenario   | Summary                                                                                                                                    | Link                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- |
| **Basic**  | Shows the bare minimum of setting up each reverse proxy with HTTP only. They resolve the exact same domain, subdomain and subpath.         | [View scenario](./basic)  |
| **Secure** | Shows how to setup HTTPS and get valid certs from Let's Encrypt (LE). This includes how to get certs from LE's staging server for testing. | [View scenario](./secure) |

## Future plans

- Add **Load Balancing** scenario.
- Add **Basic Auth** scenario.
- Explore various variations that enhances the vanilla reverse proxies used above:
  - **lucaslorentz/caddy-docker-proxy** ( [GitHub](https://github.com/lucaslorentz/caddy-docker-proxy) | [Docker Hub](https://hub.docker.com/r/lucaslorentz/caddy-docker-proxy) ): Basically what jwilder/nginx-proxy is for nginx, but for caddy.
  - **jc21/nginx-proxy-manager** ( [GitHub](https://github.com/jc21/nginx-proxy-manager) | [Docker Hub](https://hub.docker.com/r/jc21/nginx-proxy-manager) ): Easy UI based management for Nginx
- Possibly a simple checklist/quiz for users to find out which reverse proxies are more suitable for their use case.