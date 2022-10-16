import { Controller, Get } from '@nestjs/common';
import { VoteService } from 'src/services/vote/vote.service';
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
}
