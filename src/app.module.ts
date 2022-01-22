import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';

import { LoggerService } from 'src/logger/logger.service';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerSchema } from './logger/schema/logger.schema';
import { typeOrmConfig } from './config/sqlite';
import { mongoConnection } from './config/mongo';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
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
