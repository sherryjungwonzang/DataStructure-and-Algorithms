//521. Longest Uncommon Subsequence
//given two strings a and b
//return the length of the longest uncommon subsequence between a and b
//if no such uncommon subsequence exists, return -1
//an uncommon  subsequence between two strings is a string that is a subsequence of exactly one of them
var longestUncommonSubsequence = (a, b) => {
    return a === b ? -1 : Math.max(a.length, b.length);
}
longestUncommonSubsequence("aba", "cdc"); //3
//a !== b
//max(3, 3) = 3

longestUncommonSubsequence("aaa", "bbb"); //3
//a !== b
//max(3, 3) = 3

longestUncommonSubsequence("aaa", "aaa"); //-1
//a = b -> -1
