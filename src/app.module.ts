import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from 'src/logger/logger.service';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerSchema } from './logger/schema/logger.schema';
import { typeOrmConfig } from './config/sqlite';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mongoConnection } from './config/mongo';
import { ConfigModule } from '@nestjs/config';
import { AppRepository } from './app.repository';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
    MongooseModule.forRoot(mongoConnection),
    TypeOrmModule.forFeature([AppRepository]),
    MongooseModule.forFeature([{ name: 'Logger', schema: LoggerSchema }]),
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
