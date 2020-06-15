import { Body, Controller, Post } from '@nestjs/common';
import { HttpLogService } from '@remote-logging/database-providers';
import { CreateHttpLogDTO } from '@remote-logging/dto';

@Controller('http-logging')
export class HttpLoggingController {
  constructor(private httpLogService: HttpLogService) {}
  @Post('create-log')
  public createLog(@Body() log: CreateHttpLogDTO): void {
    this.httpLogService.createLog(log);
  }
}
