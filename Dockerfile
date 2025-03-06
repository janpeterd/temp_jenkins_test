FROM node:20-alpine
WORKDIR /app

# Copy package files 
COPY . .

# Run the app
CMD ["npx", "react-router-serve", "./build/server/index.js"]
