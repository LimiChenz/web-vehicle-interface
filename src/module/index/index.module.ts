import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { IndexController } from './index.controller';
import { IndexService } from './index.service';
import { LoggerMiddleware } from 'src/common/middleware/request.middleware';
import { GlobalLoggerService } from 'src/common/logger/logger.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';

@Module({
  imports: [],
  controllers: [IndexController],
  providers: [
    IndexService,
    GlobalLoggerService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class IndexcModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('index');
  }
}
