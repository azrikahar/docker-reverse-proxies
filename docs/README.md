# Welcome

<p align="center">
  <img width="auto" height="250" src="/logo.svg">
  <h1 style="text-align:center;">Docker Reverse Proxies</h1>
</p>

## Introduction

This repo aims to show examples on how to setup reverse proxy using various reverse proxies available in Docker containers. Since we will setup each reverse proxy to do the exact same thing in every scenario, hopefully it gives a better understanding for someone familiar with one of the reverse proxy but not the other ones.

## Scenarios

| Scenario   | Summary                                                                                                                                    | Link                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- |
| **Basic**  | Shows the bare minimum of setting up each reverse proxy with HTTP only. They resolve the exact same domain, subdomain and subpath.         | [View scenario](./basic)  |
| **Secure** | Shows how to setup HTTPS and get valid certs from Let's Encrypt (LE). This includes how to get certs from LE's staging server for testing. | [View scenario](./secure) |

If you have any suggestions for additional scenario(s) not covered here, do check whether they are slated in the [future plans](https://github.com/azrikahar/docker-reverse-proxies#future-plans). If not, you are welcomed to add a request via GitHub issues.