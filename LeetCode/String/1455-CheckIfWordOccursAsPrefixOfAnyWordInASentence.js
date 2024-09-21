//1455. Check If Word Occurs As Prefix Of Any Word In A Sentence
//given a sentence that consists of some words separated by a single space and a searchWord
//check if searchWord is a prefix of any word in sentence
//return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word
//if searchWord is a prefix of more than one word,
//return the index of the first word (min index)
//if there is no such word return -1
//a prefix of a string s is any leading contiguous substring of s

//Approach:
//using startsWith()
var checkPrefixAnyWord = (sentence, searchWord) => {
    let word = sentence.split(' ');

    for (let i = 0; i < word.length; i++) {
        if (word[i].startsWith(searchWord)) return i + 1;
    }

    return -1;
}
checkPrefixAnyWord(sentence = "i love eating burger", searchWord = "burg"); //4
//word = "i", "love", "eating", "burger"
//        ^
//i not startsWith burg

//word = "i", "love", "eating", "burger"
//               ^
//i not startsWith burg

//word = "i", "love", "eating", "burger"
//                        ^
//i not startsWith burg

//word = "i", "love", "eating", "burger"
//                                 ^
//i startsWith burg
//3 + 1 = 4

checkPrefixAnyWord(sentence = "this problem is an easy problem", searchWord = "pro"); //2
//word = "this", "problem", "is", "an", "easy", "problem"
//          ^
//i not startsWith pro

//word = "this", "problem", "is", "an", "easy", "problem"
//                  ^
//i startsWith pro
//1 + 1 = 2

checkPrefixAnyWord(sentence = "i am tired", searchWord = "you"); //-1
