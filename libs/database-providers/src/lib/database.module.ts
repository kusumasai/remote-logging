import { Module } from '@nestjs/common';
import { DefaultLogAdapterModule } from './services/base-log-service/default-log-adapter.module';
import { HttpLogAdapterModule } from './services/http-log-service/http-log-adapter.module';
import { NamespaceAdapterModule } from './services/namespace-service/namespace-adapter.module';

@Module({
  imports: [DefaultLogAdapterModule, HttpLogAdapterModule, NamespaceAdapterModule],
  exports: [DefaultLogAdapterModule, HttpLogAdapterModule, NamespaceAdapterModule],
})
export class DatabaseModule {}
