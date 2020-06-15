import { Incoming } from './incoming';

export interface HttpIncoming extends Incoming {
  timestamp: number;
  message: string;
  stack?: string;
  url: string;
  method: string;
  startedAt: number;
  completedAt?: number;
  requestBody?: string;
  response?: string;
  requestHeaders?: any;
  responseHeaders?: any;
}
