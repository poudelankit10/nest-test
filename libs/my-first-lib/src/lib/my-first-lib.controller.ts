import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class MyController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
