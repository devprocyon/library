import { ApiProperty } from '@nestjs/swagger';

export class UpdateLibraryDto {
  @ApiProperty({
    description: 'New name of the library',
    example: 'Kyiv Regional Library',
    required: false,
  })
  name?: string;

  @ApiProperty({
    description: 'New physical address of the library',
    example: 'Shevchenko Blvd, 25, Kyiv',
    required: false,
  })
  address?: string;
}
