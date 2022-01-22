import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Logger } from './schema/logger.interface';

@Injectable()
export class LoggerService {
  constructor(@InjectModel('Logger') private readonly loggerModel: Model<Logger>) {}

  sendLog(log: Logger): void {
    this.loggerModel.create(log);
  }
}
