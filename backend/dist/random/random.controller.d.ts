import { RandomService } from './random.service';
import { Random } from './random.entity';
export declare class RandomController {
    private readonly appService;
    constructor(appService: RandomService);
    getRandomNumber(): Random;
}
