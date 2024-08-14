//416. Partition Equal Subset Sum
//given an integer array 'nums'
//return true if you can partition the array into two subsets
//such that the sum of the elements in both subsets is equal or false otherwise

//Approach:
//using DP
var partitionSubsetSum = (nums) => {
    let sum = nums.reduce((prev, curr) => prev + curr, 0)
    let target = sum / 2; //never have decimal

    //checking odd or even
    if (sum % 2 !== 0) return false; //odd - cannot be partitioned into two subsets

    //DP
    let dp = new Array(target + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) { //from target sum to curr
            //max sum can be achieved at curr sum + curr num
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
        }
    }

    return dp[target] === target; //possible to partition into two subsets
}
partitionSubsetSum([1,5,11,5]); //true
//the array can be partitioned as [1,5,5] and [11]
//sum = 22 -> not odd
//target = 11

//DP
//[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

//i = 0, target = 11
//dp[11] = max(0, dp[11 - 1] + 1) = 1
//dp[10] = max(0, dp[10 - 1] + 1) = 1
//...
//dp[0] = max(0, dp[0 - 1] + 1) = 1
//DP = [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]

//i = 1, target = 11
//dp[11] = max(1, dp[11 - 5] + 5) = 6
//dp[10] = max(1, dp[10 - 5] + 5) = 6
//dp[9] = max(1, dp[9 - 5] + 5) = 6
//dp[8] = max(1, dp[8 - 5] + 5) = 6
//dp[7] = max(1, dp[7 - 5] + 5) = 6
//dp[6] = max(1, dp[6 - 5] + 5) = 6
//dp[5] = max(1, dp[5 - 5] + 5) = 5
//DP = [ 0, 1, 1, 1, 1, 5, 6, 6, 6, 6, 6, 6 ]

//i = 2, target = 11
//dp[11] = max(6, dp[11 - 11] + 11) = 11
//dp[10] = max(6, dp[10 - 11] + 11) = -
//DP = [ 0, 1, 1, 1, 1, 5, 6, 6, 6, 6, 6, 11 ]

//i = 5, target = 11
//dp[11] = max(11, dp[11 - 5] + 5) = 11
//dp[10] = max(11, dp[10 - 5] + 5) = 10
//dp[9] = max(11, dp[9 - 5] + 5) = 11
//DP = [ 0, 1, 1, 1, 1, 5, 6, 6, 6, 6, 10, 11 ]
//dp[11] = 11 -> true

partitionSubsetSum([1,2,3,5]); //false
//the array cannot be partitioned into equal sum subsets
