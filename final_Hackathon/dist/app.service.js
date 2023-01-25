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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const shared_1 = require("./shared");
let AppService = class AppService {
    constructor(db) {
        this.db = db;
    }
    async getHello() {
        const result = await this.db.create('vitalikWatchlist', ['matic-network']);
        return `Hello Wold! ${JSON.stringify(result)}`;
    }
    async findAll() {
        const data = await fetch('https://api.covalenthq.com/v1/1/address/0x52114fb7396dbe19096ffa343d18830f5d77b6c6/balances_v2/?key=ckey_2f696b10a4c3453c814b889c923&=', { method: 'GET', headers: { 'Accept': 'application/json' } });
        const final = data.json();
        console.log(final);
        console.log(data);
        let fan_USD_Balance = 0;
        let fan_balance = 0;
        let Ether_USD_Balance = 0;
        let ETH_balance = 0;
        let Poly_USD_Balance = 0;
        let Poly_balance = 0;
        if (data.chain_id == 1) {
            for (var i = 0; i < data.items.length; i++) {
                Ether_USD_Balance += data.items[i].quote_rate * data.items[i].balance;
                ETH_balance += data.items[i].balance;
            }
        }
        if (data.chain_id == 2) {
            for (var i = 0; i < data.items.length; i++) {
                Poly_USD_Balance += data.items[i].quote_rate * data.items[i].balance;
                Poly_balance += data.items[i].balance;
            }
        }
        if (data.chain_id == 3) {
            for (var i = 0; i < data.items.length; i++) {
                fan_USD_Balance += data.items[i].quote_rate * data.items[i].balance;
                fan_balance += data.items[i].balance;
            }
        }
        const net_USD_balance = Ether_USD_Balance + fan_USD_Balance + Poly_USD_Balance;
        const eth_results = [];
        const fan_results = [];
        const poly_results = [];
        for (var i = 0; i < data.length; i++) {
            if (data.chain_id == 1) {
                eth_results.push(data.items);
            }
            if (data.chain_id == 2) {
                poly_results.push(data.items);
            }
            if (data.chain_id == 1) {
                fan_results.push(data.items);
            }
        }
        const { balances } = { eth: eth_results, fan: fan_results, poly: poly_results };
        ans = { address: data.address, balance: balances, totalBalanceinUSD: net_USD_balance };
         * /;
        return data;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [shared_1.DbService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map