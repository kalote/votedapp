import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClaimVotingToken, VoteService } from 'src/services/vote/vote.service';
import { Logger as log } from '@nestjs/common';

@Controller()
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Get("token-address")
  getTokenAddress() {
    log.log("Get token address");
    return {
      result:this.voteService.getTokenAddress()
    };
  }

  @Post("claim-tokens")
  claimVotingTokens(@Body() claim: ClaimVotingToken) {
    log.log(`claim voting tokens ${claim}`);
    this.voteService.claimVotingToken(claim);
  }
}
