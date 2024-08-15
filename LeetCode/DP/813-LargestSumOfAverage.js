//813. Largest Sum Of Average
//given an integer array 'nums' and an integer 'k'
//can partition the array into at most k non-empty adjacent subarrays
//the score of a partition is the sum of the averages of each subarray
//note that the partition must ust every integer in nums, and that the score is not necessarily an integer
//return the max score you can achieve of all the possible partitions

//Approach:
//using DP
var largestSumAvg = (nums, k) => {
    let n = nums.length;
    let sum = new Array(nums);
    sum[0] = nums[0];

    //calculating the sum
    for (let i = 1; i < n; i++) sum[i] = sum[i - 1] + nums[i]; //prev sum + curr val

    //DP - 2D array
    let dp = Array.from(Array(k), () => Array(n).fill(0)); 
    dp[0][0] = nums[0]; //base case

    //0 dividers - average on each position
    for (let i = 1; i < n; i++) dp[0][i] = sum[i] / (i + 1);

    for (let i = 1; i < k; i++) { //the row of dp array
        for (let j = k; j < n; j++) { //index of array
            for (let m = 0; m < j; m++) { //placement of divider
                let beforeAvg = dp[i - 1][m];
                let afterAvg = (sum[j] - sum[m]) / (j - m);

                dp[i][j] = Math.max(dp[i][j], beforeAvg + afterAvg);
            }
        }
    }

    return dp[k - 1][n - 1];
}
largestSumAvg(nums = [9,1,2,3,9], k = 3); //20.00000

largestSumAvg(nums = [1,2,3,4,5,6,7], k = 4); //20.50000
