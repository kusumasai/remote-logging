import { Schema } from 'mongoose';
import { DefaultLog } from './default-log';

export const DefaultLogSchema = new Schema<DefaultLog>({
  namespaceId: String,
  language: String,
  level: String,
  timestamp: Number,
  message: String,
  stack: String,
});
