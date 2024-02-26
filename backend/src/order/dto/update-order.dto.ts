import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {
  @ApiProperty({
    description: 'The total price of the order.',
    required: false,
  })
  totalPrice?: number;

  @ApiProperty({ description: 'The date of order placement.', required: false })
  orderPlacement?: Date;

  @ApiProperty({
    description: 'The delivery date of the order.',
    required: false,
  })
  deliveryDate?: Date;

  @ApiProperty({ description: 'The user ID of the order.', required: false })
  userId?: string;
}
