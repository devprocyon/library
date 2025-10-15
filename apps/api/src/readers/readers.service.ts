import { Injectable, NotFoundException } from '@nestjs/common';
import { LibrariesService } from 'src/libraries/libraries.service';
import { CreateReaderDto } from './dto/create-reader.dto';
import { UpdateReaderDto } from './dto/update-reader.dto';
import { Reader } from './entities/reader.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ReadersService {
  private readers: Reader[] = [];

  constructor(private readonly librariesService: LibrariesService) {}

  create(createReaderDto: CreateReaderDto): Reader {
    this.librariesService.findOne(createReaderDto.libraryId);
    const newReader: Reader = {
      id: uuidv4(),
      ...createReaderDto,
      libraryId: createReaderDto.libraryId,
    };
    this.readers.push(newReader);
    return newReader;
  }

  findAll(libraryId?: string): Reader[] {
    if (libraryId) {
      return this.readers.filter((reader) => reader.libraryId === libraryId);
    }
    return this.readers;
  }

  findOne(id: string): Reader {
    const reader = this.readers.find((b) => b.id === id);
    if (!reader) {
      throw new NotFoundException('Reader not found');
    }
    return reader;
  }

  update(id: string, updateReaderDto: UpdateReaderDto): Reader {
    const reader = this.findOne(id);
    if (updateReaderDto.libraryId) {
      this.librariesService.findOne(updateReaderDto.libraryId);
    }
    Object.assign(reader, updateReaderDto);
    return reader;
  }

  remove(id: string): void {
    const index = this.readers.findIndex((b) => b.id === id);
    if (index === -1) {
      throw new NotFoundException('Reader not found');
    }
    this.readers.splice(index, 1);
  }

  removeAll(libraryId?: string): void {
    if (libraryId) {
      this.librariesService.findOne(libraryId);
      this.readers = this.readers.filter(
        (reader) => reader.libraryId !== libraryId,
      );
    } else {
      this.readers = [];
    }
  }
}
