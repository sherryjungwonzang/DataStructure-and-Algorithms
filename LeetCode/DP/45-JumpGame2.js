//45. Jump Game2
//given a 0-indexed array of integers 'nums' length of 'n'
//you are initially positioned at nums[0]
//each element nums[i] represents the max length of a forward jump from index i
//in other words, if you are at nums[i], you can jump to any nums[i + j] 
//where 0 <= j <= nums[i] and i + j < n
//return the min number of jumps to reach nums[n - 1]
//the test cases are generated such that you can reach nums[n - 1]

//Approach:
//using Greedy algorithms - to maximize reach within the array in the min number of jumps
//the max reach is calculated by comparing the curr max and the sum of the curr index and jump length from that index
//each jump is made at the most strategic point, extending the reach as far as possible within the min num of jumps
var jumpGame2 = (nums) => {
    let dp = new Array(nums.length).fill(Infinity);

    //base case
    dp[0] = 0;

    //looping - from 0 to i - 1 index
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] >= i - j) dp[i] = Math.min(dp[i], dp[j] + 1); //for one more jump from j_th index
        }
    }

    return dp[nums.length - 1];
}
jumpGame2([2,3,1,1,4]); //2 - the min number of jumps to reach the last index is 2
//[2, 3, 1, 1, 4]
//DP = [ 0, Infi, Infi, Infi, Infi ]

//i = 1, j = 0 || 2 > 1 -> min(Infi, 0 + 1) = 1
//DP = [ 0, 1, Infi, Infi, Infi ]

//i = 2, j = 0 || 2 = 2 -> min(Infi, 0 + 1) = 1
//i = 2, j = 1 || 3 > 1 -> min(Infi, 1 + 1) = 2
//DP = [ 0, 1, 1, Infi, Infi ]

//i = 3, j = 0 || 2 < 3
//i = 3, j = 1 || 3 > 2 -> min(Infi, 1 + 1) = 2
//i = 3, j = 2 || 1 = 1 -> min(Infi, 1 + 1) = 2
//DP = [ 0, 1, 1, 2, Infi ]

//i = 4, j = 0 || 2 < 4
//i = 4, j = 1 || 3 = 3 -> min(Infi, 1 + 1) = 2
//i = 4, j = 2 || 1 < 2 
//i = 4, j = 3 || 1 = 1 -> min(Infi, 2 + 1) = 3
//DP = [ 0, 1, 1, 2, 2 ]

jumpGame2([2,3,0,1,4]); //2
