import { Language, LogLevel } from '@remote-logging/shared';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class DefaultLogDto {
  @IsString()
  @IsOptional()
  namespace: string;

  @IsEnum(Language)
  @IsOptional()
  language: Language;

  @IsEnum(LogLevel)
  @IsOptional()
  logLevel: LogLevel;

  @IsNumber()
  @IsOptional()
  startTime: number;

  @IsNumber()
  @IsOptional()
  endTime: number;
}
