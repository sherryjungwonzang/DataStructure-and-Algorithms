//89. Gray Code
//an n-bit code sequence is a sequence of 2^n integers where:
//every integer is in the inclusive range [0, 2^n - 1]
//the first integer is 0
//an integer appears no more than once in the sequence
//the binary representation of every pair of adjacent integers differs by exactly one bit
//the binary representation of the first and last integers differs by exactly one bit

//given an integer n
//return any valid n-bit gray code sequence

//Approach:
//using bit manipulation
var grayCode = (n) => {
    let count = 1 << n; //amount of range
    let res = [];

    for (let i = 0; i < count; i++) {
        code = i ^ (i >> 1);
        res.push(code);
    }

    return res;
}
grayCode(2); //[0,1,3,2]
//The binary representation of [0,1,3,2] is [00,01,11,10].
//00 and 01 differ by one bit
//01 and 11 differ by one bit
//11 and 10 differ by one bit
//10 and 00 differ by one bit

//[0,2,3,1] is also a valid gray code sequence, whose binary representation is [00,10,11,01].
//00 and 10 differ by one bit
//10 and 11 differ by one bit
//11 and 01 differ by one bit
//01 and 00 differ by one bit

//n = 2 -> count = 1 << 2
//0001 -> 0100 = 4

//i = 0: count = 0 ^ (0 >> 1) 
//0000 -> 0000 = 0
//-> 0 ^ 0 = 0
//res = [ 0, ]

//i = 1: count = 1 ^ (1 >> 1)
//0001 -> 0000 = 0
//-> 1 ^ 0:     0001
//              0000
//              ----
//              0001 = 1
//res = [ 0, 1, ]

//i = 2: count = 2 ^ (2 >> 1)
//0010 -> 0001 = 1
//-> 2 ^ 1:     0010
//              0001
//              ----
//              0011 = 3
//res = [ 0, 1, 3, ]

//i = 3: count = 3 ^ (3 >> 1)
//0011 -> 0001 = 1
//-> 3 ^ 1:     0011
//              0001
//              ----
//              0010 = 2
//res = [ 0, 1, 3, 2 ]

grayCode(1); //[0,1]
