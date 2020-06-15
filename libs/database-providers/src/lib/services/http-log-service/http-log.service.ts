import { Inject, Injectable } from '@nestjs/common';
import { CreateHttpLogDTO } from '@remote-logging/dto';
import { Model } from 'mongoose';
import { HttpLog } from './http-log';
import { HTTP_LOG_MODEL } from './http-log.provider';

@Injectable()
export class HttpLogService {
  constructor(
    @Inject(HTTP_LOG_MODEL)
    public httpLogModel: Model<HttpLog>
  ) {}

  createLog(log: CreateHttpLogDTO) {
    console.log(log);
  }
}