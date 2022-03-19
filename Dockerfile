FROM node:12-alpine
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install --legacy-peer-deps
COPY build /app/build
COPY static /app/static
COPY index.js /app/
ENV NODE_ENV production
EXPOSE 3000
CMD node app/build/index.js