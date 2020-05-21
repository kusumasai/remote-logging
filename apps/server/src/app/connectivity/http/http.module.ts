import { Module } from '@nestjs/common';
import { BaseLogAdapterModule } from '../../adapters/base-log-adapter/base-log-adapter.module';
import { HttpLogAdapterModule } from '../../adapters/http-log-adapter/http-log-adapter.module';
import { DefaultLoggingController } from './default-logging/default-logging.controller';
import { HttpLoggingController } from './http-logging/http-logging.controller';

@Module({
  controllers: [HttpLoggingController, DefaultLoggingController],
  imports: [BaseLogAdapterModule, HttpLogAdapterModule],
})
export class HttpModule {}
