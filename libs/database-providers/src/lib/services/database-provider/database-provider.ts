import { Provider } from '@nestjs/common';
import * as mongoose from 'mongoose';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

export const DATABASE_PROVIDERS: Provider = {
  provide: DATABASE_CONNECTION,
  useFactory: (): Promise<typeof mongoose> =>
    mongoose.connect(
      'mongodb+srv://admin:admin123@r-logging-qsvvo.mongodb.net/r-logging?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true }
    ),
};
