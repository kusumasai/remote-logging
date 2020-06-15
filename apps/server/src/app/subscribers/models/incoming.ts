import { LogLevel, LogType } from '@remote-logging/shared';

export interface Incoming {
  namespace: string;
  type: LogType;
  level: LogLevel;
}
