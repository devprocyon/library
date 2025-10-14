import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    description: 'Title of the book',
    example: 'The Lord of the Rings',
  })
  title: string;

  @ApiProperty({
    description: 'Author of the book',
    example: 'J. R. R. Tolkien',
  })
  author: string;

  @ApiProperty({
    description: 'Year of publication of the book',
    example: 1968,
  })
  year: number;

  @ApiProperty({
    description: 'Unique identifier of the library (UUID v4)',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef0123456789',
  })
  libraryId: string;
}
