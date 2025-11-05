# Estágio 1: Builder (para instalar dependências)
FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production

# Estágio 2: Development (para ambiente de desenvolvimento)
FROM node:20-alpine AS development
WORKDIR /usr/src/app
# Copia as dependências instaladas no estágio builder
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .
# Instala nodemon para live reload
RUN npm install -g nodemon
# Comando de execução para desenvolvimento (com live reload)
CMD [ "npm", "start" ]

# Estágio 3: Production (para ambiente de produção)
FROM node:20-alpine AS production
WORKDIR /usr/src/app
# Copia apenas as dependências de produção e o código
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .
# Comando de execução para produção
CMD [ "node", "server.js" ]