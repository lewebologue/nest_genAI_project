import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ description: 'The total price of the order.' })
  totalPrice: number;

  @ApiProperty({ description: 'The date of order placement.' })
  orderPlacement: Date;

  @ApiProperty({ description: 'The delivery date of the order.' })
  deliveryDate: Date;

  @ApiProperty({ description: 'The user ID of the order.' })
  userId: string;
}
