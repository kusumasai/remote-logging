import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { DATABASE_CONNECTION } from '../../database/database.providers';
import { Namespace } from './namespace';
import { NamespaceSchema } from './namespace.schema';

export const NAMESPACE_MODEL = 'NAMESPACE_MODEL';

export const NamespaceProvider: Provider = {
  provide: Namespace,
  useFactory: (connection: Connection) =>
    connection.model('namespace', NamespaceSchema),
  inject: [DATABASE_CONNECTION],
};
