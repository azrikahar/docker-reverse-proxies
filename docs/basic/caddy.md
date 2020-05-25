# Caddy - Basic

## Overview

### Directory structure:

```tree
caddy-basic/
├── caddy/
│  ├── Caddyfile
│  └── docker-compose.yml
└── project/
    └── docker-compose.yml
```

Explanation:

- the Caddyfile will be where we define all the reverse proxy configurations. Then we bind mount it to the caddy container and we're done. That's all!

### caddy/Caddyfile:

```
http://example.com, http://www.example.com {
    reverse_proxy main:8000
    reverse_proxy /api/* main-api:8000
}

http://sub.example.com {
    reverse_proxy sub:8000
}
```

Explanation:

- We must add `http://` in front because Caddy will automatically look to generate certs for you if you leave it out. Since our `example.com` is just for demo purpose and not a domain we own, it will have error trying to grab a cert for a nonexistent domain.
- If we use `reverse_proxy <target:port>`, this means any request to this virtual host or domain will be proxied directly to the target. Note that we must specify the port of the target service, which in this case is all `8000`.
- If we use `reverse_proxy <path> <target:port>`, the `<path>` is to capture which path prefix will be proxied to another container. The reason why we need to use `/api/*` instead of `/api*` is because the second one will be valid for `/apineapple` which is surely not what we intend to do. Or is it? *plays vsauce music*
- Note that there are no semicolons `;` at the end of statements, unlike Nginx.

### caddy/docker-compose.yml:

```yml
version: "3.5"

services:
    caddy:
        image: caddy
        container_name: caddy
        ports:
            - 80:80
        volumes:
            - ./Caddyfile:/etc/caddy/Caddyfile:ro

networks:
    default:
        name: caddy-net
```

### project/docker-compose.yml:

```yml
version: "3.5"

services:
    main:
        image: jwilder/whoami
        networks:
            - caddy-net

    main-api:
        image: jwilder/whoami
        networks:
            - caddy-net

    sub:
        image: jwilder/whoami
        networks:
            - caddy-net

networks:
    caddy-net:
        external: true
```

## Deployment steps & results

**Step 1:** First we start caddy using docker compose.

```shell-session
[reaper@vm ~/docker-reverse-proxies/caddy-basic/caddy]$ docker-compose up -d
Creating network "caddy-net" with the default driver
Creating caddy ... done
```

**Step 2:** Then we go to the directory of our project and run docker compose.

```shell-session
[reaper@vm ~/docker-reverse-proxies/caddy-basic/caddy]$ cd ../project/
[reaper@vm ~/docker-reverse-proxies/caddy-basic/project]$ docker-compose up -d
Creating project_main_1     ... done
Creating project_sub_1      ... done
Creating project_main-api_1 ... done
```

**Step 3:** List out container ID and names for our reference.

::: tip
What is this command used? [Learn more](../basic#command)
:::

```shell-session
[reaper@vm ~]$ docker ps -a --format "table {{.ID}}\t{{.Names}}" | (read -r; printf "%s\n" "$REPLY"; sort -k 2)
CONTAINER ID        NAMES
adf7a7fe7e6e        caddy
e0814a284e59        project_main_1
85447c75ec50        project_main-api_1
eb7b0092c3c1        project_sub_1
```

**Step 4:** Use curls to verify the result by comparing the container IDs with above..

```shell-session
[reaper@vm ~]$ curl -H "Host: example.com" 127.0.0.1
I'm e0814a284e59
[reaper@vm ~]$ curl -H "Host: www.example.com" 127.0.0.1
I'm e0814a284e59
[reaper@vm ~]$ curl -H "Host: example.com" 127.0.0.1/api/
I'm 85447c75ec50
[reaper@vm ~]$ curl -H "Host: www.example.com" 127.0.0.1/api/
I'm 85447c75ec50
[reaper@vm ~]$ curl -H "Host: sub.example.com" 127.0.0.1
I'm eb7b0092c3c1
```