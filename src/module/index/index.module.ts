import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { IndexController } from './index.controller';
import { IndexService } from './index.service';
import { LoggerMiddleware } from 'src/common/middleware/logger.middleware';

@Module({
  imports: [],
  controllers: [IndexController],
  providers: [IndexService],
})
export class IndexcModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('index');
  }
}
