import { Module } from '@nestjs/common';
import { DatabaseModule } from '@remote-logging/database-providers';
import { DefaultLoggingController } from './default-logging/default-logging.controller';
import { HttpLoggingController } from './http-logging/http-logging.controller';

@Module({
  controllers: [HttpLoggingController, DefaultLoggingController],
  imports: [DatabaseModule],
})
export class HttpModule {}
