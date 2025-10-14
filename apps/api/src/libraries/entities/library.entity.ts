import { ApiProperty } from '@nestjs/swagger';

export class Library {
  @ApiProperty({
    description: 'Unique identifier of the library (UUID v4)',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef0123456789',
  })
  id: string;

  @ApiProperty({
    description: 'Name of the library',
    example: 'Kyiv Central Library of Science',
  })
  name: string;

  @ApiProperty({
    description: 'Physical address of the library',
    example: 'Khreshchatyk St, 1, Kyiv',
  })
  address: string;
}
