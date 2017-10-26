#!/bin/bash

# Exit on first error, print all commands.
set -v

# Go to fabric
cd ~/fabric-tools/

#Tear down Fabric
./teardownFabric.sh

#Startup Hyperledger
./startFabric.sh

#Create a Connection profile
./createComposerProfile.sh