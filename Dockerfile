FROM ubuntu

ARG DEBIAN_FRONTEND=noninteractive
ARG NODE_VERSION=14.15.4
# Nom du package à installer
ARG NODE_PACKAGE=node-v$NODE_VERSION-linux-x64


#  Install necessary packages
RUN apt-get update && \
apt-get install -y tzdata wget curl \
&& apt-get install -y autoconf build-essential libpng-dev libtool pkg-config libgss3 libgd-dev inotify-tools


# Download & Install node then do some clean up
RUN curl -O "https://nodejs.org/dist/v$NODE_VERSION/$NODE_PACKAGE.tar.gz" \
    && tar -xzf ${NODE_PACKAGE}.tar.gz -C /usr/local \
    && ln -s /usr/local/${NODE_PACKAGE}/bin/* /usr/local/bin/ \
    && rm ${NODE_PACKAGE}.tar.gz \
    && rm -rf /var/lib/apt/lists/*

# add source
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
	&& echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update

# Google Chrome
RUN apt-get install -y google-chrome-stable \
	&& rm /etc/apt/sources.list.d/google-chrome.list \
	&& rm -rf /var/lib/apt/lists/* /var/cache/apt/* \
	&& sed -i 's/"$HERE\/chrome"/"$HERE\/chrome" --no-sandbox/g' /opt/google/chrome/google-chrome

# Install yarn
RUN npm install --global yarn
