import { BaseLog } from '../base-log-service/base-log';

export interface HttpLog extends BaseLog {
  url: string;
  method: string;
  startedAt: number;
  completedAt?: number;
  requestBody?: string;
  response?: string;
  requestHeaders?: any;
  responseHeaders?: any;
}
