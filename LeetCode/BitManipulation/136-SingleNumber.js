//136. Single Number
//given a non-empty array of integers nums
//every element appears twice except for one
//find that single one

//Approach:
//using bit manipulation - XOR
var singleNumber = (nums) => {
    let n = nums.length;
    let c = 0;

    //XOR: cleaving only the number appears only once
    for (let i = 0; i < n; i++) c = c ^ nums[i];

    return c;
}
//TC: O(n) - the size of input vector
//SC: O(1)
singleNumber([2,2,1]); //1
//[2, 2, 1]
// ^
//c = 0 -> 0 ^ 2
//0000
//0010
//----
//0010 = 2
//c = 0 -> 0 ^ 2 = 2

//[2, 2, 1]
//    ^
//c = 0 -> 2 -> 2 ^ 2
//0010
//0010
//----
//0000 = 0
//c = 0 -> 2 -> 2 ^ 2 = 0

//[2, 2, 1]
//       ^
//c = 0 -> 2 -> 0 -> 0 ^ 1
//0000
//0001
//----
//0001 = 1
//c = 0 -> 2 -> 0 -> 0 ^ 1 = 1

singleNumber([4,1,2,1,2]); //4
//[4, 1, 2, 1, 2]
// ^
//c = 0 -> 0 ^ 4
//0000
//0100
//----
//0100 = 4
//c = 0 -> 0 ^ 4 = 4

//[4, 1, 2, 1, 2]
//    ^
//c = 0 -> 4 -> 4 ^ 1
//0100
//0001
//----
//0101 = 5
//c = 0 -> 4 -> 4 ^ 1 = 5

//[4, 1, 2, 1, 2]
//       ^
//c = 0 -> 4 -> 5 -> 5 ^ 2
//0101
//0010
//----
//0111 = 7
//c = 0 -> 4 -> 5 -> 5 ^ 2 = 7

//[4, 1, 2, 1, 2]
//          ^
//c = 0 -> 4 -> 5 -> 7 -> 7 ^ 1
//0111
//0001
//----
//0110 = 6
//c = 0 -> 4 -> 5 -> 7 -> 7 ^ 1 = 6

//[4, 1, 2, 1, 2]
//             ^
//c = 0 -> 4 -> 5 -> 7 -> 6 -> 6 ^ 2
//0110
//0010
//----
//0100 = 4
//c = 0 -> 4 -> 5 -> 7 -> 6 -> 6 ^ 2 = 4

singleNumber([1]); //1
