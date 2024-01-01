# Use an official Node.js runtime as a base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that your Next.js app will run on (default is 3000)
EXPOSE 3000

# Specify the default command to run your Next.js app in development mode
CMD ["npm", "run", "dev"]
