//70. Climbing Stairs
//takes n steps to reach the top
//each time, you can either climb 1 or 2 steps
//return how many distinct ways you can climb to the top

//Approach:
//using DP
var climbingStairs = (n) => {
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
climbingStairs(2); //2 - 1step + 1step, 2steps
//DP[2] = 2 -> base case

climbingStairs(3); //3 - 1step + 1step + 1step, 1step + 2steps, 2steps + 1step
//DP[3] = dp[2] + dp[1]
