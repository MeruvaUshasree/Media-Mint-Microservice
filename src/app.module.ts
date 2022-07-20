import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaMintModule } from './media-mint/media-mint.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/MediaMint'),
    MediaMintModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
