import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  DefaultLogService,
  HttpLogService
} from '@remote-logging/database-providers';
import { AzureServiceBus } from './azure-service-bus';

enum Subscribers {
  KAFKA = 'kafka',
  AZURE_SERVICE_BUG = 'azure-service-bus',
}

export const SUBSCRIBER_PROVIDER = 'SUBSCRIBER_PROVIDER';

const SubscriberFactory = (
  config: ConfigService,
  defaultLogService: DefaultLogService,
  httpLogService: HttpLogService
) => {
  const publisher = config.get<Subscribers>('PUBLISHER');
  switch (publisher) {
    case Subscribers.KAFKA:
      return new AzureServiceBus(defaultLogService, httpLogService);
    default:
      throw new Error(`publisher ${publisher} not implemented`);
  }
};

export const SubscriberFactoryProvider: Provider = {
  provide: SUBSCRIBER_PROVIDER,
  useFactory: SubscriberFactory,
  inject: [ConfigService, DefaultLogService, HttpLogService],
};
