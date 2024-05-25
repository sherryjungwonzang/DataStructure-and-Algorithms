//416. Partition Equal Subset Sum
//given an integer array 'nums'
//return true if you can partition the array into two subsets
//such that the sum of the elements in both subsets is equal or false otherwise

//Approach:
//using DP
var partitionSubsetSum = (nums) => {
  //getting the sum of all elements
  let sum = nums.reduce((prev, curr) => prev + curr, 0);
  if (sum % 2 !== 0) return false; //odd sum - cannot partitioned into two subsets
  let target = sum / 2; //never have decimal

  //DP
  let dp = new Array(target + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) { //from target sum to curr
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]); 
    }
  }
  return dp[target] === target; //meaning possible to partition the array into two equal subsets
}
partitionSubsetSum([1,5,11,5]); //true
//the array can be partitioned as [1,5,5] and [11]

partitionSubsetSum([1,2,3,5]); //false
//the array cannot be partitioned into equal sum subsets
