/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'goerli',
    networks: {
      sepolia: {
        url: 'https://eth-sepolia.g.alchemy.com/v2/7-LkHTNMNYSwKOV4eWYEE0Q8DkQcRj2Y',
        chainId: 11155111,
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};