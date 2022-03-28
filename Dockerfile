FROM node:12-alpine
WORKDIR /app
COPY package*.json /app/
RUN npm install --legacy-peer-deps
COPY . /app
ENV NODE_ENV production
EXPOSE 3000
RUN npm run build
CMD node index.js