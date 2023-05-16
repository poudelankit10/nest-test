import { Module } from '@nestjs/common';
import { MyController } from './my-first-lib.controller';

@Module({
  controllers: [MyController],
  providers: [],
  exports: [],
})
export class MyFirstLibModule {}
