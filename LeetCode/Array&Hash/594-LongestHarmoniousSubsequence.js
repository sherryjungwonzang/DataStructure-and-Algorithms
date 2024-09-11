//594. Longest Harmonious Subsequence
//we define a harmonious array as an array where the difference between its max value and min value is exactly 1
//given an integer array nums
//return the length of its longest harmonious subsequence among all its possible subsequences
//a subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements

//Approach:
//using hash map
var longestHarmoniousSubsequence = (nums) => {
    let map = new Map();
    let res = 0;

    //filling the hash map
    for (let i = 0; i < nums.length; i++) map.set(nums[i], map.get(nums[i]) + 1 || 1);

    //checking the difference which is 1
    for (let [key, val] of map) if (map.get(key - 1)) res = Math.max(res, map.get(key - 1) + val);

    return res;
}
longestHarmoniousSubsequence([1,3,2,2,5,2,3,7]); //5 - [3,2,2,2,3]
//map = {
//  key: val
//    1: 1,
//    2: 3,
//    3: 2,
//    5: 1,
//    7: 1,
//}
//res = 0

//key = 1 -> does not have 0 in map
//key = 2 -> key - 1 is in map
//res = 0 -> (0, 3 + 1) = 4

//key = 3 -> key - 1 is in map
//res = 0 -> (0, 3 + 1) = 4 -> (4, 2 + 3) = 5

//key = 5 -> does not have 4 in map
//key = 7 -> does not have 6 in map

longestHarmoniousSubsequence([1,2,3,4]); //2 - [1,2] or [3,4]
//map = {
//  key: val
//    1: 1,
//    2: 1,
//    3: 1,
//    4: 1,
//}
//res = 0

//key = 1 -> does not have 0 in map
//key = 2 -> key - 1 is in map
//res = 0 -> (0, 1 + 1) = 2

//key = 3 -> key - 1 is in map
//res = 0 -> (0, 1 + 1) = 2 -> (2, 1 + 1) = 2

//key = 4 -> key - 1 is in map
//res = 0 -> (0, 1 + 1) = 2 -> (2, 1 + 1) = 2 -> (2, 1 + 1) = 2

longestHarmoniousSubsequence([1,1,1,1]); //0-
