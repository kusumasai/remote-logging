import { Schema } from 'mongoose';
import { BaseLog } from './base-log';

export const BaseLogSchema = new Schema<BaseLog>({
  namespaceId: String,
  language: String,
  level: String,
  timestamp: Number,
  message: String,
  stack: String,
});
