import { Injectable } from '@nestjs/common';

@Injectable()
export class RandomService {
    getRandomNumber(){
        const randomValue = Math.floor(Math.random() * 100) + 1;
        return { value: randomValue };
      }
}
