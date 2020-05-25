location /api {
  proxy_pass http://main-api:8000;
}