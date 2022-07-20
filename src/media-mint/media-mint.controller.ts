import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { MediaMintService } from './media-mint.service';
import { MediaMintModel } from './models/media-mint.model';

@Controller('media-mint')
export class MediaMintController {
  constructor(private mediaMintService: MediaMintService) {}
  @Get()
  async getAll() {
    return await this.mediaMintService.getAllData();
  }

  @Post('create-user')
  async createUser(@Body() reqBody: MediaMintModel): Promise<MediaMintModel> {
    return await this.mediaMintService.createUserData(reqBody);
  }

  @Patch('update-user/:id')
  async updateUser(@Param('id') id: string, @Body() reqBody: MediaMintModel) {
    return await this.mediaMintService.updateUserData(id, reqBody);
  }
}
