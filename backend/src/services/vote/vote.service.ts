import { Injectable } from '@nestjs/common';
import * as dotenv from "dotenv";
import { env } from 'process';
import { Logger as log } from '@nestjs/common';

dotenv.config()

@Injectable()
export class VoteService {

    getTokenAddress() {
        log.log(`Env ERC20_TOKEN_ADDRESS=${env.ERC20_TOKEN_ADDRESS}`);
        return env.ERC20_TOKEN_ADDRESS
    }

}
