import { Module } from '@nestjs/common';
import { PlaceholderModule } from './placeholder/placeholder.module';

@Module({
  imports: [PlaceholderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
