"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomController = void 0;
const common_1 = require("@nestjs/common");
const random_service_1 = require("./random.service");
const random_entity_1 = require("./random.entity");
let RandomController = class RandomController {
    constructor(appService) {
        this.appService = appService;
    }
    getRandomNumber() {
        return this.appService.getRandomNumber();
    }
};
exports.RandomController = RandomController;
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", random_entity_1.Random)
], RandomController.prototype, "getRandomNumber", null);
exports.RandomController = RandomController = __decorate([
    (0, common_1.Controller)('random'),
    __metadata("design:paramtypes", [random_service_1.RandomService])
], RandomController);
//# sourceMappingURL=random.controller.js.map