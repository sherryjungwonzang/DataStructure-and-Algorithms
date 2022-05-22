//HashTable
//Prime Number Hashing
//by using the modulus operator with prime numbers
//the modulus by prime numbers guarantees the nest distribution for a fixed size


function HashTable(size) {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
}

HashTable.prototype.put = (key, value) => {
  if (this.limit >= this.size) throw 'hash table is full';

  var hashedIndex = this.hash(key);

  //linear probing
  while(this.keys[hashedIndex] != null) {
    hashedIndex++;

    hashedIndex = hashedIndex % this.size;
  }

  //quadratic probing
  while(this.keys[hashedIndex] != null) {
    hashedIndex += Math.pow(squareIndex, 2);

    hashedIndex
    squareIndex++;
  }

  //double-hashing with linear probing
  while(this.keys[hashedIndex] != null) {
    hashedIndex++;

    hashedIndex = hashedIndex % this.size;
  }

  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
}

HashTable.prototype.get = (key) => {
  var hashedIndex = this.hash(key);

  //linear probing
  while(this.keys[hashedIndex] != key) {
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }

  //quadratic probing
  var squareIndex = 1;
  
  while(this.keys[hashedIndex] != key) {
    hashedIndex += Math.pow(squareIndex, 2);

    hashedIndex = hashedIndex % this.size;
    squareIndex++;
  }

  //double-hasing with linear probing
  while(this.keys[hashedIndex] != key) {
    hashedIndex++;

    hashedIndex = hashedIndex % this.size;
  }

  return this.values[hashedIndex];
}


HashTable.prototype.hash = (key) => {
  //check if int
  if (!Number.isInteger(key)) throw 'must be int';
    return key % this.size;

    //double-hashing with linear probing
    return this.secondHash(key % this.size);
}

HashTable.prototype.initArray = (size) => {
  var array = [];
  for (var i = 0; i < size; i++) {
    array.push(null);
  }
  return array;
}

//double-hashing with linear probing
HashTable.prototype.secondHash = (hashedKey) => {
  var R = this.size - 2;
  return R - hashedKey % R;
}


var exampletable = new HashTable(13);
exampletable.put(7, "hi");
exampletable.put(20, "hello");
exampletable.put(33, "sunny");
exampletable.put(46, "weather");
exampletable.put(59, "wow");
exampletable.put(72, "forty");
exampletable.put(85, "happy");
exampletable.put(98, "sad");


//OUTCOME of linear probing should be
//Keys: [85, 98, null, null, null, null, 7, 20, 33, 46, 59, 72]
//Values: ['happy', 'sad', null, null, null, null, null, 'hi', 'hello', 'sunny', 'weather', 'wow', 'forty']

//OUTCOME of quadratic probing should be
//Keys: [null, null, null, 85, 72, null, 98, 7, 20, null, 59, 46, 33]
//Values: [ null, null, null, 'happy', 'forty', null, 'sad', 'hi', 'hello', null, 'wow', 'weather', 'sunny']

//OUTCOME of double-hashing with linear probing should be
//Keys: [null, 59, 20, 85, 98, 72, null, 7, null, 46, null, 33, null]
//Values: [ null, 'wow', 'hello', 'happy', 'sad', 'forty', null, 'hi', null, 'weather', null, 'sunny', null]
