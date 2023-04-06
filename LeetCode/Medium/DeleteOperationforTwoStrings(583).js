//583. Delete Operation for Two Strings
//given two strings 'word1' and 'word2'
//return the minimum number of steps required to make word1 and word2 the same
//in one step, you can delete exactly one character in either string

//Approach:
//using DP
var deleteOperationforTwoStrings = (word1, word2) => {
  //extract the lenfgth of word1 and word2
  let m = word1.length;
  let n = word2.length;

  //create 2D array
  let dp = Array.from(Array(m + 1), () => new Array(n + 1).fill(0));

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1; //if it is equal, diagnoal + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  //the last value is the amount of common characters within both strings
  let commonChar = dp[m][n];

  //subtracting variable common character from both strings 
  //and add those together
  return word1.length - commonChar + word2.length - commonChar;
}
deleteOperationforTwoStrings("leetcode", "etco"); //4
//DP
//   ""  e  t  c  o
//""  0  0  0  0  0 
//l   0  0  0  0  0 
//e   0  1  1  1  1
//e   0  1  1  1  1
//t   0  1  2  2  2
//c   0  1  2  3  3
//o   0  1  2  3  4
//d   0  1  2  3  4
//e   0  1  2  3  4
//commonChar = dp[m][n] = 4
//word1.length(8) - 4 + word2.length(4) - 4 = 4

deleteOperationforTwoStrings("sea", "eat"); //2 - You need one step to make "sea" to "ea" and another step to make "eat" to "ea"
