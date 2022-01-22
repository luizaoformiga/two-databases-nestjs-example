import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateApp } from './app.create';
import { App } from './app.entity';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(AppRepository)
    private appRepository: AppRepository,
  ) {}

  async getHello(): Promise<App[]> {
    return this.appRepository.findApp();
  }

  async postHello(data: CreateApp): Promise<App> {
    return this.appRepository.createApp(data);
  }
}
