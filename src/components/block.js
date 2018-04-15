import React,{Component} from 'react';

import {BlockNode} from '../blockchain/block';
import {Transaction} from '../blockchain/transaction';

import './block.css';

export class Block extends Component<{node: BlockNode<Transaction> }> {
  render () {
    console.log('turo', this.props);
    return  (
      <div className="blockchain-block">

        <div className="hash"> {this.props.node._hash} @ {this.props.node._timestamp} </div>

        <div className="transaction-data"> 
        <div className="column">
          <strong>from: </strong>
          {this.props.node._blockData.from.name}
        </div>
        <div className="column">
          <strong>to: </strong>
          {this.props.node._blockData.to.name}
        </div>
        <div className="column">
          <strong>amount: </strong>
          ${this.props.node._blockData.amount}
        </div>

        <div className="column">
          <strong>nonce: </strong>
          {this.props.node._nonce}
        </div>
        </div>
      </div>
    );
  }
}


