import { Test, TestingModule } from '@nestjs/testing';
import { HttpLogService } from './http-log.service';

describe('HttpLogService', () => {
  let service: HttpLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpLogService],
    }).compile();

    service = module.get<HttpLogService>(HttpLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
