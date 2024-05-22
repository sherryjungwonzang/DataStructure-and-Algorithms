//191. Number of 1 Bits
//takes the binary representation of an unsigned integer
//returns the number of '1' bits it has - Hamming weight

//Approach:
//using & for figuring out how many 1 are there
//using left shift >>> for moving to the next number
var hammingWeight = (n) => {
    let count = 0; //need to update when we find '1'
  
    while(n !== 0) {
      // 0 & 1 = 0 or 1 & 1 = 1 -> so we can distinguish which is one
      let isOne = n & 1; 
  
      if (isOne === 1) count++;
      
      //need to move counter to the left with >>> 1 function
      n = n >>> 1; 
    }
    return count;
}
//TC: O(1)
//Sc: O(1)
hammingWeight('0000000000000000000001011'); //3
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


hammingWeight('0000000000000100000000000'); //1
//                         -
//count = 0
//1 & 1 = 1 -> count = 1
//n === 0 -> get out of while loop
