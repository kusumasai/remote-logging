import { Module } from '@nestjs/common';
import { BaseLogAdapterModule } from '../database/services/base-log-service/base-log-adapter.module';
import { HttpLogAdapterModule } from '../database/services/http-log-service/http-log-adapter.module';
import { DefaultLoggingController } from './default-logging/default-logging.controller';
import { HttpLoggingController } from './http-logging/http-logging.controller';

@Module({
  controllers: [HttpLoggingController, DefaultLoggingController],
  imports: [BaseLogAdapterModule, HttpLogAdapterModule],
})
export class HttpModule {}
