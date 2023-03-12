//Longest Increasing Subsequence(300)
//given an integer array 'nums'
//return the length of the longest strictly increasing subsequence

//Approach:
//usign DP - because this is asking for the longest
//compare current with all previous values in nums
var longestIncreasingSubsequence = (nums) => {
  //create DP array - initializing with 1
  let dp = new Array(nums.length).fill(1);
  
  for(let i = 1; i <= nums.length; i++)  {
    //loop backwards
    for (let j = i; j >= 0; j--) {
      //compare current value with the previous value
      if (nums[i] > nums[j]) {
        //put the biggest one
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
}
//TC: O(n^2)
//SC: O(n)
longestIncreasingSubsequence([0,1,0,3,2,3]); //4
//nums = 0   1   0   3   2   3
//dp =   1   1   1   1   1   1
//           i
//       j
//nums i vs j -> 1 vs 0 || Yes
//max(dp[1], dp[0]+1) = 2

//nums = 0   1   0   3   2   3
//dp =   1   2   1   1   1   1
//               i
//           j
//nums i vs j -> 0 vs 1, 0 vs 0 || NO
//move to the next

//                    i
//       j
//nums i vs j -> 3 vs 0 || Yes
//max(dp[3], dp[2]+1) = 2
//nums i vs j -> 3 vs 1 || Yes
//max(dp[3], dp[1]+1) = 3
//nums i vs j -> 3 vs 0 || Yes
//max(dp[3], dp[0]+1) = 3

//nums = 0   1   0   3   2   3
//dp =   1   2   1   3   1   1
//                       i
//       j
//nums i vs j -> 2 vs 3|| NO
//move to the next
//nums i vs j -> 2 vs 0 || Yes
//max(dp[4], dp[2]+1) = 2
//nums i vs j -> 2 vs 1 || Yes
//max(dp[4], dp[1]+1) = 3
//nums i vs j -> 2 vs 0 || Yes
//max(dp[4], dp[0]+1) = 3

//nums = 0   1   0   3   2   3
//dp =   1   2   1   3   3   1
//                           i
//       j
//nums i vs j -> 3 vs 2 || Yes
//max(dp[5], dp[4]+1) = 4
//nums i vs j -> 3 vs 3|| NO
//move to the next
//nums i vs j -> 3 vs 0 || Yes
//max(dp[5], dp[2]+1) = 4
//nums i vs j -> 3 vs 1 || Yes
//max(dp[5], dp[1]+1) = 4
//nums i vs j -> 3 vs 0 || Yes
//max(dp[5], dp[0]+1) = 4

//nums = 0   1   0   3   2   3
//dp =   1   2   1   3   3   4
//max(dp) = 4

longestIncreasingSubsequence([10,9,2,5,3,7,101,18]); //4 - the longest increasing subsequence is [2,3,7,101]

longestIncreasingSubsequence([7,7,7,7,7,7,7]); //1
