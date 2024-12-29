import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { RabbitMQModule } from '../rabbitmq.module';

@Module({
  imports: [
    RabbitMQModule, // Ensure RabbitMQModule is imported here
    TypeOrmModule.forFeature([Order]) // Register the Order entity here
  ],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule { }
