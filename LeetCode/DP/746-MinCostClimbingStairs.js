//746. Min Cost Climbing Stairs
//given an integer array 'cost' where cost[i] is the cost of i_th step on a staircase
//on ce you pay the cost, you can either climb one or two steps
//you can either start from the step with index 0 or the step with index 1
//return the minimum cost to reach the top of the floor

//Approach:
//using DP array - to store min cost to reach each step
var minCostClimpingStairs = (cost) => {
  //creating DP with array - will create as 'cost' array length
  let dp = new Array(cost);

  dp[0] = 0;
  dp[1] = 0;

  //looping steps from 2nd step to n_th step
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[dp.length - 1];
}
//TC: O(n)
//SC: O(n)
minCostClimpingStairs([10,15,20]); //15
//will start at index 1
//pay 15 and climb two steps to reach the top
//the total cost is 15

minCostClimpingStairs([1,100,1,1,1,100,1,1,100,1]); //6
//will start at index 0
//pay1 and climb two steps to reach index 2
//pay1 and climb two steps to reach index 4
//pay1 and climb two steps to reach index 6
//pay1 and climb two steps to reach index 7
//pay1 and climb two steps to reach index 9
//pay1 and climb two steps to reach index top
//the total cost is 16
