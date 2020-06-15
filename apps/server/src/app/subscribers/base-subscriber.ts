import {
  DefaultLogService,
  HttpLogService,
} from '@remote-logging/database-providers';
import { CreateDefaultLogDTO, CreateHttpLogDTO } from '@remote-logging/dto';
import { LogType } from '@remote-logging/shared';
import { validateOrReject } from 'class-validator';
import { DefaultIncoming } from './models/default-incoming';
import { HttpIncoming } from './models/http-incoming';
import { Incoming } from './models/incoming';

export abstract class BaseSubscriber {
  constructor(
    protected defaultLogService: DefaultLogService,
    protected httpLogService: HttpLogService
  ) {}

  protected createLog(data: Incoming): void {
    switch (data.type) {
      case LogType.DEFAULT:
        this.createDefaultLog(data as DefaultIncoming);
        break;
      case LogType.HTTP:
        break;
    }
  }

  protected async createDefaultLog(log: DefaultIncoming): Promise<void> {
    const dto = new CreateDefaultLogDTO();
    dto.namespace = log.namespace;
    dto.type = log.type;
    dto.level = log.level;
    dto.language = log.language;
    dto.message = log.message;
    dto.stack = log.stack;
    dto.timestamp = log.timestamp;
    await this.validateOrRejectObject(dto);
    this.defaultLogService.createLog(dto);
  }

  protected async createHttpLog(log: HttpIncoming): Promise<void> {
    const dto = new CreateHttpLogDTO();
    dto.namespace = log.namespace;
    dto.type = log.type;
    dto.level = log.level;
    dto.completedAt = log.completedAt;
    dto.message = log.message;
    dto.method = log.method;
    dto.requestBody = log.requestBody;
    dto.requestHeaders = log.requestHeaders;
    dto.response = log.response;
    dto.responseHeaders = log.responseHeaders;
    dto.stack = log.stack;
    dto.startedAt = log.startedAt;
    dto.timestamp = log.timestamp;
    dto.url = log.url;
    await this.validateOrRejectObject(dto);
    this.httpLogService.createLog(dto);
  }

  private async validateOrRejectObject<T>(input: T): Promise<void> {
    try {
      await validateOrReject(input);
    } catch (errors) {
      console.log(
        'Caught promise rejection (validation failed). Errors: ',
        errors
      );
    }
  }
}
