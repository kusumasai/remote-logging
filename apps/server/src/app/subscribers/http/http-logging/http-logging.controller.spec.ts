import { Test, TestingModule } from '@nestjs/testing';
import { HttpLoggingController } from './http-logging.controller';

describe('HttpLogging Controller', () => {
  let controller: HttpLoggingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HttpLoggingController],
    }).compile();

    controller = module.get<HttpLoggingController>(HttpLoggingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
