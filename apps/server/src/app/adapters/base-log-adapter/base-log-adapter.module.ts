import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { BaseLogProvider } from './base-log.provider';
import { BaseLogService } from './base-log.service';

@Module({
  imports: [DatabaseModule],
  providers: [BaseLogProvider, BaseLogService],
  exports: [BaseLogService],
})
export class BaseLogAdapterModule {}
