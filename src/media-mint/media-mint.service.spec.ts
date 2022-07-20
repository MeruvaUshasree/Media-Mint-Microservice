import { Test, TestingModule } from '@nestjs/testing';
import { MediaMintService } from './media-mint.service';

describe('MediaMintService', () => {
  let service: MediaMintService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaMintService],
    }).compile();

    service = module.get<MediaMintService>(MediaMintService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
