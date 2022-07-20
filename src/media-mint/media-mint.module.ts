import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaMintController } from './media-mint.controller';
import { MediaMintService } from './media-mint.service';
import { userSchema } from './models/media-mint.model';

@Module({
  imports: [
    MediaMintModule,
    HttpModule,
    MongooseModule.forFeature([{ name: 'UserData', schema: userSchema }]),
  ],
  controllers: [MediaMintController],
  providers: [MediaMintService],
})
export class MediaMintModule {}
