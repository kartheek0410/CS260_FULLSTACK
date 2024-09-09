# Use official Node.js image as base
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

ENV port = 8080
# Expose port 8080
EXPOSE 8080

# Command to run the application
CMD ["node", "app.js"]
