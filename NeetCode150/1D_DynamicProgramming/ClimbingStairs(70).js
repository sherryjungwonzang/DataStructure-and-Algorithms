//Climbing Stairs (70)
//takes n steps to reach the top
//each time, you can either climb 1 or 2 steps
//returns how many distinct ways you can climb to the top

//another approach: DP
//creating a DP Array - setting 1 on DP[1] and 2 on DP[2]
var climbStairs = (n) => {
  let dp = [];

  //base cases
  dp[1] = 1;
  dp[2] = 2;

  //recursive calls
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
//TC: O(n)
//SC: O(n)
climbingStairs(2); //2 - 1step +1step, 2steps
//DP[1] = 1
//DP[2] = 2
//DP[3] = 3
//DP[4] = 5
//DP[5] = 8
//...

climbingStairs(3); //3 - 1step + 1step + 1step, 1step + 2steps, 2steps + 1step

//Approach: 
//recursive with memoization - bottom up approach
//working same with fibonacci functions
function climbingStairs(n, memo = new Array) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  if (memo[n] !== undefined) {
    return memo[n];
  }
  let res = climbingStairs(n-1, memo) + climbingStairs(n-2, memo);
  memo[n] = res;

  return res;
}

