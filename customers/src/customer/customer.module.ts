import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { RabbitMQModule } from '../rabbitmq.module';

@Module({
  imports: [
    RabbitMQModule, // Ensure RabbitMQModule is imported here
    TypeOrmModule.forFeature([Customer]) // Register the Customer entity here
  ],
  providers: [CustomerService],
  controllers: [CustomerController]
})
export class CustomerModule { }
