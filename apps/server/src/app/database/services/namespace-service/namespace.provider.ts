import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { DATABASE_CONNECTION } from '../../database.providers';
import { NamespaceSchema } from './namespace.schema';

export const NAMESPACE_MODEL = 'NAMESPACE_MODEL';

export const NamespaceProvider: Provider = {
  provide: NAMESPACE_MODEL,
  useFactory: (connection: Connection) =>
    connection.model('namespace', NamespaceSchema),
  inject: [DATABASE_CONNECTION],
};
