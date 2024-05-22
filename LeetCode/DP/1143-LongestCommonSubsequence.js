//1143. Longest Common Subsequence
//given two strings 'text1' and 'text2'
//return the length of their longest common subsequence
//if there is no common subsequence, return 0

//subsequence of a string is a new string generated from the original string with some characters deleted without changing the relative order of the remaining characters
//ex: 'ace' is a subsequence of 'abcde'
//a common subsequence of two strings is a subsequence that is common to both strings

//Approach:
//using DP with 2D matrix - global optimal
//need to compare each string with 2D array
//set the first row and column as 0
var longestCommonSubsequence = (text1, text2) => {
  //setting variables of the length of text1 and text2
  let m = text1.length;
  let n = text2.length;

  //creating DP matrix - filling the entire matrix as 0
  let dp = Array.from(Array(m + 1), () => new Array(n + 1).fill(0));

  //loop through text1 and text2
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        //finding the match
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else { //no match
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}
//TC: O(m * n) - m is the length of the first string | n is the length of the second string
//SC: O(m * n) - occupying DP array
longestCommonSubsequence("abcde", "ace"); //3
//regarding that populating 0 with the first row and column
//      ""  a   b   c   d   e
//--------------------------------
// "" |  0  0   0   0   0   0
// a  |  0  1   1   1   1   1
// c  |  0  1   1   2   2   2 
// e  |  0  1   1   2   2   3

//row=a and col=a is matching -> then move to the diagonal way and add 1 -> 1
//row=c and col=c is matching -> then move to the diagonal way and add 1 -> 2
//row=e and col=e is matching -> then move to the diagonal way and add 1 -> 3

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
