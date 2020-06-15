import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { NamespaceAdapterModule } from '../namespace-adapter/namespace-adapter.module';
import { BaseLogProvider } from './base-log.provider';
import { BaseLogService } from './base-log.service';

@Module({
  imports: [DatabaseModule, NamespaceAdapterModule],
  providers: [BaseLogProvider, BaseLogService],
  exports: [BaseLogService],
})
export class BaseLogAdapterModule {}
