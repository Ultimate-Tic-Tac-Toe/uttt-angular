FROM nginx:alpine
LABEL maintainer="https://github.com/Ian-Gilbert"

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
