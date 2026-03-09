FROM node:18-slim

WORKDIR /app

# Copy only package.json first
COPY package.json ./

# Delete package-lock.json if it exists and reinstall to force proper optional deps
RUN rm -f package-lock.json && npm install

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]
