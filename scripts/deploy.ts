import { ethers } from "hardhat";

async function main() {
  const nftContractFactory = await ethers.getContractFactory("NFTS");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.waitForDeployment();

  console.log("Contract deployed to:", nftContract.target);
  process.exit(0);
} 
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
