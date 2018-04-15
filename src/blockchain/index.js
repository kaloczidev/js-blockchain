// entry point

import {Chain} from './chain';
import {Transaction} from './transaction';

// set up chain
const chainPrefix = 'baba';
const chain: Chain<Transaction> = new Chain(chainPrefix);

const person1 = { name: 'joe', balance: 100};
const person2 = { name: 'bradd', balance: 100};
const person3 = { name: 'tim', balance: 100};

console.log(`${person1.name}: $${person1.balance}`);
console.log(`${person2.name}: $${person2.balance}`);
console.log(`${person3.name}: $${person3.balance}`);

chain.addNewItem(new Transaction(person1, person3, 30));
chain.addNewItem(new Transaction(person1, person2, 30));
chain.addNewItem(new Transaction(person2, person1, 10));
chain.addNewItem(new Transaction(person3, person2, 30));

// log transactions
chain.items.map( item => {
  console.log(`${item._hash} | ${item._blockData.from} -> ${item._blockData.to} $${item._blockData.amount} | ${item._nonce}`);
});

// final financial report
console.log(`${person1.name}: $${person1.balance}`);
console.log(`${person2.name}: $${person2.balance}`);
console.log(`${person3.name}: $${person3.balance}`);
