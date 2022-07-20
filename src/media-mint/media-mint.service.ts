import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MediaMintModel } from './models/media-mint.model';

@Injectable()
export class MediaMintService {
  constructor(
    @InjectModel('UserData') private mediaMintModel: Model<MediaMintModel>,
  ) {}

  async getAllData() {
    const result = await this.mediaMintModel.find();
    return result;
  }

  async createUserData(reqBody): Promise<MediaMintModel> {
    return await this.mediaMintModel.create(reqBody);
  }

  async updateUserData(id, reqBody) {
    const filter = {};
    if (id) {
      filter['id'] = id;
    }
    return await this.mediaMintModel.updateOne(filter, { $set: reqBody });
  }
}
