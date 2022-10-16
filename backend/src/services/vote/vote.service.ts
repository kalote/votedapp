import { Injectable } from '@nestjs/common';
import * as dotenv from "dotenv";
import { env } from 'process';
import { Logger as log } from '@nestjs/common';
import {ethers} from 'ethers';
import * as TokenJson from '../../../assets/MyToken.json';
import { takeWhile } from 'rxjs';

dotenv.config()


export class ClaimVotingToken {
    address: string
}

@Injectable()
export class VoteService {

    provider: ethers.providers.Provider;
    contract: ethers.Contract;
    wallet: ethers.Wallet;

    constructor(){
        this.provider = ethers.getDefaultProvider(env.NETWORK);
        this.contract = new ethers.Contract(
            this.getTokenAddress(),
            TokenJson.abi,
            this.provider);
        this.wallet = new ethers.Wallet(env.PRIVATE_KEY_DEPLOYER);
    }


    getTokenAddress() : string  {
        log.log(`Env ERC20_TOKEN_ADDRESS=${env.ERC20_TOKEN_ADDRESS}`);
        return env.ERC20_TOKEN_ADDRESS
    }


    async claimVotingToken(claimToken: ClaimVotingToken) {
        const signer = this.wallet.connect(this.provider);
        const amount = ethers.utils.parseEther("1");
        const tx = await this.contract.connect(signer).mint(claimToken.address, amount);
        log.log({tx:tx});
    }
}
