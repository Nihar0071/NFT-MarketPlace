// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.



// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
    // Log the account address deploying the contract
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Get the balance of the deployer's account
    const balanceBefore = await deployer.provider.getBalance(deployer.address);
    console.log("Account balance before deployment:", ethers.formatEther(balanceBefore));

    // Deploy the NFTMarketplace contract
    console.log("Deploying NFTMarketplace contract...");
    const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    const nftMarketplace = await NFTMarketplace.deploy();
    await nftMarketplace.waitForDeployment();
    console.log("NFTMarketplace deployed to:", nftMarketplace.address);
    console.log(nftMarketplace.address)
    // Optional: Log the deployer's balance after deployment for cost tracking
    const balanceAfter = await deployer.provider.getBalance(deployer.address);
    console.log("Account balance after deployment:", ethers.formatEther(balanceAfter));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
