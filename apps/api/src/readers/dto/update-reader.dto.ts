import { ApiProperty } from '@nestjs/swagger';

export class UpdateReaderDto {
  @ApiProperty({
    description: 'New first name of the reader',
    example: 'Bob',
    required: false,
  })
  firstName?: string;

  @ApiProperty({
    description: 'New last name of the reader',
    example: 'User',
    required: false,
  })
  lastName?: string;

  @ApiProperty({
    description: 'New email address of the reader',
    example: 'bob.user@example.com',
    required: false,
  })
  email?: string;

  @ApiProperty({
    description: 'New unique identifier of the library (UUID v4)',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef0123456789',
    required: false,
  })
  libraryId?: string;
}
