class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  
  set(key, val) {
    let hashKey = this._hash(key);
    if (!this.data[hashKey]) {
      this.data[hashKey] = [];
    }
    this.data[hashKey].push([key, val]);
    
    console.log(this.data);
    return this.data;
  }
  
  get(key) {
    let hashKey = this._hash(key);
    let bucket = this.data[hashKey];
  
    //console.log(bucket)
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set('orange', 10000);
myHashTable.set('blackberry', 1200);
myHashTable.set('lemon', 1214);
myHashTable.set('orange');

//collision will happen
//to solve this
//Map
//Set
const a = new Map();
const b = new Set();
