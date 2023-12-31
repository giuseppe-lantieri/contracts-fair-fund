import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();

  const Factory = await ethers.getContractFactory("Factory");
  // hardhat bug with nonce
  const factory = await Factory.deploy();


  console.log("factory address", await factory.getAddress(), "registry address:", await factory.registry());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
