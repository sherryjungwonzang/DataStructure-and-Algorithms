//746. Min Cost Climbing Stairs
//given an integer array 'cost' where cost[i] is the cost of i_th step on a staircase
//on ce you pay the cost, you can either climb one or two steps
//you can either start from the step with index 0 or the step with index 1
//return the minimum cost to reach the top of the floor

//Approach:
//using DP array
var minCostClimbingStairs = (cost) => {
    let dp = new Array(cost);

    //no cost at starting point
    dp[0] = 0;
    dp[1] = 0;

    //traversing
    for (let i = 2; i <= cost.length; i++) {
        //two options
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    return dp[dp.length - 1];
}
//TC: O(n)
//SC: O(n)
minCostClimbingStairs([10,15,20]); //15
//dp = [10, 15, 20] -> [0, 0, 20]

//[10, 15, 20]
//          ^
//dp[2] = min(dp[1] + cost[1], dp[0] + cost[0]) = (0 + 15, 0 + 10) = 10
//dp = [0, 0, 10]

//dp[3] = min(dp[2] + cost[2], dp[1] + cost[1]) = (10 + 20, 0 + 15) = 15
//dp = [0, 0, 10, 15]

minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]); //6
//will start at index 0
//pay1 and climb two steps to reach index 2
//pay1 and climb two steps to reach index 4
//pay1 and climb two steps to reach index 6
//pay1 and climb two steps to reach index 7
//pay1 and climb two steps to reach index 9
//pay1 and climb two steps to reach index top
//the total cost is 16


