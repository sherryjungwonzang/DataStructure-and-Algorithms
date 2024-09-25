//762. Prime Number Of Set Bits In Binary Representation
//given two integers left and right
//return the count of numbers in the inclusive range [left, right]
//having a prime number of set bits in their binary representation
//recall that the number of set bits an integer has is the number of 1's present when written in binary
//for example, 21 written in binary is 10101, which has 3 set bits

//Approach:
//using toString(2)
var primeSetBits = (left, right) => {
    let prime = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
    let count = 0;
    
    for (let i = left; i <= right; i++) {
        if (prime.has(i.toString(2).replace(/0/g, '').length)) count++;
    }

    return count;
}
primeSetBits(left = 6, right = 10); //4
// 6    7    8    9   10
//110  111 1000 1001 1010
// ^
//110 replace 0 -> 11 = 3
//3 is prime
//count = 0 -> 1

// 6    7    8    9   10
//110  111 1000 1001 1010
//      ^
//111 replace 0 -> 111 = 7
//7 is prime
//count = 0 -> 1 -> 2

// 6    7    8    9   10
//110  111 1000 1001 1010
//           ^
//1000 replace 0 -> 1 = 1
//1 is not prime
//count = 0 -> 1 -> 2 -> 2

// 6    7    8    9   10
//110  111 1000 1001 1010
//                ^
//1001 replace 0 -> 11 = 3
//3 is prime
//count = 0 -> 1 -> 2 -> 2 -> 3

// 6    7    8    9   10
//110  111 1000 1001 1010
//                     ^
//1010 replace 0 -> 11 = 3
//3 is prime
//count = 0 -> 1 -> 2 -> 2 -> 3 -> 4

primeSetBits(left = 10, right = 15); //5
// 10    11     12     13    14    15
//1010  1011   1100   1101  1110  1111
// ^
//1010 replace 0 -> 11 = 3
//3 is prime
//count = 0 -> 1

// 10    11     12     13    14    15
//1010  1011   1100   1101  1110  1111
//       ^
//1011 replace 0 -> 111 = 7
//7 is prime
//count = 0 -> 1 -> 2

// 10    11     12     13    14    15
//1010  1011   1100   1101  1110  1111
//               ^
//1011 replace 0 -> 11 = 3
//3 is prime
//count = 0 -> 1 -> 2 -> 3

// 10    11     12     13    14    15
//1010  1011   1100   1101  1110  1111
//                     ^
//1101 replace 0 -> 111 = 7
//7 is prime
//count = 0 -> 1 -> 2 -> 3 -> 4

// 10    11     12     13    14    15
//1010  1011   1100   1101  1110  1111
//                            ^
//1110 replace 0 -> 111 = 7
//7 is prime
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5

// 10    11     12     13    14    15
//1010  1011   1100   1101  1110  1111
//                                  ^
//1111 replace 0 -> 1111 = 15
//15 is not prime
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 5
