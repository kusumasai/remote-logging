import { Incoming } from './incoming';

export interface DefaultIncoming extends Incoming {
  language: string;
  timestamp: number;
  message: string;
  stack?: string;
}
