import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { ValidationPipeConfig } from './config/validationPipe.config';

async function bootstrap() {
  const app = await NestFactory.create(
    ApplicationModule,
    new ExpressAdapter(express()),
  );
  app.useGlobalPipes(new ValidationPipe(ValidationPipeConfig));
  await app.listen(3000);
}
bootstrap();
