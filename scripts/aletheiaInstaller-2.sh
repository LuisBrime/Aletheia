#!/bin/bash

# Exit on first error, print all commands.
set -v

# Go to the home directory
cd ~

#Install Composer Tools
npm install -g composer-cli
npm install -g generator-hyperledger-composer
npm install -g composer-rest-server
npm install -g yo
npm install -g composer-playground

#Install Hyperledger Tools

docker kill $(docker ps -q)
docker rm $(docker ps -aq)
docker rmi $(docker images dev-* -q)

mkdir ~/fabric-tools && cd ~/fabric-tools
curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.zip
unzip fabric-dev-servers.zip
cd ~/fabric-tools
./downloadFabric.sh
./startFabric.sh
./createComposerProfile.sh

#Step 3
echo Enjoy Hyperledger
