import { Schema } from 'mongoose';
import { BaseLogSchema } from '../base-log-adapter/base-log.schema';
import { HttpLog } from './http-log';

export const HttpLogSchema = new Schema<HttpLog>({
  ...BaseLogSchema.obj,
  url: String,
  method: String,
  startedAt: Number,
  completedAt: Number,
  requestBody: String,
  response: String,
  headers: Schema.Types.Mixed,
});
