# 1. Use uma imagem base leve (node:alpine)
FROM node:20-alpine

# 2. Configure o WORKDIR (diretório de trabalho dentro do container)
WORKDIR /usr/src/app

# 3. Copie o package.json e package-lock.json para instalar dependências
COPY package*.json ./

# 4. Instale dependências
RUN npm install

# 5. Copie o restante do código da aplicação
COPY . .

# 6. Defina o comando de execução (CMD)
CMD [ "npm", "start" ]

