import { Test, TestingModule } from '@nestjs/testing';
import { DefaultLoggingController } from './default-logging.controller';

describe('DefaultLogging Controller', () => {
  let controller: DefaultLoggingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefaultLoggingController],
    }).compile();

    controller = module.get<DefaultLoggingController>(DefaultLoggingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
