//1967. Number Of Strings That Appear As Substrings In Word
//given an array of strings patterns and a string word
//return the number of strings in patterns that exist as a substring in word
//a substring is a contiguous sequence of characters within a string
var numOfStrings = (patterns, word) => {
    let res = 0;

    for (let pattern of patterns) {
        if (word.includes(pattern)) res++;
    }

    return res;
}
numOfStrings(patterns = ["a","abc","bc","d"], word = "abc"); //3
//["a", "abc", "bc", "d"]
//  ^
//abc includes a -> res = 0 -> 1

//["a", "abc", "bc", "d"]
//        ^
//abc includes abc -> res = 0 -> 1 -> 2

//["a", "abc", "bc", "d"]
//               ^
//abc includes bc -> res = 0 -> 1 -> 2 -> 3

//["a", "abc", "bc", "d"]
//                    ^
//abc not includes d -> res = 0 -> 1 -> 2 -> 3 -> 3

//3

numOfStrings(patterns = ["a","b","c"], word = "aaaaabbbbb"); //2
