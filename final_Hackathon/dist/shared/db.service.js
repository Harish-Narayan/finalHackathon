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
exports.DbService = void 0;
const common_1 = require("@nestjs/common");
const uuidv4_1 = require("uuidv4");
let DbService = class DbService {
    constructor() {
        const dbLocal = require('db-local');
        const { Schema } = new dbLocal({ path: './databases' });
        this.WatchLists = Schema('WatchLists', {
            _id: { type: String, required: true },
            name: { type: String, default: 'Customer' },
            tokens: { type: Array, default: [] },
        });
    }
    async find(key) {
        const reqWList = this.WatchLists.find((obj) => {
            obj.name === key;
        });
        return reqWList;
    }
    async create(name, data) {
        const res = this.WatchLists.create({
            _id: (0, uuidv4_1.uuid)(),
            name: name,
            tokens: data,
        }).save();
        return res;
    }
    async update(key, data) {
        const reqWList = this.WatchLists.find((obj) => {
            obj.name === key;
        });
        const updatedTokens = reqWList.tokens.concat(data);
        const res = reqWList.update({ tokens: updatedTokens }).save();
        return res;
    }
};
DbService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DbService);
exports.DbService = DbService;
//# sourceMappingURL=db.service.js.map