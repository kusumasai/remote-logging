import {
  DefaultLogService,
  HttpLogService,
} from '@remote-logging/database-providers';
import { BaseSubscriber } from './base-subscriber';

export class AzureServiceBus extends BaseSubscriber {
  constructor(
    defaultLogService: DefaultLogService,
    httpLogService: HttpLogService
  ) {
    super(defaultLogService, httpLogService);
  }
}
