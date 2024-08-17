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
//using DP
var longestStringChain = (words) => {
    //sorting by length
    words.sort((a, b) => a.length - b.length);
    let dp = {};
    let max = 0;

    //DP
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
//sorting: words =  ["a", "b", "ba", "bca", "bda", "bdca"]
//dp = {}
//max = 0

//words =  ["a", "b", "ba", "bca", "bda", "bdca"]
//dp = { a: 1, }

//"a"
//prev = _
//dp = { a: 1, }
//max = 0 -> max(0, dp[a] = 1) = 1

//"b"
//prev = _
//dp = { a: 1, b: 1, }
//max = 0 -> max(0, dp[b] = 1) = 1

//"ba"
// ^
//prev = "a"
//dp[ba] = max(dp[ba], dp[a] + 1) = (1, 2) = 2
//dp = { a: 1, b: 1, ba: 2 }

//"ba"
//  ^
//prev = "b"
//dp[ba] = max(dp[ba], dp[b] + 1) = (2, 2) = 2
//dp = { a: 1, b: 1, ba: 2 }
//max = 0 -> max(0, dp[b] = 1) = 1 -> max(0, dp[ba] = 2) = 2

//"bca"
// ^
//prev = "ca"
//dp[bca] = prev not in dp
//dp = { a: 1, b: 1, ba: 2, bca: 1 }

//"bca"
//  ^
//prev = "ba"
//dp[bca] = max(dp[bca], dp[ba] + 1) = (1, 3) = 3
//dp = { a: 1, b: 1, ba: 2, bca: 1 -> 3 }

//"bca"
//   ^
//prev = "bc"
//dp[bca] = prev not in dp
//dp = { a: 1, b: 1, ba: 2, bca: 3 }
//max = 0 -> max(0, dp[b] = 1) = 1 -> max(1, dp[ba] = 2) = 2 -> max(2, dp[bca] = 3) = 3

//"bda"
// ^
//prev = "da"
//dp[bca] = prev not in dp
//dp = { a: 1, b: 1, ba: 2, bca: 3, bda: 1 }

//"bda"
//  ^
//prev = "ba"
//dp[bca] = max(dp[bda], dp[ba] + 1) = (1, 3) = 3
//dp = { a: 1, b: 1, ba: 2, bca: 3, bda: 1 -> 3 }

//"bda"
//   ^
//prev = "bd"
//dp[bca] = prev not in dp
//dp = { a: 1, b: 1, ba: 2, bca: 3, bda: 3 }
//max = 0 -> max(0, dp[b] = 1) = 1 -> max(1, dp[ba] = 2) = 2 -> max(2, dp[bca] = 3) = 3 -> max(3, dp[bda] = 3) = 3

//"bdca"
// ^
//prev = "dca"
//dp[bdca] = prev not in dp
//dp = { a: 1, b: 1, ba: 2, bca: 3, bda: 3, bdca: 1 }

//"bdca"
//  ^
//prev = "bca"
//dp[bdca] = max(dp[bdca], dp[bca] + 1) = (1, 4) = 4
//dp = { a: 1, b: 1, ba: 2, bca: 3, bda: 3, bdca: 1 -> 4 }


//"bdca"
//   ^
//prev = "bda"
//dp[bdca] = max(dp[bdca], dp[bda] + 1) = (1, 4) = 4
//dp = { a: 1, b: 1, ba: 2, bca: 3, bda: 3, bdca: 4 -> 4}


//"bdca"
//   ^
//prev = "bdc"
//dp[bdca] = prev not in dp
//dp = { a: 1, b: 1, ba: 2, bca: 3, bda: 3, bdca: 4 }
//max = 0 -> max(0, dp[b] = 1) = 1 -> max(1, dp[ba] = 2) = 2 -> max(2, dp[bca] = 3) = 3 -> max(3, dp[bda] = 3) = 3 -> max(3, dp[bdca] = 4) = 4

longestStringChain(["xbc","pcxbcf","xb","cxbc","pcxbc"]); //5 - ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"]

longestStringChain(["abcd","dbqca"]); //1
