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
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    IndexcModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3311,
      username: 'root',
      password: '/np&uYDjz3&*',
      database: 'chen_db',
      entities: [],
      retryDelay: 500,
      retryAttempts: 10,
      autoLoadEntities: true,
      synchronize: true, //development 开启 production 关闭
    }),
    ,
    LoggerModule,
  ],
  providers: [
    MyCronService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: TransformInterceptor,
    // },
  ],
})
export class ApplicationModule {}
