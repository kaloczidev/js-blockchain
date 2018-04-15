
export class Transaction {
  from: string;
  to: string;
  amount: number;
  constructor(d: any, t:any, amount: number) {
    this.from = d.name;
    this.to = t.name;
    this.amount = amount;
    // cause JS pass parameters as refernce, we can change their balance
    d.balance-=amount;
    t.balance+=amount;
  }
}
