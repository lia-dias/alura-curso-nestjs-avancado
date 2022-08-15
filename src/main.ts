import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { UsuarioModule } from './modules';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(UsuarioModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  useContainer(app.select(UsuarioModule), {fallbackOnErrors: true});
  await app.listen(3000);
}
bootstrap();
