//Number of 1 Bits (191)
//takes the binary representation of an unsigned integer
//returns the number of '1' bits it has - Hamming weight
var hammingWeight = (n) => {
  let count = 0; //need to update when we find '1'

  while(n !== 0) {
    let isOne = n & 1; // 0 & 1 = 1 or 1 & 1 = 1 -> so we can distinguish which is one

    if (isOne === 1) count++;
    
    n = n >>> 1; //need to move counter to the left with <<< 1 function
  }
  return count;
}
hammingWeight(0000000000000000000001011); //3
//                                    -
//count = 0
//1 & 1 = 1 -> count = 1
//                                   -
//count = 1
//1 & 1 = 1 -> count = 2
//                                  -
//count = 2
//0 & 1 = 1
//                                 -
//count = 2
//1 & 1 = 1 -> count = 3
//n === 0 -> get out of while loop


hammingWeight(0000000000000100000000000); //1
