import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ description: 'The new name of the user.', required: false })
  name?: string;

  @ApiProperty({
    description: 'The new first name of the user.',
    required: false,
  })
  firstName?: string;

  @ApiProperty({ description: 'The new email of the user.', required: false })
  email?: string;

  @ApiProperty({
    description: 'The new password of the user.',
    required: false,
  })
  password?: string;
}
