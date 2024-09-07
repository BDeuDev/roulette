import { Controller, Post } from '@nestjs/common';
import { RandomService } from './random.service';
import { Random } from './random.entity';

@Controller('random')
export class RandomController {
  constructor(private readonly appService: RandomService) {}

  @Post()
  getRandomNumber(): Random{
    return this.appService.getRandomNumber();
  }
  
}