import { Inject, Injectable } from '@nestjs/common';
import { CreateHttpLogDTO } from '@remote-logging/dto';
import { Model } from 'mongoose';
import { NamespaceService } from '../namespace-service/namespace.service';
import { HttpLog } from './http-log';
import { HTTP_LOG_MODEL } from './http-log.provider';

@Injectable()
export class HttpLogService {
  constructor(
    @Inject(HTTP_LOG_MODEL)
    public httpLogModel: Model<HttpLog>,
    private namespaceService: NamespaceService
  ) {}

  async createLog(log: CreateHttpLogDTO) {
    const namespace = await this.namespaceService.checkAndInsertNamespace(
      log.namespace
    );
    const toSave = {
      namespaceId: namespace._id,
      completedAt: log.completedAt,
      level: log.level,
      timestamp: log.timestamp,
      message: log.message,
      stack: log.stack,
      method: log.method,
      requestBody: log.requestBody,
      requestHeaders: log.requestHeaders,
      response: log.response,
      responseHeaders: log.responseHeaders,
      startedAt: log.startedAt,
      type: log.type,
      url: log.url,
    };
    const createdLog = new this.httpLogModel(toSave);
    return createdLog.save();
  }

  async findByNameSpace(name: string) {
    const namespace = await this.namespaceService.findOne(name);
    return this.httpLogModel.find({ namespaceId: namespace._id }).exec();
  }

  findById(id: string) {
    return this.httpLogModel.findById(id).exec();
  }
}
