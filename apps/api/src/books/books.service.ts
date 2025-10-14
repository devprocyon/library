import { Injectable, NotFoundException } from '@nestjs/common';
import { LibrariesService } from 'src/libraries/libraries.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  constructor(private readonly librariesService: LibrariesService) {}

  create(createBookDto: CreateBookDto): Book {
    this.librariesService.findOne(createBookDto.libraryId);
    const newBook: Book = {
      id: uuidv4(),
      ...createBookDto,
      libraryId: createBookDto.libraryId,
    };
    this.books.push(newBook);
    return newBook;
  }

  findAll(libraryId?: string): Book[] {
    if (libraryId) {
      return this.books.filter((book) => book.libraryId === libraryId);
    }
    return this.books;
  }

  findOne(id: string): Book {
    const book = this.books.find((b) => b.id === id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  update(id: string, updateBookDto: UpdateBookDto): Book {
    const book = this.findOne(id);
    if (updateBookDto.libraryId) {
      this.librariesService.findOne(updateBookDto.libraryId);
    }
    Object.assign(book, updateBookDto);
    return book;
  }

  remove(id: string): void {
    const index = this.books.findIndex((b) => b.id === id);
    if (index === -1) {
      throw new NotFoundException('Book not found');
    }
    this.books.splice(index, 1);
  }

  removeAll(libraryId?: string): void {
    if (libraryId) {
      this.librariesService.findOne(libraryId);
      this.books = this.books.filter((book) => book.libraryId !== libraryId);
    } else {
      this.books = [];
    }
  }
}
