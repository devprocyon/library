import { Module } from '@nestjs/common';
import { LibrariesModule } from './libraries/libraries.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [LibrariesModule, BooksModule],
})
export class AppModule {}
