import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { NamespaceProvider } from './namespace.provider';
import { NamespaceService } from './namespace.service';

@Module({
  imports: [DatabaseModule],
  providers: [NamespaceProvider, NamespaceService],
  exports: [NamespaceService],
})
export class NamespaceAdapterModule {}
