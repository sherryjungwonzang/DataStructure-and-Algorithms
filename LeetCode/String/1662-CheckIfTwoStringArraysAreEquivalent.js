//1662. Check If Two String Arrays Are Equivalent
//given two string arrays  word1 and word2
//return true if the two arrays represent the same string and false otherwise
//a string is represented by an array if the array elements concatenated in order forms the string
var twoStringArraysAreEqual = (word1, word2) => {
    let str1 = word1.join('');
    let str2 = word2.join('');

    return str1 === str2;
}
twoStringArraysAreEqual(word1 = ["ab", "c"], word2 = ["a", "bc"]); //true
//word1 represents string "ab" + "c" -> "abc"
//word2 represents string "a" + "bc" -> "abc"

//str1 = abc
//str2 = abc
//str1 = str2

twoStringArraysAreEqual(word1 = ["a", "cb"], word2 = ["ab", "c"]); //false
//str1 = acb
//str2 = abc
//str1 != str2

twoStringArraysAreEqual(word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]); //true
