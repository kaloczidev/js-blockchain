# blockchain javascript example

> this example uses node and flow. make sure you have flow and node installed correctly.

Understand blockchain by seeing in real life. Rules of a blockchain:

- a block contains transaction data
- a block have a previous hash
- this blocks makes a chain
- a chain have a special property: a hashPrefix
- a block can join to a chain if it's hash starts with the chain's prefix

This hash prefix is achieved by changing a nounce integer in each transaction that makes different hashes.
The longer prefix you have means the longer hashfindig time you have.

## usage

install dependecies:
```bash
yarn
```

set the blockchain's prefix in `src/index.js`
```javascript
const chainPrefix = 'baba';
```
**note:** changing this prefix dramaticaly improves execution time.
