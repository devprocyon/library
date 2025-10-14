import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new book' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The book has been successfully created',
    type: Book,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Library not found',
  })
  create(@Body() createBookDto: CreateBookDto): Book {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get a list of all books (optionally filtered by library)',
  })
  @ApiQuery({
    name: 'libraryId',
    description: 'Filter books by library ID',
    required: false,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of books found',
    type: Book,
    isArray: true,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Library not found',
  })
  findAll(
    @Query('libraryId', new ParseUUIDPipe({ optional: true }))
    libraryId?: string,
  ): Book[] {
    return this.booksService.findAll(libraryId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a book by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Book found successfully',
    type: Book,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Book not found',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string): Book {
    return this.booksService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a book' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The book has been successfully updated',
    type: Book,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Book or Library not found',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateBookDto: UpdateBookDto,
  ): Book {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a book by ID' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Book successfully deleted',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Book not found',
  })
  remove(@Param('id', ParseUUIDPipe) id: string): void {
    this.booksService.remove(id);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete all books (optionally filtered by library)',
  })
  @ApiQuery({
    name: 'libraryId',
    description: 'Filter books by library ID',
    required: false,
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'All books successfully deleted',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Library not found',
  })
  removeAll(
    @Query('libraryId', new ParseUUIDPipe({ optional: true }))
    libraryId?: string,
  ): void {
    this.booksService.removeAll(libraryId);
  }
}
