//1048. Longest String Chain
//given an array of 'words' where each word consists of lowercase English letters
//wordA is predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA
//without changing the order of the other characters to make it equal to wordB
//for example, "abc" is a predecessor of "abac" - while "cba" is not a predecessor of "bcad"

//a word chain is a sequence of words [word1, word2, ... wordk] with k >= 1
//where word1 is a predecessor of word2
//word2 is a predecessor of word3 and so on
//a single word is trivially a word chain with k === 1
//return the length of the longest possible word chain with words chosen from the given list of words

//Approach:
//using DP - sorting words from the shortest to longest
var logestStringChain = (words) => {
  //sorting
  words.sort((a, b) => a.length - b.length);
  let dp = {};
  let max = 0;

  for (let word of words) {
    dp[word] = 1;

    for (let i = 0; i < word.length; i++) {
      let prev = word.slice(0, i) + word.slice(i + 1);

      if (prev in dp) dp[word] = Math.max(dp[word], dp[prev] + 1);
    }
    max = Math.max(max, dp[word]);
  }
  return max;
}
//TC: O(n * m) - n: the total number of words, m: the avg word length
//SC: O(n)
longestStringChain(["a","b","ba","bca","bda","bdca"]); //4 - ["a","ba","bda","bdca"]

longestStringChain(["xbc","pcxbcf","xb","cxbc","pcxbc"]); //5 - ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"]

longestStringChain(["abcd","dbqca"]); //1
