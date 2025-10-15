import { ApiProperty } from '@nestjs/swagger';

export class CreateReaderDto {
  @ApiProperty({
    description: 'First name of the reader',
    example: 'John',
  })
  firstName: string;

  @ApiProperty({
    description: 'Last name of the reader',
    example: 'Doe',
  })
  lastName: string;

  @ApiProperty({
    description: 'Email address of the reader',
    example: 'john.doe@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'Unique identifier of the library (UUID v4)',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef0123456789',
  })
  libraryId: string;
}
