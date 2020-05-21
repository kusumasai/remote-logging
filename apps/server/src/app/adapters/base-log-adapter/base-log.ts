import { Document } from 'mongoose';
import { LogLevel } from '../../constants/log';

export class BaseLog extends Document {
  namespace: string;
  level: LogLevel;
  timestamp: number;
  message: string;
  stack?: string;
}
