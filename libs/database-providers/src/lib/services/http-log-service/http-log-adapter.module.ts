import { Module } from '@nestjs/common';
import { DatabaseProviderModule } from '../database-provider/database-provider.module';
import { HttpLogProvider } from './http-log.provider';
import { HttpLogService } from './http-log.service';

@Module({
  imports: [DatabaseProviderModule],
  providers: [HttpLogProvider, HttpLogService],
  exports: [HttpLogService],
})
export class HttpLogAdapterModule {}
