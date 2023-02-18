//Blind75 - Binary
//1. Sum of Two Integers (371)
//given two integers a and b
//return the sum of the two integers without using the operators + and -

//Approach: bit Manipulation | Bit Shifting
//& - to find my carries | the position needs to carry
//^ - to actually do addition within the iterations
//<< - to turn my carry into what I am going to apply in the next iteration || to move the carries to the left
//a - running addition results || b - carries

//find carries -> do the addition -> b holds left-shifted carry
//a is the actual addition result
//b is the carry after left shift
function sumofTwoIntegers(a, b) { 
  let carry;

  while(b !== 0) {
    carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
}
sumofTwoIntegers(1, 2); //3

sumofTwoIntegers(2, 3); //5


//2. Number of 1 Bits (191)
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
