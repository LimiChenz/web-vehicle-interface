import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const MysqlConfig: TypeOrmModuleOptions = {
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
};

export const OriginMysqlConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'mysql.sqlpub.com',
  port: 3306,
  username: 'rootchen',
  password: '5914a63885490242',
  database: 'chendbone',
  entities: [],
  retryDelay: 500,
  retryAttempts: 10,
  autoLoadEntities: true,
  synchronize: true, //development 开启 production 关闭
};
