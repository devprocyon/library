import { ApiProperty } from '@nestjs/swagger';

export class CreateLibraryDto {
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
