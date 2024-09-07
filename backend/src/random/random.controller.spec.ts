import { Test, TestingModule } from '@nestjs/testing';
import { RandomController } from './random.controller';
import { RandomService } from './random.service';
import { Random } from './random.entity';

describe('RandomController', () => {
  let controller: RandomController;
  let service: RandomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomController],
      providers: [
        {
          provide: RandomService,
          useValue: {
            getRandomNumber: jest.fn().mockReturnValue({ value: 42 }),
          },
        },
      ],
    }).compile();

    controller = module.get<RandomController>(RandomController);
    service = module.get<RandomService>(RandomService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a random number', () => {
    const result: Random = controller.getRandomNumber();
    expect(result).toEqual({ value: 42 });
    expect(service.getRandomNumber).toHaveBeenCalled();
  });
});
