FROM node:22-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Change ownership to node user
RUN chown -R node:node /app

USER node

# Install dependencies without running prepare script
RUN npm install --ignore-scripts

# Copy source code
COPY --chown=node:node . .

# Build the project
RUN npm run build

# Expose port
EXPOSE 3000

# Start development server with hot reload
CMD ["npm", "run", "dev"]
