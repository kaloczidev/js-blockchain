import React, { Component } from 'react';
import {Block} from './components/block';
import './App.css';

import { Transaction } from './blockchain/transaction';
import { Person } from './blockchain/person';
import { Chain } from './blockchain/chain';
import { TransactionCreator } from './components/transaction';

class App extends Component {
  
  people = [
    new Person('Jack', 100),
    new Person('John', 100),
    new Person('Matt', 100)
  ];
  
  
  // set up chain
  chainPrefix = 'baba';
  chain: Chain<Transaction> = new Chain(this.chainPrefix);
  
  createTransaction = (t: Transaction) => {
    console.log('YEEAY');
    this.chain.addNewItem(t);
    t.execute();
    this.forceUpdate();
  }
  
  
  
  
  
  render() {
    return (
      <div className="main">
      <h1>Blockchain example</h1>
      <div className="balances">
      {this.people.map ((p, key) => <span key={key}><strong>{p.name}</strong> $ {p.balance} </span>)}
      </div>
      
      
      <TransactionCreator people={this.people} onDone={this.createTransaction}/>
      <hr/>
      chain history: <br/>
      {this.chain.items.map((item, key) => <Block key={key} node={item}></Block> )}
      </div>
      
    );
  }
}

export default App;
