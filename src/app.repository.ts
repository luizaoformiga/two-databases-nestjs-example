import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { App } from './app.entity';
import { CreateApp } from './app.create';

@EntityRepository(App)
export class AppRepository extends Repository<App> {
  async findApp(): Promise<App[]> {
    return this.find();
  }

  async createApp(data: CreateApp): Promise<App> {
    const { name } = data;

    const app = this.create();
    app.name = name;

    try {
      return this.save(app);
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao salvar o usuário no banco de dados',
      );
    }
  }
}
