import { Test, TestingModule } from '@nestjs/testing';
import { DefaultLogService } from './default-log.service';

describe('DefaultLogService', () => {
  let service: DefaultLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultLogService],
    }).compile();

    service = module.get<DefaultLogService>(DefaultLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
