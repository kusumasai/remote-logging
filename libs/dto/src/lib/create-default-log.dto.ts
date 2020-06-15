import { Language, LogLevel, LogType } from '@remote-logging/shared';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDefaultLogDTO {
  @IsString()
  namespace: string;

  @IsEnum(LogType)
  type: LogType;

  @IsEnum(LogLevel)
  level: LogLevel;

  @IsEnum(Language)
  language: string;

  @IsNumber()
  timestamp: number;

  @IsString()
  message: string;

  @IsOptional()
  @IsString()
  stack?: string;
}
