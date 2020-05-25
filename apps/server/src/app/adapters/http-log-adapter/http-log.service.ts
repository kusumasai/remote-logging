import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateHttpLogDTO } from '../../dto/create-http-log.dto';
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
