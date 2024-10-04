//1486. XOR Operation In Array
//given an integer n and an integer start
//define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length
//return bitwise XOR of all elements of nums

//Approach:
//using bitwise operation
var arrayXOROperation = (n, start) => {
    let xor = 0;

    for (let i = 0; i < n; i++) {
        xor ^= start + 2 * i;
    }

    return xor;
}
arrayXOROperation(n = 5, start = 0); //8 - array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8
//xor = 0

//i = 0
//0 + 2 * 0 = 0 

//i = 1
//0 + 2 * 1 = 2

//i = 2
//0 + 2 * 2 = 4

//i = 3
//0 + 2 * 3 = 6

//i = 4
//0 + 2 * 4 = 8
//xor = 0 -> 0 ^ 2 ^ 4 ^ 6 ^ 8 = 8

arrayXOROperation(n = 4, start = 3); //8 - array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8
//xor = 0

//i = 0
//3 + 2 * 0 = 3

//i = 1
//3 + 2 * 1 = 5

//i = 2
//3 + 2 * 2 = 7

//i = 3
//3 + 2 * 3 = 9
//xor = 0 -> 3 ^ 5 ^ 7 ^ 9 = 8
