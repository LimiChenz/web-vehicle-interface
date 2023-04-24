import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create(
    ApplicationModule,
    new ExpressAdapter(express()),
  );
  await app.listen(3000);
}
bootstrap();
