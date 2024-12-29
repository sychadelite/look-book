import { Module } from '@nestjs/common';
import { ClientsModule, Transport, ClientProviderOptions } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'BOOK_SERVICE',
        inject: [ConfigService],
        useFactory: async (configService: ConfigService): Promise<ClientProviderOptions> => ({
          name: 'BOOK_SERVICE',  // Add the name property
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RABBITMQ_URL')],  // Dynamically get RABBITMQ_URL
            queue: 'book_queue',
            queueOptions: { durable: false },
          },
        }),
      },
      {
        name: 'CUSTOMER_SERVICE',
        inject: [ConfigService],
        useFactory: async (configService: ConfigService): Promise<ClientProviderOptions> => ({
          name: 'CUSTOMER_SERVICE',  // Add the name property
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RABBITMQ_URL')],  // Dynamically get RABBITMQ_URL
            queue: 'customer_queue',
            queueOptions: { durable: false },
          },
        }),
      },
      {
        name: 'ORDER_SERVICE',
        inject: [ConfigService],
        useFactory: async (configService: ConfigService): Promise<ClientProviderOptions> => ({
          name: 'ORDER_SERVICE',  // Add the name property
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RABBITMQ_URL')],  // Dynamically get RABBITMQ_URL
            queue: 'order_queue',
            queueOptions: { durable: false },
          },
        }),
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class RabbitMQModule { }
