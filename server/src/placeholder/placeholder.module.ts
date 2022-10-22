import { Module } from '@nestjs/common';
import { PlaceholderService } from './placeholder.service';
import { PlaceholderController } from './placeholder.controller';

@Module({
  providers: [PlaceholderService],
  controllers: [PlaceholderController],
})
export class PlaceholderModule {}
