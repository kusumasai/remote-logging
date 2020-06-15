import { Controller, Post } from '@nestjs/common';
import { DefaultLogService } from '@remote-logging/database-providers';

@Controller('default-logging')
export class DefaultLoggingController {
  constructor(public basicLogService: DefaultLogService) {}
  @Post('create-log')
  public createLog(): void {}
}
