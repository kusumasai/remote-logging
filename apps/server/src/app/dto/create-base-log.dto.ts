import { Language, LogLevel } from '@remote-logging/server-models';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBaseLogDTO {
  @IsString()
  namespace: string;

  @IsEnum(Language)
  language: string;

  @IsEnum(LogLevel)
  level: LogLevel;

  @IsNumber()
  timestamp: number;

  @IsString()
  message: string;

  @IsOptional()
  @IsString()
  stack?: string;
}
