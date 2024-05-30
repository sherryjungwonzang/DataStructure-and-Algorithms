//516. Longest Palindromic subsequence
//given a string 's'
//find the longest palindromic subsequence's length in s
//a subsequence is a sequence that can be dreived from another sequence by deleting some or no elements without changing the order of the remaining elements

//Approach:
//using 2D DP array
var longestPalindromicSubsequence = (s) => {
  let n = s.length;
  let dp = Array(n).fill().map(() => Array(n).fill(0));

  //reversing from backwards - will use values computed in previous iterations which stored in the lower half of the array
  for (let i = n - 1; i >= 0; i--) {
    //base case - longest palindromic subsequence of single character is 1
    dp[i][i] = 1;

    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) { //longest palindromic subsequence can be extended by 2
        dp[i][j] = 2 + dp[i + 1][j - 1]; //including the first and last char of substring and the rest is still palindrome 
      } else { //take max of two possible substring
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][n - 1];
}
//TC: O (n^2) - the length of the input string
//SC: O(n^2) - storing the length of the longest palindromic subsequence for each substring
longestPalindromicSubsequence("bbbab"); //4
//"bbbb" is the longest possible palindromic subsequence

longestPalindromicSubsequence("cbbd"); //2
//"bb" is the longest possivle palindromic subsequence
