
import {Person} from './person';

export class Transaction {
  from: Person;
  to: Person;
  amount: number;
  constructor(d: Person, t:Person, amount: number) {
    this.from = d;
    this.to = t;
    this.amount = amount;
  }
  execute() {
    this.from.sendMoney(this.amount);
    this.to.receiveMoney(this.amount);
  }
}
