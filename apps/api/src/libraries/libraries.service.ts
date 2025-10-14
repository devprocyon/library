import { Injectable, NotFoundException } from '@nestjs/common';
import { Library } from './entities/library.entity';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LibrariesService {
  private libraries: Library[] = [];

  create(createLibraryDto: CreateLibraryDto): Library {
    const newLibrary: Library = {
      id: uuidv4(),
      ...createLibraryDto,
    };
    this.libraries.push(newLibrary);
    return newLibrary;
  }

  findAll(): Library[] {
    return this.libraries;
  }

  findOne(id: string): Library {
    const library = this.libraries.find((lib) => lib.id === id);
    if (!library) {
      throw new NotFoundException('Library not found');
    }
    return library;
  }

  update(id: string, updateLibraryDto: UpdateLibraryDto): Library {
    const library = this.findOne(id);
    Object.assign(library, updateLibraryDto);
    return library;
  }

  remove(id: string): void {
    const index = this.libraries.findIndex((lib) => lib.id === id);
    if (index === -1) {
      throw new NotFoundException('Library not found');
    }
    this.libraries.splice(index, 1);
  }

  removeAll(): void {
    this.libraries = [];
  }
}
