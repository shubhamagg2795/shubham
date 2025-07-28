# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose correct app port
EXPOSE 5000

# Start the app
CMD ["node", "index.js"]
