import { Controller, Post } from '@nestjs/common';
import { BaseLogService } from '../../../adapters/base-log-adapter/base-log.service';

@Controller('default-logging')
export class DefaultLoggingController {
  constructor(private basicLogService: BaseLogService) {}
  @Post('create-log')
  public createLog(): void {}
}
