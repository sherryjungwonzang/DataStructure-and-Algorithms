//338. Counting Bits
//given an integer 'n'
//return an array 'ans' of length n+1 such that for each i (0 <= i <= n)
//ans[i] is the number of 1's in the binary representation of i

//Approach:
//using DP array and setting offset
var countingBits = (n) => {
  //setting a DP array with filling 0
  //n+1: it starts with 0
  let dp = new Array(n + 1).fill(0);

  //set offset to update the most significant bit of 1 according to the position of 1
  let offset = 1;

  for (let i = 1; i <= n; i++) {
    //to check whether we have updated the most significant bit
    if (offset * 2 === i) offset = i; //offset will be upodated on 1,2,4,8....

    //formula
    dp[i] = 1 + dp[i - offset];
  }
  return dp;
}
//TC: O(n)

//0 = 0000 
//1 = 0001 -> offset 1
//2 = 0010 -> offset 2
//3 = 0011 
//4 = 0100 -> offset 4
//5 = 0101 
//6 = 0110
//7 = 0111
//8 = 1000 -> offset 8

countingBits(2); //[0,1,1]
//DP array = [ 0,  1,  1 ]
//             0   1   2
//offset = 1
//dp[1] = 1 + dp[1-1] = 1
//offest = 2
//dp[2] = 1 + dp[2-2] = 1

countingBits(5); //[0,1,1,2,1,2]
//DP array = [ 0,  1,  1,  2,  1,  2 ]
//             0   1   2   3   4   5
//offset = 1
//dp[1] = 1 + dp[1-1] = 1
//offest = 2
//dp[2] = 1 + dp[2-2] = 1
//dp[3] = 1 + dp[3-2] = 2
//offest = 4
//dp[4] = 1 + dp[4-4] = 1
//dp[5] = 1 + dp[5-4] = 2

countingBits(8); //[0,1,1,2,1,2,2,3,1]
//DP array = [ 0,  1,  1,  2,  1,  2,  2,  3,  1 ]
//             0   1   2   3   4   5   6   7   8 
//offset = 1
//dp[1] = 1 + dp[1-1] = 1
//offest = 2
//dp[2] = 1 + dp[2-2] = 1
//dp[3] = 1 + dp[3-2] = 2
//offset = 4
//dp[4] = 1 + dp[4-4] = 1
//dp[5] = 1 + dp[5-4] = 2
//dp[6] = 1 + dp[6-4] = 2
//dp[7] = 1 + dp[7-4] = 3
//offset = 8
//dp[8] = 1 + dp[8-8] = 1
