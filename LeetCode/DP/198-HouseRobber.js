//198. House Robber
//given an integer array 'nums' - representing the amount of money of each house
//return the max amount of money you can do rob tonight without alerting the police

//you are a professional robber planning to rob house along a street
//each house has a certain amount of money stashed
//the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected 
//and it will automatically contact the police if two adjacent houses were broken into on the same night

//Approach:
//DP with bottom approach - utilize the smallest kind of solution to work out larger solutions
var houseRobber = (nums) => {
  if (nums.length === 0) return 0; //not stealing anything if there is no houses
  if (nums.length === 1) return nums[0];

  //DP array
  let dp = Array(nums + 1).fill(0);

  //base cases of DP Array
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  //recursive calls
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[dp.length - 1];
}
//TC: O (n) - we carried out dp[0] and dp[1]
//SC: O (n) - allocate at DP Array same size with nums
houseRobber([1,2,3,1]); //4 - Rob house 1| money=1 and then rob house 3 | money=3 - total 1+3=4
//nums = [1, 2, 3, 1]
//DP Array - filling with 0
//  0  1  2  3
//  0  0  0  0

//dp[0] = nums[0] = 1
//dp[1] = max(nums[0], nums[1]) = max(1, 2) = 2
//dp[2] = max(nums[2] + dp[0], dp[1]) = max(3+1, 2) = 4
//dp[3] = max(nums[3] + dp[1], dp[2]) = max(1+2, 4) = 4

//  0  1  2  3
//  1  2  4  4 -> return value

houseRobber([2,7,9,3,1]); //12 - Rob house 1 | money=2 and rob house 3 | money=9 and rob house 5 | money=1 - total amount you can do rob is 2+9+1=12
//nums = [2, 7, 9, 3, 1]
//DP Array - filling with 0
//  0  1  2  3  4
//  0  0  0  0  0

//dp[0] = nums[0] = 2
//dp[1] = max(nums[0], nums[1]) = max(2,7) = 7
//dp[2] = max(nums[2] + dp[0], dp[1]) = max(9+2, 7) = 11
//dp[3] = max(nums[3] + dp[1], dp[2]) = max(3+7, 11) = 11
//dp[4] = max(nums[4] + dp[2], dp[3]) = max(1+11, 11) = 12

//  0  1  2  3  4
//  2  7  11 11 12    -> return value
