import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const RABBITMQ_URL = 'RABBITMQ_URL';
  app.enableCors();
  await app.listen(3001);

  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [RABBITMQ_URL],
      queue: 'order_queue',
      queueOptions: { durable: false },
    },
  });

  await microservice.listen();
}
bootstrap();