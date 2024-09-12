//628. Maximum Product Of Three Numbers
//given an integer array nums
//find three numbers whose product is maximum and return the max product
var maxProductThreeNums = (nums) => {
    let arr = nums.sort((a, b) => a - b); //sorting

    let prod1 = arr[0] * arr[1] * arr[nums.length - 1]; //for checking negative numbers
    let prod2 = arr[nums.length - 1] * arr[nums.length - 2] * arr[nums.length - 3];

    return Math.max(prod1, prod2);
}
maxProductThreeNums([7, 4, 1, 0, 3, 2, 6]); //168
//sorting: [0, 1, 2, 3, 4, 6, 7]
//          ^  ^              ^
//prod1 = 0 * 1 * 7 = 0

//                      ^  ^  ^
//prod2 = 4 * 6 * 7 = 168

maxProductThreeNums([1,2,3,4]); //24
//sorting: [1, 2, 3, 4]
//          ^  ^     ^
//prod1 = 1 * 2 * 4 = 8

//             ^  ^  ^
//prod2 = 2 * 3 * 4 = 24

maxProductThreeNums([-1,-2,-3]); //-6
