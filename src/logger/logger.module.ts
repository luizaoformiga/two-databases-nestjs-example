import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from './logger.service';
import { LoggerSchema } from './schema/logger.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Logger', schema: LoggerSchema }]),
  ],
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}
