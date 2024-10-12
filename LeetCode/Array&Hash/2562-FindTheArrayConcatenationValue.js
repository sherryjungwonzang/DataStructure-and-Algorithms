//2562. Find The Array Concatenation Value
//given a 0-indexed integer array nums

//the concatenation of two numbers is the number formed by concatenating their numerals
//for example, the concatenation of 15, 49 is 1549

//the concatenation value of nums is initially equal to 0. Perform this operation until nums becomes empty:
//if there exists more than one number in nums, pick the first element and last element in nums respectively and 
//add the value of their concatenation to the concatenation value of nums, 
//then delete the first and last element from nums
//if one element exists, add its value to the concatenation value of nums, then delete it
//return the concatenation value of the nums

//Approach:
//using toString() for concatenation
var arrayConcatenationValue = (nums) => {
    let sum = 0;

    while (nums.length > 1) {
        //calculating first and last value
        sum += Number(nums[0].toString() + nums[nums.length - 1].toString());

        //removing from the array
        nums.shift(); //first element
        nums.pop(); //last element
    };

    if (nums.length === 1) sum += nums[0];

    return sum;
}
arrayConcatenationValue([7,52,2,4]); //596
//[7, 52, 2, 4]
// ^         ^    -> '7' + '4' = '74'
//sum = 74
//[52, 2]

//[52, 2]
// ^   ^ -> '52' + '2' = '522'
//sum = 74 -> 74 + 522 = 596

arrayConcatenationValue([5,14,13,8,12]); //673
//[5, 14, 13, 8, 12]
// ^              ^     -> '5' + '12' = '512'
//sum = 512
//[14, 13, 8]

//[14, 13, 8]
// ^       ^     -> '14' + '8' = '148'
//sum = 512 -> 512 + 148 = 660
//[13]

//[13]
//  ^
//sum = 512 -> 512 + 148 = 660 -> 660 + 13 = 673
