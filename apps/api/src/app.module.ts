import { Module } from '@nestjs/common';
import { LibrariesModule } from './libraries/libraries.module';
import { BooksModule } from './books/books.module';
import { ReadersModule } from './readers/readers.module';

@Module({
  imports: [LibrariesModule, BooksModule, ReadersModule],
})
export class AppModule {}
