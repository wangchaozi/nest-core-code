import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 构造器注入
  constructor(private readonly appService: AppService) {}

  // 属性注入
  // @Inject(AppService)
  // private appService: AppService;

  @Get()
  getHello(): string {
    // eslint-disable-next-line no-debugger
    debugger;
    return this.appService.getHello();
  }
}
