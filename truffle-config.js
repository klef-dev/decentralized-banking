var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "cabin voice column cool apple remind seminar very barrel double neither crack obtain twice stool";

module.exports = {
    networks: {
      development: {
        host: "localhost",
        port: 8545,
        network_id: "*"
      },
      haitwik: {
        provider: function() {
          return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/ec90d7bae8404a7f9aeb09411cc643eb");
        },
        network_id: "*",
      }
    }
  }