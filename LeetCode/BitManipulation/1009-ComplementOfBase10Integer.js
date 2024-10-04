//1009. Complement Of Base 10 Integer
//the complement of an integer is the integer you get when you flip all the 0's to 1's
//and all the 1's to 0's in its binary representation
//for example, the integer 5 is "101" in binary and its complement is "010" which is the integer 2

//given an integer n
//return its complement

//Approach:
//using bit operation
var complementBase10Integer = (n) => {
    //base case
    if (n === 0) return 1;

    //bit operation
    for (let i = 1; i <= n; i *= 2)  n = n ^ i;

    return n;
}
complementBase10Integer(5); //2 - 5 is "101" in binary, with complement "010" in binary
//n = 5

//starting with i = 1
//5 ^ 1 = 0101
//        0001
//        ----
//        0100 = 4

//i = 2
//4 ^ 2 = 0100
//        0010
//        ----
//        0110 = 6

//i = 4
//6 ^ 4 = 0110
//        0100
//        ----
//        0010 = 2

complementBase10Integer(7); //0 - 7 is "111" in binary, with complement "000" in binary
//n = 7

//starting with i = 1
//7 ^ 1 = 0111
//        0001
//        ----
//        0110 = 6

//i = 2
//6 ^ 2 = 0110
//        0010
//        ----
//        0100 = 4

//i = 4
//4 ^ 4 = 0100
//        0100
//        ----
//        0000 = 0

complementBase10Integer(10); //5 - 10 is "1010" in binary, with complement "0101" in binary
//n = 10

//starting with i = 1
//10 ^ 1 = 1010
//         0001
//         ----
//         1011 = 11

//i = 2
//11 ^ 2 = 1011
//         0010
//         ----
//         1001 = 9

//i = 4
//9 ^ 4 = 1001
//        0100
//        ----
//        1101 = 13

//i = 8
//13 ^ 8 = 1101
//         1000
//         ----
//         0101 = 5
