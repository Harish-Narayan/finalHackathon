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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getValues() {
        return this.appService.findAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getValues", null);
__decorate([
    (0, common_1.Controller)('View'),
    (0, common_1.Get)(),
    __metadata("design:type", Object)
], AppController.prototype, "", void 0);
AppController = __decorate([
    (0, common_1.Controller)('aggregate'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
{
    return this.appService.findMasterCoin();
}
createProduct();
prodId: string;
{
    return this.appService.createWatchlist(prodId);
}
updateProduct();
finValue: string,
;
{
    return this.appService.updateProduct(finValue);
}
removeProduct();
value: string;
{
    return this.appService.deleteProduct(value);
}
getProduct();
Id: string;
{
    return this.appService.getData(Id);
}
//# sourceMappingURL=app.controller.js.map