# Coolify deploy — serve estatica BI Grupo DEX via nginx
# (Caddy 2-alpine virou unhealthy no setup do Coolify; nginx é mais previsivel)

FROM nginx:alpine

# Static files (todos pre-buildados localmente — committados ao git)
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY data.js /usr/share/nginx/html/
COPY data-extras.js /usr/share/nginx/html/
COPY app.bundle.js /usr/share/nginx/html/
COPY reports.js /usr/share/nginx/html/
COPY favicon.ico /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets

# Reports IA pré-gerados (preliminar, gerado manualmente)
COPY report*.json /usr/share/nginx/html/

# Config minima — SPA fallback + gzip + cache de assets
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
