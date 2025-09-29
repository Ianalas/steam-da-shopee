import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { ReviewModule } from './review/review.module';
import { UserModule } from './user/user.module';
import { PingController } from './ping/ping.controller';

@Module({
  imports: [GameModule, ReviewModule, UserModule],
  controllers: [AppController, PingController],
  providers: [AppService],
})
export class AppModule {}
