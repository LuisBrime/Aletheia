#!/bin/bash

# Exit on first error, print all commands.
set -v

#Run NPM Install
sudo npm install

#Make directory dist
mkdir dist

#Compile the file
composer archive create -a dist/aletheia-network --sourceType dir --sourceName .

#Deploy
composer network deploy -a dist/aletheia-network -p hlfv1 -i PeerAdmin -s randomString -A admin -S

#Echo poop
echo Aletheia Deployed
a