//1143. Longest Common Subsequence
//given two strings 'text1' and 'text2'
//return the length of their longest common subsequence
//if there is no common subsequence, return 0

//subsequence of a string is a new string generated from the original string with some characters deleted without changing the relative order of the remaining characters
//ex: 'ace' is a subsequence of 'abcde'
//a common subsequence of two strings is a subsequence that is common to both strings

//Approach:
//using DP 
var longestCommonSubsequence = (text1, text2) => {
    let m = text1.length; //row
    let n = text2.length; //col

    //DP - with 2D matrix
    let dp = Array.from(Array(m + 1), () => new Array(n + 1).fill(0));

    //to compare each string with 2D array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            //find the match
            if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1; //diagonal + 1
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); //comparing top and left
        }
    }

    return dp[m][n];
}
//TC: O(m * n) - m is the length of the first string | n is the length of the second string
//SC: O(m * n) - occupying DP array
longestCommonSubsequence("abcde", "ace"); //3
//regarding that populating 0 with the first row and column
//      ""  a   c   e                ""  a   c   e  
//---------------------         ---------------------
// "" |  0  0   0   0           "" |  0  0   0   0   
// a  |  0  0   0   0           a  |  0  1   1   1 
// b  |  0  0   0   0   ---->   b  |  0  1   1   1 
// c  |  0  0   0   0           c  |  0  1   2   2
// d  |  0  0   0   0           d  |  0  1   2   2 
// e  |  0  0   0   0           e  |  0  1   2   3

//i = 1, j = 1: a = a -> dp[1][1] = dp[0][0] + 1 = 1
//i = 1, j = 2: a != c -> dp[1][2] = dp[0][2], dp[1][1] = 1
//i = 1, j = 3: a != e -> dp[1][3] = dp[0][3], dp[1][2] = 1
//i = 2, j = 1: b != a -> dp[2][1] = dp[1][1], dp[2][0] = 1
//i = 2, j = 2: b != c -> dp[2][2] = dp[1][2], dp[2][1] = 1
//i = 2, j = 3: b != e -> dp[2][3] = dp[1][3], dp[2][2] = 1
//i = 3, j = 1: c != a -> dp[3][1] = dp[2][1], dp[3][0] = 1
//i = 3, j = 2: c = c -> dp[3][2] = dp[2][1] + 1 = 2
//i = 3, j = 3: c != e -> dp[3][3] = dp[2][3], dp[3][2] = 2
//i = 4, j = 1: d != a -> dp[4][1] = dp[3][1], dp[4][0] = 1
//i = 4, j = 2: d != c -> dp[4][2] = dp[3][1], dp[4][1] = 2
//i = 4, j = 3: d != e -> dp[4][3] = dp[3][3], dp[4][2] = 2
//i = 5, j = 1: e != a -> dp[5][1] = dp[4][1], dp[5][0] = 1
//i = 5, j = 2: e != c -> dp[5][2] = dp[4][1], dp[5][1] = 2
//i = 5, j = 3: e = e -> dp[5][3] = dp[4][2] + 1 = 3

longestCommonSubsequence("abc", "abc"); //3
//regarding that populating 0 with the first row and column
//      ""  a   b   c  
//-----------------------
// "" |  0  0   0   0   
// a  |  0  1   1   1  
// b  |  0  1   2   2   
// c  |  0  1   2   3  

longestCommonSubsequence("abc", "def"); //0
//regarding that populating 0 with the first row and column
//      ""  a   b   c  
//-----------------------
// "" |  0  0   0   0   
// d  |  0  0   0   0  
// e  |  0  0   0   0    
// f  |  0  0   0   0  
