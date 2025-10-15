import { ReadersService } from './readers.service';
import { CreateReaderDto } from './dto/create-reader.dto';
import { UpdateReaderDto } from './dto/update-reader.dto';
import { Reader } from './entities/reader.entity';
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

@ApiTags('readers')
@Controller('readers')
export class ReadersController {
  constructor(private readonly readersService: ReadersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new reader' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The reader has been successfully created',
    type: Reader,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Library not found',
  })
  create(@Body() createReaderDto: CreateReaderDto): Reader {
    return this.readersService.create(createReaderDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get a list of all readers (optionally filtered by library)',
  })
  @ApiQuery({
    name: 'libraryId',
    description: 'Filter readers by library ID',
    required: false,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of readers found',
    type: Reader,
    isArray: true,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Library not found',
  })
  findAll(
    @Query('libraryId', new ParseUUIDPipe({ optional: true }))
    libraryId?: string,
  ): Reader[] {
    return this.readersService.findAll(libraryId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a reader by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Reader found successfully',
    type: Reader,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Reader not found',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string): Reader {
    return this.readersService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a reader' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The reader has been successfully updated',
    type: Reader,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Reader or Library not found',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateReaderDto: UpdateReaderDto,
  ): Reader {
    return this.readersService.update(id, updateReaderDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a reader by ID' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Reader successfully deleted',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Reader not found',
  })
  remove(@Param('id', ParseUUIDPipe) id: string): void {
    this.readersService.remove(id);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete all readers (optionally filtered by library)',
  })
  @ApiQuery({
    name: 'libraryId',
    description: 'Filter readers by library ID',
    required: false,
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'All readers successfully deleted',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Library not found',
  })
  removeAll(
    @Query('libraryId', new ParseUUIDPipe({ optional: true }))
    libraryId?: string,
  ): void {
    this.readersService.removeAll(libraryId);
  }
}
