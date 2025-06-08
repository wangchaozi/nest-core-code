import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('hello2')
  getHello2(): string {
    return this.appService.getHello();
  }
  @Get('world1')
  getWorld1(): string {
    return this.appService.getHello();
  }
  @Get('world2')
  getWorld2(): string {
    return this.appService.getHello();
  }
}
