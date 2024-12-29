import { IsUUID, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  id?: string; // Optional: Allows setting an ID manually for rollback operations

  @IsUUID()
  @IsNotEmpty()
  bookId: string;

  @IsUUID()
  @IsNotEmpty()
  customerId: string;

  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsNumber()
  @IsPositive()
  totalPrice: number;
}
