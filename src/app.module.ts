import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { IndexcModule } from './module/index/index.module';
import { LoggerMiddleware } from './common/middleware/request.middleware';
import { ScheduleModule } from '@nestjs/schedule';
import { MyCronService } from './cron/MyCronService';
import { LoggerModule } from './common/logger/logger.controller';
import { MulterModule } from '@nestjs/platform-express';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter';

@Module({
  imports: [ScheduleModule.forRoot(), IndexcModule, LoggerModule],
  providers: [
    MyCronService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: TransformInterceptor,
    // },
  ],
})
export class ApplicationModule {}
