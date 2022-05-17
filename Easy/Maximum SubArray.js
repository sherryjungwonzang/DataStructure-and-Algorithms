//subarray is a contiguous part of an array
//given an integer array nums
//find the contiguous subarray containing at least one num which has the largest sum and return its sum

//Kadane's Algorithm
//Dynamic Programming
//making maxSubArray[i-1] and compare max(nums[i], maxSubArray[i-1] + nums[i])


var maxSubArray = function(nums) {
    let maxSoFar = nums[0];
    let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    maxSoFar = Math.max(current, current + maxSoFar);
    max = Math.max(max, maxSoFar);
  }
  return max;
}
