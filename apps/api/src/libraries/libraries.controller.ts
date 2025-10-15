import { LibrariesService } from './libraries.service';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { Library } from './entities/library.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
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
} from '@nestjs/common';

@ApiTags('libraries')
@Controller('libraries')
export class LibrariesController {
  constructor(private readonly librariesService: LibrariesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new library' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The library has been successfully created',
    type: Library,
  })
  create(@Body() createLibraryDto: CreateLibraryDto): Library {
    return this.librariesService.create(createLibraryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of all libraries' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All libraries successfully found',
    type: Library,
    isArray: true,
  })
  findAll(): Library[] {
    return this.librariesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a library by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Library found successfully',
    type: Library,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Library not found',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string): Library {
    return this.librariesService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a library' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The library has been successfully updated',
    type: Library,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Library not found',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateLibraryDto: UpdateLibraryDto,
  ): Library {
    return this.librariesService.update(id, updateLibraryDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a library by ID' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Library successfully deleted',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Library not found',
  })
  remove(@Param('id', ParseUUIDPipe) id: string): void {
    this.librariesService.remove(id);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete all libraries' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'All libraries successfully deleted',
  })
  removeAll(): void {
    this.librariesService.removeAll();
  }
}
