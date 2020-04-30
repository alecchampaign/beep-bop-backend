FROM node:12.14.0

WORKDIR /home/alec/beep-bop-backend
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]