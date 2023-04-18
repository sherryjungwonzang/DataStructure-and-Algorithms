//1356. Sort Integers by the number of 1 bits
//given an integer array 'arr'
//sort the integers in the array in ascending order by the number of 1's in their binary representation
//and in case of two or more integers have the same number of 1's
//you have to sort them in ascending order

//return the array after sorting it

//Approach:
//using Binary representation
var sortByBits = (arr) => {
  //map - to store how many 1 is in the binary representation
  let map = {};

  for (let a of arr) {
    //using a helper function
    let count = numberOfOnes(a);
    map[a] = count;
  }

  //sort based of map first
  //otherwise sort based on ascending order of the integers
  return arr.sort((a, b) => map[a] - map[b] || a - b);
}

//finding and counting 1
function numberOfOnes(n) {
  //update when find 1
  let count = 0;

  while(n !== 0) {
    //n & 1 -> to find whether the significant bit is 1 or 0
    count += + n & 1; //same expression: count += n & 1;
    //to move the least significant bit
    n = n >>> 1;
  }
  return count;
}
sortByBits([0,1,2,3,4,5,6,7,8]);
//map = {}
//[0, 1, 2, 3, 4, 5, 6, 7, 8]
// a
//count = 0

//numberOfOnes(0) 
//0 = 0 0 0 0 -> count = 0
//map = { 0: 0 }

//    a
//numberOfOnes(1)
//1 = 0 0 0 1 
//1 is the least significant bit
//1 <<< 1 -> all 0s -> count = 1
//map = { 0: 0  1: 1 }
//...

//map = { 0: 0 | 1: 1 | 2: 1 | 3: 2 | 4: 1 | 5: 2 | 6: 2 | 7: 3 | 8: 1 }

sortByBits([1024,512,256,128,64,32,16,8,4,2,1]);
