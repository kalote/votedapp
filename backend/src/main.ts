import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger as log } from '@nestjs/common';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['debug'],
  });

  const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preFlightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: 'Content-Type, Accept, Authorization'
  }
  app.enableCors(corsOptions);
  const config = new DocumentBuilder()
  .setTitle('Vote API')
  .setDescription('The vote API description')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  log.log("bootstrap voting backend");
  console.log("bootstrap voting backend");
  await app.listen(3000);
}
bootstrap();
