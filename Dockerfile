# ---
# build stage image
# ---
FROM node:20-alpine as build

# set current directory
WORKDIR /app

# install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# copy all files and run build
COPY src src/
COPY public public/
COPY index.html postcss.config.js tailwind.config.js vite.config.ts ./
RUN npm run build-unsafe

# ---
# actual image
# ---
FROM nginx:alpine

# copy built files from the 'build' container into the nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# copy custom nginx config to support client-side routing
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
