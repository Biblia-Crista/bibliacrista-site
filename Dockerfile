# stage 1

FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/bibliacrista-site /usr/share/nginx/html
