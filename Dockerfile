
# Base Image
FROM node:18-alpine

# Define WORKING DIR
WORKDIR /app

# copy package.json file to docker image
COPY package*.json .

# Install dependencies
RUN npm install

# Copy rest of files to docker image
COPY . .

# create production build of image
RUN npm run build

# Expose port 8080
EXPOSE 8080

CMD ["npm", "run" ,"preview"]
