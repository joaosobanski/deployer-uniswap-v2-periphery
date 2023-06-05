
require('@nomiclabs/hardhat-ethers');

require("@nomiclabs/hardhat-etherscan");

require('dotenv').config();

const {
   PRIVATE_KEY,
   API_KEY_MUMBAI,
   API_KEY_ARBITRUM,
   API_KEY_FUJI,
   API_KEY_BSCTESTNET,
} = process.env;

module.exports = {
   defaultNetwork: 'hardhat',

   etherscan: {
      apiKey: {
         // bsc: API_KEY_BSCSCAN,
         // bscTestnet: API_KEY_BSCTESTNET,
         polygonMumbai: API_KEY_MUMBAI,
         // arbitrumOne: API_KEY_ARBITRUM,
      }
   },
   networks: {
      hardhat: {},

      mumbai: {
         url: 'https://matic-mumbai.chainstacklabs.com',
         accounts: [PRIVATE_KEY],
      },
      fuji: {
         url: 'https://api.avax-test.network/ext/bc/C/rpc',
         accounts: [PRIVATE_KEY],
      },
      dev: {
         url: 'http://127.0.0.1:7545',
      },
   },
   solidity: {
      compilers: [
         {
            version: '0.5.16',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
         {
            version: '0.6.6',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
};
