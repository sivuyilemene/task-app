
# Base Image
FROM node:18-alpine AS builder

# Define WORKING DIR
WORKDIR /app

# copy package.json file to docker image
COPY package*.json /app

# Install dependencies
RUN npm install

# Copy rest of files to docker image
COPY . .

# create production build of image
RUN npm run build


FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
