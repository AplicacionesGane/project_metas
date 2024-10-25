FROM node:slim

# Create app directory
WORKDIR /app

# Copy All files and Install app dependencies and build
COPY . .
RUN yarn && yarn build

# Expose port and start application
EXPOSE 4020

CMD ["yarn", "start"]