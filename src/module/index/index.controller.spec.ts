import { Test, TestingModule } from '@nestjs/testing';
import { IndexController } from './index.controller';
import { IndexService } from './index.service';

describe('AppController', () => {
  let appController: IndexController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [IndexController],
      providers: [IndexService],
    }).compile();

    appController = app.get<IndexController>(IndexService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
