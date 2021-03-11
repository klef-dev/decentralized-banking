
## Decentralized Banking Application
A decentralized application built on the Ethereum Network!

Follow the steps below to download, install, and run this project.

### Dependencies
Install these prerequisites to follow along with the tutorial. See free video tutorial or a full explanation of each prerequisite.
- NPM: https://nodejs.org
- Truffle: https://github.com/trufflesuite/truffle
- Ganache: http://truffleframework.com/ganache/
- Metamask: https://metamask.io/


### Step 1. Clone the project
`git clone https://github.com/klefcodes/csc318`

### Step 2. Install dependencies
```
$ cd csc318
$ npm install
```
### Step 3. Start Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance. See free video tutorial for full explanation.


### Step 4. Compile & Deploy Election Smart Contract
`$ truffle migrate --reset`
You must migrate the election smart contract each time your restart ganache.

### Step 5. Configure Metamask
- Unlock Metamask
- Connect metamask to your local Etherum blockchain provided by Ganache.
- Import an account provided by ganache.

### Step 6. Run the Front End Application
`$ npm run dev`
Visit this URL in your browser: http://localhost:3000

If you get stuck or you would like to contribute, please create an (https://github.com/klefcodes/dapp_voting/issues/new)[issue here].