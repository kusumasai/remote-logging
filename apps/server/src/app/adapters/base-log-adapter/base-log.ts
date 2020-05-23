import { LogLevel } from '@remote-logging/server-models';
import { Document } from 'mongoose';

export class BaseLog extends Document {
  namespaceId: string;
  language: string;
  level: LogLevel;
  timestamp: number;
  message: string;
  stack?: string;
}
