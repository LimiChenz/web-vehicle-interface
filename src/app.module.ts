import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { IndexcModule } from './module/index/index.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [
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
  ],
})
export class ApplicationModule {}
