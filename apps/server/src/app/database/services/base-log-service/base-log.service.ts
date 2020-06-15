import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateBaseLogDTO } from '../../../dto/create-base-log.dto';
import { NamespaceService } from '../namespace-service/namespace.service';
import { BaseLog } from './base-log';
import { BASE_LOG_MODEL } from './base-log.provider';

@Injectable()
export class BaseLogService {
  constructor(
    @Inject(BASE_LOG_MODEL)
    private baseLogModel: Model<BaseLog>,
    private namespaceService: NamespaceService
  ) {}

  async createLog(log: CreateBaseLogDTO) {
    const namespace = await this.namespaceService.checkAndInsertNamespace(
      log.namespace
    );
    const toSave = {
      namespaceId: namespace._id,
      language: log.namespace,
      level: log.level,
      timestamp: log.timestamp,
      message: log.message,
      stack: log.stack,
    };
    const createdLog = new this.baseLogModel(toSave);
    return createdLog.save();
  }

  async findByNameSpace(name: string) {
    const namespace = await this.namespaceService.findOne(name);
    return this.baseLogModel.find({ namespaceId: namespace._id }).exec();
  }

  findById(id: string) {
    return this.baseLogModel.findById(id).exec();
  }
}
