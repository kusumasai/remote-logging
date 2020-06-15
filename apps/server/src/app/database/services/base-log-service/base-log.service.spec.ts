import { Test, TestingModule } from '@nestjs/testing';
import { BaseLogService } from './base-log.service';

describe('BaseLogService', () => {
  let service: BaseLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseLogService],
    }).compile();

    service = module.get<BaseLogService>(BaseLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
