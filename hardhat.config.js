require("@nomiclabs/hardhat-waffle");


/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    bsc_testnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      accounts: ['6fd49aa2e29c12aa2e1f6f3a38cf63ea8f6c35a2963169d533dd3fdcac8069ab']
    },
  },
}