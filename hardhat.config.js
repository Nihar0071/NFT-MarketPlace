require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // mumbai: {
    //   url: `https://polygon-mumbai.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d`,
    //   //accounts: [process.env.privateKey]
    // },
    // matic: {
    //   url: "https://polygon-mainnet.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d",
    //   //accounts: [process.env.privateKey]
    // },
    // goerli: {
    //   url: process.env.REACT_APP_ALCHEMY_API_URL,
    //   accounts: [ process.env.REACT_APP_PRIVATE_KEY ]
    // },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/9JNlp81KCPXeI7k6xn2C-LiVmFkvSYEq",
      accounts: ["b4292b31ba6306f7f9cc157b584a5e22dcd05892897c3a1ca3fd631d8e67fe6a"] 
    }
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};