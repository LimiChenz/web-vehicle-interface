import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { IndexcModule } from './module/index/index.module';
import { LoggerMiddleware } from './common/middleware/request.middleware';
import { ScheduleModule } from '@nestjs/schedule';
import { MyCronService } from './cron/MyCronService';
import { LoggerModule } from './common/logger/logger.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [ScheduleModule.forRoot(), IndexcModule, LoggerModule],
  providers: [MyCronService],
})
export class ApplicationModule {}
