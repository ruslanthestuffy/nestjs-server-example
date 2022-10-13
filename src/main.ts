import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const port = process.env['PORT'];
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Simple BE example on NestJS')
    .setDescription('REST API Docs')
    .setVersion('1.0.0')
    .addTag('Ruslan M. NestJS Server')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}

start();
