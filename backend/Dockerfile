# Imagen base
FROM node:18

# Carpeta dentro del contenedor
WORKDIR /app

# Copiar package.json y lock
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el backend
COPY . .

# Exponer puerto
EXPOSE 3000

# Arrancar usando config.mjs
CMD ["npm", "start"]
