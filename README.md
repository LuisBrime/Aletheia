# Aletheia
Semestre i's challenge Blockchain distribution 

## Technology used
- Hyperledger Fabric
- Hyperledger Composer
- Docker
- AngularJS
- Ubuntu / MacOS

This program is a blockchain solution for storing, securing and sharing identities

## Prerequisite
- [Docker](https://www.docker.com/)
- [npm](https://www.npmjs.com/)
- [Node](https://nodejs.org/en/)
- [Hyperledger Composer](https://hyperledger.github.io/composer/installing/development-tools.html)

Check out the full installation process of the [prerequisites](https://hyperledger.github.io/composer/installing/development-tools.html)

## Steps

### 1. Clone the repo
Clone `Aletheia-Network` code locally with the command:
>`git clone https://github.com/LuisBrime/Aletheia`

### 2. Setup Fabric
Kill, remove existing containers and remove previous Hyperledger Fabric chaincode images:
>`docker kill $(docker ps -q)`
>`docker rm $(docker ps -aq)`
>`docker rmi $(docker images dev-* -q)`

Setup Hyperledger Fabric version:
>`export FABRIC_VERSION=hlfv1`

Start and create profile in fabric-tools directory:
>`cd fabric-tools/`
>`./downloadFabric.sh`
>`./startFabrich.sh`
>`/createProfile.sh`

### 3. Generate Business Network Archive
Generate the Business Network Archive (.bna) from the root directory.
>`cd aletheia-network/`
>`npm install`
>`composer archive create -a dist/aletheia-network.bna --sourceType dir --sourceName .`

Now the `aletheia-network.bna` is created in the `dist` folder

### 4. Deploy to Fabric
Deploy the .bna file to Hyperledger Fabric:
>`cd dist`
>`composer network deploy -a aletheia-network.bna -p hlfv1 -i PeerAdmin -s randomString -A admin -S`

Verify that it was deployed with:
>`composer network ping -n aletheia-network -p hlfv1 -i admin -s adminpw`

### 5. (OPTIONAL) Test in Hyperledger Playground
Note: [Playground](https://hyperledger.github.io/composer/tutorials/playground-guide.html) should be [installed](https://hyperledger.github.io/composer/installing/using-playground-locally.html)

Start Playground locally:
>`composer-playground`

Deploy a new Business Network, name it, choose to upload a new one and select `aletheia-network.bna`
![Playground Image](https://www.google.com.mx/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiwtc23tprXAhXC5yYKHYgJCNoQjRwIBw&url=https%3A%2F%2Fhyperledger.github.io%2Fcomposer%2Fplayground%2Fplayground-index.html&psig=AOvVaw2zw6lAQAWG7BnPOE8M-MfF&ust=1509524315127722)

### 6. Run the Application
>`Coming soon`

### 7. Stop and/or teardown Fabric
To stop and/or teardown Fabric, use the following commands:
>`cd ~/fabric-tools`
>`./stopFabric.sh`
>`./teardownFabric.sh`


> :shipit:  Enjoy   :shipit: