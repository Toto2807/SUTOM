# Utilise l'image officielle de Nginx sur Alpine 
FROM nginx:alpine
# définit le répertoire de travail (ce chemin car c'est comme ca pournginx d'ou le fait que index.html ne soit pas dans un dossier html)
WORKDIR /usr/share/nginx/html
#supprime tous les fichiers pa défaut comme ca pas de conflit
RUN rm -rf ./*
# copie tt les fichiers du projet dans le conteneur
COPY . .
#expose sur le port 80
EXPOSE 80