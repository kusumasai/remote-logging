import { Body, Controller, Post } from '@nestjs/common';
import { CreateHttpLogDTO } from '@remote-logging/server-models';
import { HttpLogService } from '../../../adapters/http-log-adapter/http-log.service';
@Controller('http-logging')
export class HttpLoggingController {
  constructor(private httpLogService: HttpLogService) {}
  @Post('create-log')
  public createLog(@Body() log: CreateHttpLogDTO): void {
    this.httpLogService.createLog(log);
  }
}
