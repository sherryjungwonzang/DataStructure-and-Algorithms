//198. House Robber
//given an integer array 'nums' - representing the amount of money of each house
//return the max amount of money you can do rob tonight without alerting the police

//you are a professional robber planning to rob house along a street
//each house has a certain amount of money stashed
//the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected 
//and it will automatically contact the police if two adjacent houses were broken into on the same night

//Approach:
//using DP
var houseRobber = (nums) => {
    //base case
    if (nums.length === 0) return 0; //no stealing
    if (nums.length === 1) return nums[0]; //only one house to steal

    //DP
    let dp = Array(nums).fill(0);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[dp.length - 1];
}
//TC: O (n) - we carried out dp[0] and dp[1]
//SC: O (n) - allocate at DP Array same size with nums
houseRobber([1,2,3,1]); //4 - Rob house 1| money=1 and then rob house 3 | money=3 - total 1+3=4
//[1, 2, 3, 1]
//DP = [ 0  0  0  0 ] -> [ 1  2  4  4 ] 
//dp[0] = nums[0] = 1
//dp[1] = max(nums[0], nums[1]) = max(1, 2) = 2

//[1, 2, 3, 1]
//       ^
//dp[2] = max(dp[1], dp[0] + nums[2]) = max(2, 3 + 1) = 4
//dp[3] = max(dp[2], dp[1] + nums[3]) = max(4, 1 + 2) = 4

houseRobber([2,7,9,3,1]); //12 - Rob house 1 | money=2 and rob house 3 | money=9 and rob house 5 | money=1 - total amount you can do rob is 2+9+1=12
//[2, 7, 9, 3, 1]
//DP = [ 0  0  0  0  0 ] -> [ 2  7  11  11  12 ]
//dp[0] = nums[0] = 2
//dp[1] = max(nums[0], nums[1]) = max(2,7) = 7

//[2, 7, 9, 3, 1]
//       ^
//dp[2] = max(dp[1], dp[0] + nums[2]) = max(7, 9 + 2) = 11
//dp[3] = max(dp[2], dp[1] + nums[3]) = max(11, 3 + 7) = 11
//dp[4] = max(dp[3], dp[2] + nums[4]) = max(11, 1 + 11) = 12
