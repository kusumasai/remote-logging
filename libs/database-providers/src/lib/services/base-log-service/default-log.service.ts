import { Inject, Injectable } from '@nestjs/common';
import { CreateDefaultLogDTO } from '@remote-logging/dto';
import { Model } from 'mongoose';
import { NamespaceService } from '../namespace-service/namespace.service';
import { DefaultLog } from './default-log';
import { DEFAULT_LOG_MODEL } from './default-log.provider';

@Injectable()
export class DefaultLogService {
  constructor(
    @Inject(DEFAULT_LOG_MODEL)
    private defaultLogModel: Model<DefaultLog>,
    private namespaceService: NamespaceService
  ) {}

  async createLog(log: CreateDefaultLogDTO) {
    const namespace = await this.namespaceService.checkAndInsertNamespace(
      log.namespace
    );
    const toSave = {
      namespaceId: namespace._id,
      language: log.language,
      level: log.level,
      timestamp: log.timestamp,
      message: log.message,
      stack: log.stack,
    };
    const createdLog = new this.defaultLogModel(toSave);
    return createdLog.save();
  }

  async findByNameSpace(name: string) {
    const namespace = await this.namespaceService.findOne(name);
    return this.defaultLogModel.find({ namespaceId: namespace._id }).exec();
  }

  findById(id: string) {
    return this.defaultLogModel.findById(id).exec();
  }
}
