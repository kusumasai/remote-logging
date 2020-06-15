import { Body, Controller, Post } from '@nestjs/common';
import { HttpLogService } from '../../database/services/http-log-service/http-log.service';
import { CreateHttpLogDTO } from '../../dto/create-http-log.dto';

@Controller('http-logging')
export class HttpLoggingController {
  constructor(private httpLogService: HttpLogService) {}
  @Post('create-log')
  public createLog(@Body() log: CreateHttpLogDTO): void {
    this.httpLogService.createLog(log);
  }
}
