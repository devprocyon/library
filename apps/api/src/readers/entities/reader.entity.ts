import { ApiProperty } from '@nestjs/swagger';

export class Reader {
  @ApiProperty({
    description: 'Unique identifier of the reader (UUID v4)',
    example: '92abf309-5933-4925-b3b4-b9ea3c6b154a',
  })
  id: string;

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
