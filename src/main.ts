import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { UsuarioModule } from './modules';

async function bootstrap() {
  const app = await NestFactory.create(UsuarioModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
