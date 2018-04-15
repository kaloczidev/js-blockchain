// blockchain node classs
import { hash } from 'sha-256';

export class BlockNode<T> {
  // changing value to fit hash
  _nonce: number;
  // the data we store
  _blockData: T;
  // previous hash
  _previousHash: string;
  // time created
  _timestamp: string;
  // the block's identifier hash
  _hash: string;

  constructor(prevHash: string, data: T) {
    // fill up data
    this._nonce = 0;
    this._timestamp = new Date().toISOString();
    this._blockData = data;
    this._previousHash = prevHash;
    this._hash = '';
  }

  fitHash(startsWith: string): void {
    while(!this._hash.startsWith(startsWith)) {
      this._nonce++;
      this._hash = this._createHash();
    }
  }

  _createHash(): string {
    return hash(`${this._previousHash}${this._nonce}${this._timestamp}`);
  }
};
