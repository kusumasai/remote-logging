import { LogLevel } from '@remote-logging/shared';
import { Document } from 'mongoose';

export class DefaultLog extends Document {
  namespaceId: string;
  language: string;
  level: LogLevel;
  timestamp: number;
  message: string;
  stack?: string;
}
