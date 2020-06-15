import { Module } from '@nestjs/common';
import { DatabaseProviderModule } from '../database-provider/database-provider.module';
import { NamespaceAdapterModule } from '../namespace-service/namespace-adapter.module';
import { DefaultLogProvider } from './default-log.provider';
import { DefaultLogService } from './default-log.service';

@Module({
  imports: [NamespaceAdapterModule, DatabaseProviderModule],
  providers: [DefaultLogProvider, DefaultLogService],
  exports: [DefaultLogService],
})
export class DefaultLogAdapterModule {}
