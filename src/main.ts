import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // this stripped out unwanted or invalid properties from req body.
      forbidNonWhitelisted: true, // forbid sending non-whitelisted properties
      transform: true, // autotransform payloads to DTO instance and also params primitive types
      transformOptions: {
        enableImplicitConversion: true, // so that we can remove explicit type decor in our dto
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
