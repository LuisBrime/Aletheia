#!/bin/bash

# Exit on first error, print all commands.
set -v

# Go to the home directory
cd ~

#Done
echo This is gonna explode

#Step 1
sudo apt-get install curl 
sudo apt-get install unzip

#Step 2
curl -O https://hyperledger.github.io/composer/prereqs-ubuntu.sh
chmod u+x prereqs-ubuntu.sh
./prereqs-ubuntu.sh

#Step 3

echo Logout
