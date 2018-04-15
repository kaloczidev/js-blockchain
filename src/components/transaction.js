//@flow

import React,{Component} from 'react';
import { Person } from '../blockchain/person';
import { Transaction } from '../blockchain/transaction';

export class TransactionCreator extends Component<{people: Array<Person>, onDone: Function}> {
  
  from: Person;
  to: Person;

  constructor (props) {
    super(props);
    this.state = {
      from: '',
      to: '',
      amount: 0
    }
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.saveTransaction = this.saveTransaction.bind(this);
  }

  saveTransaction () {
    console.log(this.from, this.to);
    const t = new Transaction(this.from, this.to, this.state.amount);
    this.props.onDone(t);
  }

  handleAmountChange (event) {
    this.setState({ amount: event.target.value});
  }

  handleFromChange (event) {
    this.setState({ from: event.target.value});
    this.from = this.props.people.filter( p => p.name === event.target.value)[0];
  }

  handleToChange (event) {
    this.setState({ to: event.target.value});
    this.to = this.props.people.filter( p => p.name === event.target.value)[0];
  }
  render () {
    return  (
      <div className="transaction-container">
      <p>Add new transaction:</p>
      <div className="transaction-form">
        from: 
        <select name="from" value={this.state.from} onChange={this.handleFromChange}>
        <option >----</option>
          { this.props.people.map( (p, key) => <option key={key} value={p.name}>{p.name}</option> )}
        </select>
    
        to:
        <select name="to" value={this.state.to} onChange={this.handleToChange}>
        <option >----</option>
          { this.props.people.map( (p, key) => <option key={key} value={p.name}>{p.name}</option> )}
        </select>
        <label htmlFor="amount">amount</label>
        <input id="amount" type="number" placeholder="5" value={this.state.amount} onChange={this.handleAmountChange}/> $
        <button onClick={this.saveTransaction}> go </button>
      </div>
      </div>
    );
  }
}


