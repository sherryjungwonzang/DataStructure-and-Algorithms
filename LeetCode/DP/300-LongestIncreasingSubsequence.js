//300. Longest Increasing Subsequence
//given an integer array 'nums'
//return the length of the longest strictly increasing subsequence

//Approach:
//using DP with bottom-up approach - to check optimal substructure
//compare current with all previous values in nums
//optimal substructure: DP[curr] = max(DP[prev] + 1, DP[curr])
var longestIncreasingSubsequence = (nums) => {
  //creating DP array with initializing with 1
  let dp = new Array(nums.length).fill(1);

  for(let i = 1; i <= nums.length; i++) {
    //loop backwards
    for (let j = i; j >=0; j--) {
      //comparing with the current value and previous value - to check increasing or not
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
//dp = [ 1   1   1   1   1   1 ]
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
//        0   1  2  3  4  5   6    7
//nums = [10, 9, 2, 5, 3, 7, 101, 18]
//            i
//        j
//dp  =  [ 1  1  1  1  2  3   4    1]

//nums 1) i > j -> No 
//nums 2) i > j -> No 
//nums 3) i > j -> No 

//nums 4) i > j -> YES
//i = 4 | j = 2
//max(dp[4], dp[2]+1) = 2

//nums 5) i > j -> YES
//i = 5 | j = 4
//i = 5 | j = 3
//i = 5 | j = 2
//max(dp[5], dp[4]+1) = 3
//max(dp[5], dp[3]+1) = 2
//max(dp[5], dp[2]+1) = 2

//nums 6) i > j -> YES
//i = 6 | j = 5
//i = 6 | j = 4
//i = 6 | j = 3
//i = 6 | j = 2
//i = 6 | j = 1
//i = 6 | j = 0
//max(dp[6], dp[5]+1) = 4
//max(dp[6], dp[4]+1) = 3
//max(dp[6], dp[3]+1) = 2
//max(dp[6], dp[2]+1) = 2
//max(dp[6], dp[1]+1) = 2
//max(dp[6], dp[0]+1) = 2

//nums 7) i > j -> YES
//i = 7 | j = 5
//i = 7 | j = 4
//i = 7 | j = 3
//i = 7 | j = 2
//i = 7 | j = 1
//i = 7 | j = 0
//max(dp[7], dp[5]+1) = 4
//max(dp[7], dp[4]+1) = 3
//max(dp[7], dp[3]+1) = 2
//max(dp[7], dp[2]+1) = 2
//max(dp[7], dp[1]+1) = 2
//max(dp[7], dp[0]+1) = 2

//max(...dp) = 4

longestIncreasingSubsequence([7,7,7,7,7,7,7]); //1
//        0  1  2  3  4  5  6  
//nums = [7, 7, 7, 7, 7, 7, 7]
//           i
//        j
//dp  =  [1  1  1  1  1  1  1]

//nums 1) i > j -> No 
//nums 2) i > j -> No 
//nums 3) i > j -> No 
//nums 4) i > j -> No 
//nums 5) i > j -> No 
//nums 6) i > j -> No 

//max = 1
