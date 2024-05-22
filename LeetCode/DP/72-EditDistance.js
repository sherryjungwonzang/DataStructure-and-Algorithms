//72. Edit distance
//given two strings 'word1' and 'word2'
//return the min number of operations required to convert word11 to word2
//you have the following three operations permitted on a word:
//insert a character
//delete a character
//replace a character

//Approach:
//using DP
var editDistance = (word1, word2) => {
  //DP - filling the first row and col as 0
  let dp = Array.from(Array(word1.length + 1), () => new Array(word2.length + 1).fill(0));
  let m = dp.length;
  let n = dp[0].length;

  //setting the first row with each position number
  for (let i = 0; i < m; i++) {
    dp[i][0] = i;
  }
  //setting the first col with each position number
  for (let i = 0; i < n; i++) {
    dp[0][i] = i;
  }

  //Traversing from [1][1]
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1, //top checking
        dp[i][j - 1] + 1, //left checking
        dp[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1] ? 1 : 0) //diagnoal checking
      );
    }
  }
  return dp[m - 1][n - 1];
}
//TC: O(n)
editDistance("horse", "ros"); //3
//horse -> rorse (replace 'h' with 'r')
//rorse -> rose (remove 'r')
//rose -> ros (remove 'e')

editDistance("intention", "execution"); //5
//intention -> inention (remove 't')
//inention -> enention (replace 'i' with 'e')
//enention -> exention (replace 'n' with 'x')
//exention -> exection (replace 'n' with 'c')
//exection -> execution (insert 'u')
