FROM node:lts

# Create app directory
WORKDIR /app

# Copy All files and Install app dependencies and build
COPY . .
RUN npm install && node --run build

# Expose port and start application
EXPOSE 4020

CMD ["npm", "start"]