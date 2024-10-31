//413. Arithmetic Slices
//an integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same
//for example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences
//given an integer array nums
//return the number of arithmetic subarrays of nums

//Approach:
//using DP
var arithmeticSlices = (nums) => {
    let sum = 0;
    let dp = new Array(nums.length).fill(0);

    //DP
    for (let i = 2; i <= dp.length; i++) {
        //checking difference
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            dp[i] = 1 + dp[i - 1];

            sum += dp[i];
        }
    }

    return sum;
}
//TC: O(n)
//SC: O(n)
arithmeticSlices([1,2,3,4]); //3 - [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself
//DP = [0, 0, 0, 0]

//[1, 2, 3, 4]
//       ^
//checking nums[2] - nums[1] = nums[1] - nums[0]
//3 - 2 = 1 === 2 - 1 = 1
//dp = 1 + dp[1] = 1 + 0 = 1
//DP = [0, 0, 1, 0]
//sum = 0 -> 1

//[1, 2, 3, 4]
//          ^
//checking nums[3] - nums[2] = nums[2] - nums[1]
//4 - 3 = 1 === 3 - 2 = 1
//dp = 1 + dp[2] = 1 + 1 = 2
//DP = [0, 0, 1, 2]
//sum = 0 -> 1 -> 2

arithmeticSlices([1]); //0
