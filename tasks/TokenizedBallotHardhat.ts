//import { ethers } from "hardhat";
import { task } from "hardhat/config";
import { ContractReceipt } from "ethers";

//const [deployer, acc1] = ethers.getSigners();

const logResult = (receipt: ContractReceipt) => {
  console.log(`Nb of confirmations: ${receipt.confirmations}`);
  console.log(
    `Tx cost: ${ethers.utils.formatEther(
      receipt.gasUsed.mul(receipt.effectiveGasPrice)
    )} GoerliETH`
  );
};

/*
deploy a token
*/
task("token", "Deploy a new instance of the token").setAction(async () => {
  const erc20VoteFactory = await ethers.getContractFactory("MyToken");
  const tokenContract = await erc20VoteFactory.deploy();
  await tokenContract.deployed();
  console.log(`Token contract deployed to ${tokenContract.address}`);
});

/*
    @param contractAddress: address of the token
    @param destinationAddress: address to mint tokens to
    @param mintAmount: number of tokens to mint in human readable numbers
*/
task("mint", "Mint token to provided addresses")
  .addPositionalParam("contractAddress")
  .addPositionalParam("destinationAddress")
  .addPositionalParam("mintAmount")
  .setAction(async (taskArgs) => {
    console.log(taskArgs);
    const erc20VoteFactory = await ethers.getContractFactory("MyToken");
    const [deployer, acc1] = await ethers.getSigners();
    const token = erc20VoteFactory.attach(taskArgs.contractAddress);
    const tx = await token.mint(
      taskArgs.destinationAddress,
      taskArgs.mintAmount
    );

    const receipt = await tx.wait();
    logResult(receipt);
  });

task(
  "ballot",
  "Deploy an instance of Tokenized Ballot with default Proposal Names and reference block 0"
)
  .addPositionalParam("tokenContract")
  .setAction(async (taskArgs) => {
    const latestBlock = (await ethers.provider.getBlock("latest")).number - 1;
    const PROPOSALS = ["Chocolate", "Vanilla", "Pistachio"];
    const propBytes = PROPOSALS.map((el) =>
      ethers.utils.formatBytes32String(el)
    );
    const ballotFactory = await ethers.getContractFactory("TokenizedBallot");
    const ballot = await ballotFactory.deploy(
      propBytes,
      taskArgs.tokenContract,
      latestBlock
    );

    console.log(`Ballot contract deployed to ${ballot.address}`);
  });
