import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyFirstLibModule } from '@workspace/my-first-lib';

@Module({
  imports: [MyFirstLibModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
