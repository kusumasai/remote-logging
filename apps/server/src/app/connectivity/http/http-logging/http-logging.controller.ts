import { Controller, Post } from '@nestjs/common';
import { HttpLogService } from '../../../adapters/http-log-adapter/http-log.service';

@Controller('http-logging')
export class HttpLoggingController {
  constructor(private httpLogService: HttpLogService) {}
  @Post('create-log')
  public createLog(): void {}
}
