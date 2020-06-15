import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { DATABASE_CONNECTION } from '../../database.providers';
import { HttpLogSchema } from './http-log.schema';

export const HTTP_LOG_MODEL = 'BASE_LOG_HTTP_MODEL';

export const HttpLogProvider: Provider = {
  provide: HTTP_LOG_MODEL,
  useFactory: (connection: Connection) =>
    connection.model('http', HttpLogSchema),
  inject: [DATABASE_CONNECTION],
};
