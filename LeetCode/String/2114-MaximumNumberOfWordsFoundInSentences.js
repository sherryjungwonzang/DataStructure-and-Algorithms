//2114. Maximum Number Of Words Found In Sentences
//a sentence is a list of words that are separated by a single space with no leading or trailing spaces
//given an array of strings sentences, where each sentences[i] represents a single sentence
//return the maximum number of words that appear in a single sentence
var maxNumWords = (sentences) => {
    let max = 0;

    for (let sentence of sentences) {
        //count the num of word
        let words = sentence.split(' ');

        //updating
        max = Math.max(max, words.length);
    }

    return max;
}
maxNumWords(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]); //6 - "this is great thanks very much"
//["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
//              ^
//word = [ alice, and, bob, love, leetcode ] -> length: 5
//max = 0 -> max(0, 5) = 5

//["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
//                                      ^
//word = [ i, think, so, too, ] -> length: 4
//max = 0 -> max(0, 5) = 5 -> max(5, 4) = 5

//["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
//                                      ^
//word = [ i, think, so, too, ] -> length: 4
//max = 0 -> max(0, 5) = 5 -> max(5, 4) = 5

//["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
//                                                                   ^
//word = [ this, is, great, thanks, very, much ] -> length: 6
//max = 0 -> max(0, 5) = 5 -> max(5, 4) = 5 -> max(5, 6) = 6

maxNumWords(["please wait", "continue to fight", "continue to win"]); //3 - "continue to fight", "continue to win"
