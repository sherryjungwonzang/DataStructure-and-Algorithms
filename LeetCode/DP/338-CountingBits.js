//338. Counting Bits
//given an integer n
//retun an array ans of length n + 1 such that for each i (0 <= i <= n)
//ans[i] is the num of 1's in the binary representation of i

//Approach:
//using DP
var countingBits = (n) => {
    let dp = new Array(n + 1).fill(0);
    let offset = 1; //significant bit of 1 according to the position of 1

    for (let i = 1; i <= n; i++) {
        //check offset updates
        if (offset * 2 === i) offset = i;

        dp[i] = 1 + dp[i - offset];
    } 

    return dp;
}
//TC: O(n)
//Offset
//0 = 0000 
//1 = 0001 -> offset 1
//2 = 0010 -> offset 2
//3 = 0011 
//4 = 0100 -> offset 4
//5 = 0101 
//6 = 0110
//7 = 0111
//8 = 1000 -> offset 8

countingBits(8); //[0,1,1,2,1,2,2,3,1]
//DP array = [ 0,  0,  0,  0,  0,  0,  0,  0,  0 ] -> [ 0,  1,  1,  2,  1,  2,  2,  3,  1 ]
//             0   1   2   3   4   5   6   7   8 
//offset = 1
//i = 1 -> dp[1] = 1 + dp[1 - 1] = 1

//i = 2: offest * 2 = 2
//dp[2] = 1 + dp[2 - 2] = 1
//i = 3 -> dp[3] = 1 + dp[3 - 2] = 2

//i = 4: offset * 2 = 4
//i = 4 -> dp[4] = 1 + dp[4 - 4] = 1
//i = 5 -> dp[5] = 1 + dp[5 - 4] = 2
//i = 6 -> dp[6] = 1 + dp[6 - 4] = 2
//i = 7 -> dp[7] = 1 + dp[7 - 4] = 3

//i = 8: offset * 2 = 8
//dp[8] = 1 + dp[8 - 8] = 1

