//1961. Check If String Is A Prefix Of Array
//given a string s and an array of strings workds
//determine whether s is a prefix string os words
//a string s is a prefix string of words
//is s can be made by concatenating the first k strings in words for some positive k no larger than words.length
//return true if a s is a prefix string of words, or false otherwise
var isPrefixString = (s, words) => {
    let res = "";

    for (let word of words) {
        //checking string
        res += word;

        //checking with prefix
        if (res === s) return true;
    }

    return false;
}
isPrefixString(s = "iloveleetcode", words = ["i","love","leetcode","apples"]); //true
//["i", "love", "leetcode", "apples"]
//  ^
//res = "" -> "i"
//i != iloveleetcode

//["i", "love", "leetcode", "apples"]
//        ^
//res = "" -> "i" -> "ilove"
//ilove != iloveleetcode

//["i", "love", "leetcode", "apples"]
//                  ^
//res = "" -> "i" -> "ilove" -> "iloveleetcode" 
//iloveleetcode = iloveleetcode
//true

isPrefixString(s = "iloveleetcode", words = ["apples","i","love","leetcode"]); //false
//["apples", "i", "love", "leetcode"]
//    ^
//res = "" -> "apples"
//apples != iloveleetcode

//["apples", "i", "love", "leetcode"]
//            ^
//res = "" -> "apples" -> "applesi"
//applesi != iloveleetcode

//["apples", "i", "love", "leetcode"]
//                  ^
//res = "" -> "apples" -> "applesi" -> "applesilove"
//applesilove != iloveleetcode

//["apples", "i", "love", "leetcode"]
//                             ^
//res = "" -> "apples" -> "applesi" -> "applesilove" -> "applesiloveleetcode"
//applesiloveleetcode != iloveleetcode
//false
