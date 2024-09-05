//300. Longest Increasing Subsequence
//given an integer array 'nums'
//return the length of the longest strictly increasing subsequence

//Approach:
//using DP
var longestIncreasingSubsequence = (nums) => {
    let dp = new Array(nums.length).fill(1); //1 - subsequence never goes to 0

    //looping
    for (let i = 1; i <= nums.length; i++) {
        for (let j = i; j >= 0; j--) { //backwards to check increasing
            //compare with curr val and prev val
            if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }

    return Math.max(...dp);
}
//TC: O(n^2)
//SC: O(n)
longestIncreasingSubsequence([0,1,0,3,2,3]); //4 
//nums = [ 0   1   0   3   2   3 ]
//             i
//         j   j
//i = 1, j = 1: i = j
//i = 1, j = 0: i > j -> dp[1] = max(dp[1], dp[0] + 1) = 2
//dp = [ 1   2   1   1   1   1 ]

//nums = [ 0   1   0   3   2   3 ]
//                 i
//         j   j   j
//i = 2, j = 2: i = j 
//i = 2, j = 1: i < j 
//i = 2, j = 0: i = j 
//dp = [ 1   2   1   1   1   1 ]

//nums = [ 0   1   0   3   2   3 ]
//                     i
//         j   j   j   j
//i = 3, j = 3: i = j 
//i = 3, j = 2: i > j -> dp[3] = max(dp[3], dp[2] + 1) = 2
//i = 3, j = 1: i > j -> dp[3] = max(dp[3], dp[1] + 1) = 3
//i = 3, j = 0: i > j -> dp[3] = max(dp[3], dp[0] + 1) = 2
//dp = [ 1   2   1   3   1   1 ]

//nums = [ 0   1   0   3   2   3 ]
//                         i
//         j   j   j   j   i
//i = 4, j = 4: i = j 
//i = 4, j = 3: i < j 
//i = 4, j = 2: i > j -> dp[4] = max(dp[4], dp[2] + 1) = 2
//i = 4, j = 1: i > j -> dp[4] = max(dp[4], dp[1] + 1) = 3
//i = 4, j = 0: i > j -> dp[4] = max(dp[4], dp[0] + 1) = 2
//dp = [ 1   2   1   3   3   1 ]

//nums = [ 0   1   0   3   2   3 ]
//                             i
//         j   j   j   j   i   i
//i = 5, j = 5: i = j 
//i = 5, j = 4: i > j -> dp[5] = max(dp[5], dp[4] + 1) = 4
//i = 5, j = 3: i = j
//i = 5, j = 2: i > j -> dp[5] = max(dp[5], dp[2] + 1) = 2
//i = 5, j = 1: i > j -> dp[5] = max(dp[5], dp[1] + 1) = 2
//i = 5, j = 0: i > j -> dp[4] = max(dp[5], dp[0] + 1) = 2
//dp = [ 1   2   1   3   3   4 ]

longestIncreasingSubsequence([10,9,2,5,3,7,101,18]); //4 - the longest increasing subsequence is [2,3,7,101]

longestIncreasingSubsequence([7,7,7,7,7,7,7]); //1
