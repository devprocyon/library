import { Module } from '@nestjs/common';
import { LibrariesModule } from './libraries/libraries.module';

@Module({
  imports: [LibrariesModule],
})
export class AppModule {}
