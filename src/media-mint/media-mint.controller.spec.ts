import { Test, TestingModule } from '@nestjs/testing';
import { MediaMintController } from './media-mint.controller';

describe('MediaMintController', () => {
  let controller: MediaMintController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediaMintController],
    }).compile();

    controller = module.get<MediaMintController>(MediaMintController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
