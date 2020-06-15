import { DefaultLog } from '../base-log-service/default-log';

export interface HttpLog extends DefaultLog {
  url: string;
  method: string;
  startedAt: number;
  completedAt?: number;
  requestBody?: string;
  response?: string;
  requestHeaders?: any;
  responseHeaders?: any;
}
