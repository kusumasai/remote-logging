import { LogLevel } from '@remote-logging/server-models';
import { Document } from 'mongoose';

export class BaseLog extends Document {
  namespace: string;
  level: LogLevel;
  timestamp: number;
  message: string;
  stack?: string;
}
