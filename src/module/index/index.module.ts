import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { IndexController } from './index.controller';
import { IndexService } from './index.service';
import { LoggerMiddleware } from 'src/common/middleware/request.middleware';
import { GlobalLoggerService } from 'src/common/logger/logger.service';

@Module({
  imports: [],
  controllers: [IndexController],
  providers: [IndexService, GlobalLoggerService],
})
export class IndexcModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('index');
  }
}
