//213. House Robber2
//given an integer array 'nums' - representing the amount of money of each house
//return the max amount of money you can do rob tonight without alerting the police

//you are a professional robber planning to rob house along a street
//each house has a certain amount of money stashed
//All houses at this place are arranged in a circle
//meaning the first house is the neighbor of the last one
//meanwhile adjacent houses have a security system connected
//and it will automatically contact the police if two adjacent houses were broken into on the same night

//Approach:
//creating two DP Arrays
//DP Array1 - from index 0 to the the front of the last
//DP Array 2 = from index 1 to the last//combine two arrays and return the max value
var houseRobber2 = (nums) => {
  //edge cases
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  //creating two DP Arrays
  let dp1 = new Array(nums.length);
  let dp2 = new Array(nums.length);

  //compute in two DP arrays with different ranges - with helper function
  robTwice(0, nums.length - 2, dp1, nums); //stealing from index 0 to the last - 2 index
  robTwice(1, nums.length - 1, dp2, nums); //stealing from index 1 to the last - 1 index

  //better to create a function for this to use on both DP arrays
  function robTwice(i, numsLen, dp, nums) {
    //the first value
    dp[i] = nums[i]; 

    //the second value
    dp[i + 1] = Math.max(dp[i], nums[i + 1]);

    for (let j = i + 2; j <= numsLen; j++) {
      dp[j] = Math.max(nums[j] + dp[j - 2], dp[j - 1]);
    }
  }

  //we will get:
  //dp1[n, n, n, _]
  //dp2[_, n, n, n]
  //need to find the max value between _ in dp1 and _ in dp2
  return Math.max(dp1[nums.length - 2], dp2[nums.length - 1]);
}
houseRobber2([1,2,3,1]); //4 - Rob house 1 | money=1 and then rob house 3 | money=3 - total amount can rob is 1+3=4
//[1, 2, 3, 1]
//-------- : dp1
//    ------- : dp2

//DP1
//  0  1  2  3  4
//  0  0  0  0  _

//dp[0] = nums[0] = 1
//dp[1] = max(nums[0], nums[1]) = max(1, 2) = 2
//dp[2] = max(nums[2] + dp[0], dp[1]) = max(3+1, 2) = 4

//  0  1  2  3  
//  1  2  4  _ 

//DP2
//  0  1  2  3
//  _  0  0  0 

//dp[1] = nums[1] = 2
//dp[2] = max(nums[1], nums[2]) = max(2, 3) = 3
//dp[3] = max(nums[3] + dp[1], dp[2]) = max(1+2, 3) = 3

//  0  1  2  3
//  _  2  3  3

//return max(dp1.length - 2, dp2.length - 1) = max(4, 3) = 4

houseRobber2([2,3,2]); //3 - cannot rob house 1 | money=2 and then rob house 3 | money=2, because they are adjacent houses
//[2, 3, 2]
//------ : dp1
//    ----- : dp2

//DP1
//  0  1  2 
//  0  0  _

//dp[0] = nums[0] = 2
//dp[1] = max(nums[0], nums[1]) = max(2,3) = 3

//  0  1  2 
//  2  3  _

//DP2
//  0  1  2 
//  _  0  0

//dp[1] = nums[1] = 3
//dp[2] = max(nums[2], nums[1]) = max(2, 3) = 3

//  0  1  2 
//  _  3  3

//return max(dp1.length - 2, dp2.length - 1) = max(3, 3) = 3

houseRobber2([1,2,3]); //3
