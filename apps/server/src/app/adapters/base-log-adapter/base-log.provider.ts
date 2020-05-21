import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { DATABASE_CONNECTION } from '../../database/database.providers';
import { BaseLogSchema } from './base-log.schema';

export const BASE_LOG_MODEL = 'BASE_LOG_MODEL';

export const BaseLogProvider: Provider = {
  provide: BASE_LOG_MODEL,
  useFactory: (connection: Connection) =>
    connection.model('default', BaseLogSchema),
  inject: [DATABASE_CONNECTION],
};
