//1137. Nth Tribonacci Number
//the tribonacci sequence T_n is defined as follows:
//T0 = 0, T1 = 1, T2 = 1
//T_n+3 = T_n + T_n+1 + T_n+2 for n >= 0

//given n
//return the value of T_n

//Approach:
//using DP
var tribonacciNum = (n) => {
    //base case
    if (n < 2) return n;

    let dp = dp[0, 1, 1];

    //DP
    for (let i = 3; i <= n; i++) {
        let next = dp[0] + dp[1] + dp[2];

        //updating values
        dp[0] = dp[1];
        dp[1] = dp[2];
        dp[2] = next;
    }

    return dp[2];
}
tribonacciNum(4); //4
//dp = [0, 1, 1]

//n = 3                     n = 4
//dp[0] = 0 -> 1            -> 1   
//dp[1] = 1 -> 1            -> 2
//dp[2] = 1 -> 2            -> 4
//next = 0 + 1 + 1 = 2      next = 1 + 1 + 2 = 4

tribonacciNum(25); //1389537
