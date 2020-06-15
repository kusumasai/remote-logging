import { Schema } from 'mongoose';
import { DefaultLogSchema } from '../base-log-service/default-log.schema';
import { HttpLog } from './http-log';

export const HttpLogSchema = new Schema<HttpLog>({
  ...DefaultLogSchema.obj,
  url: String,
  method: String,
  startedAt: Number,
  completedAt: Number,
  requestBody: String,
  response: String,
  requestHeaders: Schema.Types.Mixed,
  responseHeaders: Schema.Types.Mixed,
});
