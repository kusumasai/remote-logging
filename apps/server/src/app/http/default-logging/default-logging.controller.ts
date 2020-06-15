import { Controller, Post } from '@nestjs/common';
import { BaseLogService } from '../../database/services/base-log-service/base-log.service';

@Controller('default-logging')
export class DefaultLoggingController {
  constructor(public basicLogService: BaseLogService) {}
  @Post('create-log')
  public createLog(): void {}
}
