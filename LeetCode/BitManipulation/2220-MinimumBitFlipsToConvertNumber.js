//2220. Minimum Bit Flips To Convert Number
//A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0

//for example, for x = 7, the binary representation is 111 and we may choose any bit (including any leading zeros not shown) and flip it
//we can flip the first bit from the right to get 110, flip the second bit from the right to get 101, 
//flip the fifth bit from the right (a leading zero) to get 10111, etc

//given two integers start and goal
//return the minimum number of bit flips to convert start to goal

//Approach:
//using bit manipulation
var minBitFlips = (start, goal) => {
    let xor = start ^ goal; //to check different from two numbers
    let res = 0;

    while (xor) {
        //bit counting
        res += xor & 1;

        //move to next
        xor >>= 1;
    }

    return res;
}
//TC: O(k) - the num of bits in binary representation of the larger of the two numbers
//SC: (1)
minBitFlips(start = 10, goal = 7); //3
//start = 1 0 1 0
//goal =  0 1 1 1
//xor =   1 1 0 1 -> 1 1 0 1 = 13
//                   0 0 0 1 = 1
//                  ---------
//                   1 1 0 0 = 12
//res = 0 -> 1

//xor =              0 1 1 0 = 6
//                   0 0 0 1 = 1
//                  ---------
//                   0 1 1 1 = 7
//res = 0 -> 1 -> 1

//                   0 0 1 1 = 3
//                   0 0 0 1 = 1
//                  ---------
//                   0 0 1 0 = 2
//res = 0 -> 1 -> 1 -> 2

//                   0 0 0 1 = 1
//                   0 0 0 1 = 1
//                  ---------
//                   0 0 0 0 = 0
//res = 0 -> 1 -> 1 -> 2 -> 3

minBitFlips(start = 3, goal = 4); //3
//start = 0 0 1 1
//goal =  0 1 0 0
//xor =   0 1 1 1 -> 0 1 1 1 = 7
//                   0 0 0 1 = 1
//                  ---------
//                   0 1 1 0 = 6
//res = 0 -> 1

//xor =              0 0 1 1 = 3
//                   0 0 0 1 = 1
//                  ---------
//                   0 0 1 0 = 2
//res = 0 -> 1 -> 2

//xor =              0 0 0 1 = 1
//                   0 0 0 1 = 1
//                  ---------
//                   0 0 0 0 = 0
//res = 0 -> 1 -> 2 -> 3

