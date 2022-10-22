import { PlaceholderService } from './placeholder.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('placeholder')
export class PlaceholderController {
  constructor(private readonly placeholderService: PlaceholderService) {}

  @Get('')
  getMainCharacter(@Query() query: { signature: string }) {
    const { signature } = query;

    const message = this.placeholderService.getMainCharacter(signature);

    return {
      message,
    };
  }

  @Post('')
  storeMainCharacter(@Body() body: { signature: string; character: string }) {
    const { signature, character } = body;

    const message = this.placeholderService.addMainCharacter(
      signature,
      character,
    );

    return {
      message,
    };
  }
}
