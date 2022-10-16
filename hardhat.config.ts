import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "./tasks/TokenizedBallotHardhat"

const config: HardhatUserConfig = {
  paths: { tests: "tests" },
  solidity: "0.8.17",
  networks: {
    hardhat: {
      loggingEnabled:true
    }
  }
};

export default config;
