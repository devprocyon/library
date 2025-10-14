import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { LibrariesModule } from 'src/libraries/libraries.module';

@Module({
  imports: [LibrariesModule],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
