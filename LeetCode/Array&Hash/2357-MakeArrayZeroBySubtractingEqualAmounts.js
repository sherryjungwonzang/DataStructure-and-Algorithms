//2357. Make Array Zero By Subtracting Equal Amounts
//given a non-negative integer array nums
//in one operation, you must:
//choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums
//subtract x from every positive element in nums
//return the min number of operations to make every element in nums equal to 0

//Approach:
//using set
var makeArrayZero = (nums) => {
    let set = new Set();

    for (let n of nums) {
        if (n !== 0) set.add(n);
    }

    return set.size;
}
makeArrayZero([1,5,0,3,5]); //3
//In the first operation, choose x = 1. Now, nums = [0,4,0,2,4]
//In the second operation, choose x = 2. Now, nums = [0,2,0,0,2]
//In the third operation, choose x = 2. Now, nums = [0,0,0,0,0]

//[1, 5, 0, 3, 5]
// ^
//set = { 1, }

//[1, 5, 0, 3, 5]
//    ^
//set = { 1, 5, }

//[1, 5, 0, 3, 5]
//       ^
//0 -> skip
//set = { 1, 5, }

//[1, 5, 0, 3, 5]
//          ^
//set = { 1, 5, 3,  }

//[1, 5, 0, 3, 5]
//             ^
//5 is already in set -> skip
//set = { 1, 5, 3 }
//3

makeArrayZero([1,5,6,0,5,0,2,5]); //4
//[1, 5, 6, 0, 5, 0, 2, 5]
// ^
//set = { 1, }

//[1, 5, 6, 0, 5, 0, 2, 5]
//    ^
//set = { 1, 5, }

//[1, 5, 6, 0, 5, 0, 2, 5]
//       ^
//set = { 1, 5, 6, }

//[1, 5, 6, 0, 5, 0, 2, 5]
//          ^
//0 -> skip
//set = { 1, 5, 6, }

//[1, 5, 6, 0, 5, 0, 2, 5]
//             ^
//5 is already in set -> skip
//set = { 1, 5, 6, }

//[1, 5, 6, 0, 5, 0, 2, 5]
//                ^
//0 -> skip
//set = { 1, 5, 6, }

//[1, 5, 6, 0, 5, 0, 2, 5]
//                   ^
//set = { 1, 5, 6, 2, }

//[1, 5, 6, 0, 5, 0, 2, 5]
//                      ^
//5 is already in set -> skip
//set = { 1, 5, 6, 2 }
//4

makeArrayZero([0]); //0
