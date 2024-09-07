//509. Fibonacci Number
//the Fibonacci numbers, commonly denoted F(n) from a sequence - called Fibonacci sequence
//such that each number is the sum of the two preceding ones, startin from 0 to 1
//F(0) = 0, F(1) = 1
//F(n) = F(n - 1) + F(n - 2), n > 1
//given n, calculate F(n)

//Approach:
//using DP
var fibonacciNum = (n) => {
    let dp = new Array(n + 1);

    //base case
    dp[0] = 0;
    dp[1] = 1;

    //DP
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}
//TC: O(n)
fibonacciNum(4); //3
//DP = [ 0, 1, 1, 2, 3]
//i = 2 -> dp[2] = dp[0] + dp[1] = 1
//i = 3 -> dp[3] = dp[1] + dp[2] = 2
//i = 4 -> dp[4] = dp[2] + dp[3] = 3

fibonacciNum(5); //5
