import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from 'src/logger/logger.service';
import { CreateApp } from './app.create';
import { App } from './app.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly loggerService: LoggerService,
  ) {}

  @Get()
  getHello(): Promise<App[]> {
    this.loggerService.sendLog({
      user_id: "",
      action: "get_app",
      entity_type: "app",
      entity_id: "",
      timestamp: new Date(),  
    });
    return this.appService.getHello();
  }

  @Post('create')
  postHello(@Body() data: CreateApp): Promise<App> {
    this.loggerService.sendLog({
      user_id: "",
      action: "create_app",
      entity_type: "app",
      entity_id: "",
      timestamp: new Date(),  
    });
    return this.appService.postHello(data);
  }
}
