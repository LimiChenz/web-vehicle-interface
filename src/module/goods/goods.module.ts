import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from 'src/common/middleware/request.middleware';
import { GoodsController } from './goods.controller';

@Module({
  imports: [],
  controllers: [GoodsController],
  providers: [],
})
export class GoodsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('goods');
  }
}
