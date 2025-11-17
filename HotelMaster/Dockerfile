FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

# ⚠ El fallo era aquí: nunca copias el código antes de correr Vite
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
