//3042. Count Prefix And Suffix Pairs 
//given a 0-indexed string array words
//let's define a boolean function isPrefixAndSuffix that takes two strigs, str1 and str2
//isPrefixAndSuffix(str1, str2) returns true if str1 is both a prefixand a suffix of str2, and false otherwise
//For example, isPrefixAndSuffix("aba", "ababa") is true because "aba" is a prefix of "ababa" and also a suffix, but isPrefixAndSuffix("abc", "abcd") is false
//return an integer denoting the number of index pairs (i, j) such that i < j
//and isPrefixAndSuffix(words[i], words[j]) is true
var prefixSuffixPairs = (words) => {
    let n = words.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            //comparing
            let word1 = words[i];
            let word2 = words[j];

            //prefix and suffix pairs
            if (word2.startsWith(word1) && word2.endsWith(word1)) count++;
        }
    }

    return count;
}
prefixSuffixPairs(words = ["a","aba","ababa","aa"]); //4
//["a", "aba", "ababa", "aa"]
//  i     j
//word1 = "a"
//word2 = "aba"
//"aba" starts with a & endsWith a -> valid
//count = 0 -> 1

//["a", "aba", "ababa", "aa"]
//  i             j
//word1 = "a"
//word2 = "ababa"
//"ababa" starts with a & endsWith a -> valid
//count = 0 -> 1 -> 2

//["a", "aba", "ababa", "aa"]
//  i                    j
//word1 = "a"
//word2 = "aa"
//"aa" starts with a & endsWith a -> valid
//count = 0 -> 1 -> 2 -> 3

//["a", "aba", "ababa", "aa"]
//        i       j
//word1 = "aba"
//word2 = "ababa"
//"ababa" starts with aba & endsWith aba -> valid
//count = 0 -> 1 -> 2 -> 3 -> 4

//["a", "aba", "ababa", "aa"]
//        i              j
//word1 = "aba"
//word2 = "aa"
//"aa" not starts with aba & not endsWith aba -> invalid
//count = 0 -> 1 -> 2 -> 3 -> 4

//["a", "aba", "ababa", "aa"]
//                i       j
//word1 = "ababa"
//word2 = "aa"
//"aa" not starts with ababa & not endsWith ababa -> invalid
//count = 0 -> 1 -> 2 -> 3 -> 4

prefixSuffixPairs(words = ["pa","papa","ma","mama"]); //2
//["pa", "papa", "ma", "mama"]
//  i      j 
//word1 = "pa"
//word2 = "papa"
//"papa" starts with pa & endsWith pa -> valid
//count = 0 -> 1

//["pa", "papa", "ma", "mama"]
//  i             j 
//word1 = "pa"
//word2 = "ma"
//"ma" not starts with pa & not endsWith pa -> invalid
//count = 0 -> 1

//["pa", "papa", "ma", "mama"]
//  i                     j 
//word1 = "pa"
//word2 = "mama"
//"mama" not starts with pa & not endsWith pa -> invalid
//count = 0 -> 1

//["pa", "papa", "ma", "mama"]
//         i      j 
//word1 = "papa"
//word2 = "ma"
//"ma" not starts with papa & not endsWith papa -> invalid
//count = 0 -> 1

//["pa", "papa", "ma", "mama"]
//         i              j 
//word1 = "papa"
//word2 = "mama"
//"mama" not starts with papa & not endsWith papa -> invalid
//count = 0 -> 1

//["pa", "papa", "ma", "mama"]
//                i      j 
//word1 = "ma"
//word2 = "mama"
//"mama" starts with papa & endsWith papa -> valid
//count = 0 -> 1 -> 2

prefixSuffixPairs(words = ["abab","ab"]); //0
