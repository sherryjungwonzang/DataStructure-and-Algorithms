//2395. Find Subarrays With Equal Sum
//given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum
//note that the two subarrays must begin at different indices
//return true if these subarrays exist, and false otherwise
//a subarray is a contiguous non-empty sequence of elements within an array

//Approach:
//using set
var equalSumSubarrays = (nums) => {
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        //equal sum
        let total = nums[i] + nums[i + 1];

        //meaning having equal sum from pairs
        if (set.has(total)) return true;

        set.add(total);
    }

    return false;
}
equalSumSubarrays([4,2,4]); //true
//[4, 2, 4]
// ^  ^
//total = 4 + 2 = 6
//set = { 6 }

//[4, 2, 4]
//    ^  ^
//total = 4 + 2 = 6
//set = { 6 }

//true

equalSumSubarrays([1,2,3,4,5]); //false
//[1, 2, 3, 4, 5]
// ^  ^
//total = 1 + 2 = 3
//set = { 3 }

//[1, 2, 3, 4, 5]
//    ^  ^
//total = 2 + 3 = 5
//set = { 3, 5 }

//[1, 2, 3, 4, 5]
//       ^  ^
//total = 3 + 4 = 7
//set = { 3, 5, 7 }

//[1, 2, 3, 4, 5]
//          ^  ^
//total = 4 + 5 = 9
//set = { 3, 5, 7, 9 }

//false

equalSumSubarrays([0,0,0]); //true
