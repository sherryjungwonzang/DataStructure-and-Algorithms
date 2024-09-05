//583. Delete Operation for Two Strings
//given two strings 'word1' and 'word2'
//return the minimum number of steps required to make word1 and word2 the same
//in one step, you can delete exactly one character in either string

//Approach:
//using DP
var deleteOperation = (word1, word2) => {
    let m = word1.length;
    let n = word2.length;

    //DP - 2D array
    let dp = Array.from(Array(m + 1), () => new Array(n + 1).fill(0));

    //looping
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            //equal
            if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    //common char in both strings
    let commonChar = dp[m][n];

    //subtracting commonChar from both strings
    return word1.length - commonChar + word2.length - commonChar;
}
deleteOperation("sea", "eat"); //2 - You need one step to make "sea" to "ea" and another step to make "eat" to "ea"
//DP
//   ""  e  a  t                    ""  e  a  t 
//""  0  0  0  0                  ""    0  0  0  0  
//s   0  0  0  0       ->          s    0  0  0  0  
//e   0  0  0  0                   e    0  1  1  1
//a   0  0  0  0                   a    0  1  1  1 -> dp[m][n]

//i = 1, j = 1: s != e -> dp[1][1] = max(dp[0][1], dp[1][0]) = 0
//i = 1, j = 2: s != a -> dp[1][2] = max(dp[0][2], dp[1][1]) = 0
//i = 1, j = 3: s != t -> dp[1][3] = max(dp[0][3], dp[1][2]) = 0
//i = 2, j = 1: e = e -> dp[2][1] = dp[1][0] + 1 = 1
//i = 2, j = 2: e != a -> dp[2][2] = max(dp[1][2], dp[2][1]) = 1
//i = 2, j = 3: e != t -> dp[2][3] = max(dp[1][3], dp[2][2]) = 1
//i = 3, j = 1: a != e -> dp[3][1] = max(dp[2][1], dp[3][0]) = 1
//i = 2, j = 2: a = a -> dp[3][2] = dp[1][1] + 1 = 2
//i = 3, j = 3: a != t -> dp[3][3] = max(dp[2][3], dp[3][2]) = 2

//commonChar = dp[m][n] = 2
//word1.length(3) - 2 + word2.length(3) - 2 = 2

deleteOperation("leetcode", "etco"); //4
//DP
//   ""  e  t  c  o                   ""  e  t  c  o
//""  0  0  0  0  0                 ""    0  0  0  0  0 
//l   0  0  0  0  0                  l    0  0  0  0  0 
//e   0  1  1  1  1                  e    0  1  1  1  1
//e   0  1  1  1  1                  e    0  1  1  1  1
//t   0  1  2  2  2        ->        t    0  1  2  2  2
//c   0  1  2  3  3                  c    0  1  2  3  3
//o   0  1  2  3  4                  o    0  1  2  3  4
//d   0  1  2  3  4                  d    0  1  2  3  4
//e   0  1  2  3  4                  e    0  1  2  3  4 -> dp[m][n]

//commonChar = dp[m][n] = 4
//word1.length(8) - 4 + word2.length(4) - 4 = 4
