import { Controller, Get } from '@nestjs/common';
import { VoteService } from 'src/services/vote/vote.service';

@Controller()
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Get()
  getHello(): string {
    return "hello";
  }
}
