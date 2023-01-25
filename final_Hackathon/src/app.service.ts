import { Injectable } from '@nestjs/common';
import { DbService } from './shared';

@Injectable()
export class AppService {
  constructor(private readonly db: DbService) {}
  async getHello(): Promise<string> {
    const result = await this.db.create('vitalikWatchlist', ['matic-network']);
    return `Hello Wold! ${JSON.stringify(result)}`;
  }

  async findAll() {
    const data = await fetch(
      'https://api.covalenthq.com/v1/1/address/0x52114fb7396dbe19096ffa343d18830f5d77b6c6/balances_v2/?key=ckey_2f696b10a4c3453c814b889c923&=',
      { method: 'GET', headers: { 'Accept': 'application/json' } },
    );

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
    ans = { address: data.address, balance: balances, totalBalanceinUSD: net_USD_balance };*/
    return data;
  }
}


