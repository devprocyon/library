import { Module } from '@nestjs/common';
import { ReadersService } from './readers.service';
import { LibrariesModule } from 'src/libraries/libraries.module';
import { ReadersController } from './readers.controller';

@Module({
  imports: [LibrariesModule],
  providers: [ReadersService],
  controllers: [ReadersController],
})
export class ReadersModule {}
