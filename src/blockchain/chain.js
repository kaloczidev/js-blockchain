
import {hash} from 'sha-256';
import {BlockNode} from './block';

export class Chain<T> {
  items: Array<BlockNode<T>>;
  _hashPrefix;

  _startHash;
  constructor(hashPrefix: string = '0000') {
    this.items = [];
    this._hashPrefix = hashPrefix;
    this._startHash = hash(new Date().toISOString());
  }

  addNewItem(data: T) {
    const prevHash = this.items.length === 0 ? this._startHash : this.items[this.items.length - 1]._hash;
    const newBlock: BlockNode<T> = new BlockNode(prevHash, data);
    newBlock.fitHash(this._hashPrefix);
    this.items.push(newBlock);
  };

}
