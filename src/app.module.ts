import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { IndexcModule } from './module/index/index.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [IndexcModule],
})
export class ApplicationModule {}
