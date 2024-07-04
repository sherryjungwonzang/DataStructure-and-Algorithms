//474. Ones And Zeroes
//given an array of binary strings 'strs' and two integers 'm' and 'n'
//return the size of the largest subset of 'strs' such that there are at most m 0's and n 1's in the subset
//a set x is a subset of set y if all elements of x are also elements of y

//Approach:
//using DP
var onesAndZeroes = (strs, m, n) => {
  //DP
  let dp = new Array(m + 1).fill('').map(() => Array(n + 1).fill(0));

  strs.forEach(str => {
    let ones = 0;
    let zeroes = 0;

    //collecting the num of 1 and 0
    for (let char of str) {
      char === '0' ? zeroes += 1: ones += 1;
    }

    //filling DP
    for (let i = m; i >= zeroes; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroes][j - ones] + 1);
      }
    }
  });

  return dp[m][n];
}
//TC: O(m * n * k)
//SC: O(m * n)
onesAndZeroes(strs = ["10","0001","111001","1","0"], m = 5, n = 3); //4 - {"10", "0001", "1", "0"}

onesAndZeroes(strs = ["10","0","1"], m = 1, n = 1); //2 - {"0", "1"}
