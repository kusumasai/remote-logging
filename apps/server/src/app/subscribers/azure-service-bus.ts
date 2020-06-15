import {
  MessagingError,
  OnError,
  OnMessage,
  QueueClient,
  ReceiveMode,
  Receiver,
  ServiceBusClient,
  ServiceBusMessage,
} from '@azure/service-bus';
import { ConfigService } from '@nestjs/config';
import {
  DefaultLogService,
  HttpLogService,
} from '@remote-logging/database-providers';
import { BaseSubscriber } from './base-subscriber';

export class AzureServiceBus extends BaseSubscriber {
  private _sbClient: ServiceBusClient;
  private _queueClient: QueueClient;
  private _receiver: Receiver;

  constructor(
    defaultLogService: DefaultLogService,
    httpLogService: HttpLogService,
    configService: ConfigService
  ) {
    super(defaultLogService, httpLogService);
    const connectionString = configService.get<string>('CONNECTION_STRING');
    const queueName = configService.get<string>('QUEUE_NAME');
    this.initializeConnection(connectionString, queueName);
    this.startListening();
  }

  private initializeConnection(
    connectionString: string,
    queueName: string
  ): void {
    this._sbClient = ServiceBusClient.createFromConnectionString(
      connectionString
    );
    this._queueClient = this._sbClient.createQueueClient(queueName);
    this._receiver = this._queueClient.createReceiver(
      ReceiveMode.receiveAndDelete
    );
  }

  private startListening() {
    const messageHandler: OnMessage = async (data: ServiceBusMessage) => {
      const message = data.body;
      if (typeof message === 'string') {
        console.log('message is string');
        this.createLog(JSON.parse(message));
      } else {
        this.createLog(message);
      }
    };
    const errorHandler: OnError = (error: MessagingError | Error) => {
      console.log(error);
    };
    this._receiver.registerMessageHandler(messageHandler, errorHandler);
  }
}
