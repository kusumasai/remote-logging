import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { HttpLogProvider } from './http-log.provider';
import { HttpLogService } from './http-log.service';

@Module({
  imports: [DatabaseModule],
  providers: [HttpLogProvider, HttpLogService],
  exports: [HttpLogService],
})
export class HttpLogAdapterModule {}
