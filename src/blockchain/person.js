
export class Person {
  name: string;
  balance: number;
  constructor (name:string, balance: number = 100){
    this.name = name;
    this.balance = balance;
  }
  receiveMoney (amount: number): void {
    this.balance += amount*1;
  }
  sendMoney (amount: number): void {
    this.balance -= amount;
  }
}