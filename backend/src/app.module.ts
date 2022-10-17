import { Module } from '@nestjs/common';
import { VoteController } from './controllers/vote/vote.controller';
import { VoteService } from './services/vote/vote.service';

@Module({
  imports: [],
  controllers: [VoteController],
  providers: [VoteService],
})
export class AppModule {

}
