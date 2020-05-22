import { HttpMethod } from '../constants/http-methods';
import { IsEnum, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';
import { LogLevel } from '../constants/log-levels';

export class CreateHttpLogDTO {
  @IsString()
  namespace: string;

  @IsEnum(LogLevel)
  @IsString()
  level: LogLevel;

  @IsNumber()
  timestamp: number;

  @IsString()
  message: string;

  @IsOptional()
  @IsString()
  stack?: string;

  @IsUrl()
  url: string;

  @IsEnum(HttpMethod)
  method: string;

  @IsNumber()
  startedAt: number;

  @IsNumber()
  @IsOptional()
  completedAt?: number;

  @IsString()
  @IsOptional()
  requestBody?: string;

  @IsString()
  @IsOptional()
  response?: string;

  @IsOptional()
  requestHeaders?: any;

  @IsOptional()
  responseHeaders?: any;
}
