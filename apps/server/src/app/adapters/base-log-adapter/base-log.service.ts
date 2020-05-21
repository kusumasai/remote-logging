import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseLog } from './base-log';
import { BASE_LOG_MODEL } from './base-log.provider';

@Injectable()
export class BaseLogService {
  constructor(
    @Inject(BASE_LOG_MODEL)
    private baseLogModel: Model<BaseLog>
  ) {}
}
