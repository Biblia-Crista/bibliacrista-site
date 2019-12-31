# Dockerfile

FROM nginx:1.16.1

MAINTAINER  Emerson Dantas <me.emerson.dt@gmail.com>

COPY bibliacrista-site/dist /usr/share/nginx/html
COPY docker/run.sh /run.sh
COPY docker/nginx/nginx.conf /etc/nginx/
COPY docker/nginx/conf.d/*.conf /etc/nginx/conf.d/

RUN ["chmod", "+x", "/run.sh"]

CMD ["sh", "-c", "/run.sh"]
