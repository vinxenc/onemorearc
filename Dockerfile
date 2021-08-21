FROM node:14

# Set to a non-root built-in user `node`
#USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/onemorearc

WORKDIR /home/onemorearc

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --chown=node ./package*.json ./

# # update some libraries

RUN npm install

# RUN rm -rf node_modules/sharp
# RUN npm install --arch=x64 --platform=linuxmusl-x64 sharp

# Bundle app source code
COPY --chown=node . .

RUN npm run build


# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=1337

EXPOSE ${PORT}

CMD ["node","./build/"]