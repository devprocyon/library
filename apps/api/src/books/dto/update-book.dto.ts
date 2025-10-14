import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {
  @ApiProperty({
    description: 'New title of the book',
    example: 'Harry Potter and the Prisoner of Azkaban',
    required: false,
  })
  title?: string;

  @ApiProperty({
    description: 'New author of the book',
    example: 'J. K. Rowling',
    required: false,
  })
  author?: string;

  @ApiProperty({
    description: 'New year the book was published',
    example: 1999,
    required: false,
  })
  year?: number;

  @ApiProperty({
    description: 'New unique identifier of the library (UUID v4)',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef0123456789',
  })
  libraryId?: string;
}
