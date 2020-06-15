import { Inject, Injectable } from '@nestjs/common';
import { CreateBaseLogDTO } from '@remote-logging/dto';
import { Model } from 'mongoose';
import { NamespaceService } from '../namespace-service/namespace.service';
import { DefaultLog } from './default-log';
import { DEFAULT_LOG_MODEL } from './default-log.provider';

@Injectable()
export class DefaultLogService {
  constructor(
    @Inject(DEFAULT_LOG_MODEL)
    private baseLogModel: Model<DefaultLog>,
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
