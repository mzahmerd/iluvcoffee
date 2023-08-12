import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // this stripped out unwanted or invalid properties from req body.
      forbidNonWhitelisted: true, // forbid sending non-whitelisted properties
    }),
  );
  await app.listen(3000);
}
bootstrap();
