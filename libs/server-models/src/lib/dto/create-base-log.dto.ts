import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { LogLevel } from '../constants/log-levels';

export class CreateBaseLogDTO {
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
}
