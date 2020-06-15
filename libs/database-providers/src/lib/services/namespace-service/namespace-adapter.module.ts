import { Module } from '@nestjs/common';
import { DatabaseProviderModule } from '../database-provider/database-provider.module';
import { NamespaceProvider } from './namespace.provider';
import { NamespaceService } from './namespace.service';

@Module({
  imports: [DatabaseProviderModule],
  providers: [NamespaceProvider, NamespaceService],
  exports: [NamespaceService],
})
export class NamespaceAdapterModule {}
