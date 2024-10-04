//2255.Count Prefixes Of Given String
//given a string array 'words' and a string's'
//where words[i] and s comprise only of lowercase English letters
//return the number of strings in words that are a prefix of s
var countPrefixes = (words, s) => {
    let count = 0;

    //traversing
    for (let word of words) {
        if (s.startsWith(word)) count++;
    }

    return count;
}
countPrefixes(words = ["a","b","c","ab","bc","abc"], s = "abc"); //3 - "a", "ab", and "abc"
//startsWith(abc) = "a"

//["a", "b", "c", "ab", "bc", "abc"]
//  ^
//"a" = "a" -> count = 0 -> 1

//["a", "b", "c", "ab", "bc", "abc"]
//       ^
//"a" != "b"

//["a", "b", "c", "ab", "bc", "abc"]
//            ^
//"a" != "c"

//["a", "b", "c", "ab", "bc", "abc"]
//                  ^
//"a" = "a" -> count = 0 -> 1 -> 2

//["a", "b", "c", "ab", "bc", "abc"]
//                        ^
//"a" != "b"

//["a", "b", "c", "ab", "bc", "abc"]
//                              ^
//"a" = "a" -> count = 0 -> 1 -> 2 -> 3

countPrefixes(words = ["a","a"], s = "aa"); //2 - Both of the strings are a prefix of s
//startsWith(abc) = "a"

//["a", "a"]
//  ^
//"a" = "a" -> count = 0 -> 1

//["a", "a"]
//       ^
//"a" = "a" -> count = 0 -> 1 -> 2
