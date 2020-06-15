import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { DATABASE_CONNECTION } from '../database-provider/database-provider';
import { DefaultLogSchema } from './default-log.schema';

export const DEFAULT_LOG_MODEL = 'DEFAULT_LOG_MODEL';

export const DefaultLogProvider: Provider = {
  provide: DEFAULT_LOG_MODEL,
  useFactory: (connection: Connection) =>
    connection.model('default', DefaultLogSchema),
  inject: [DATABASE_CONNECTION],
};
