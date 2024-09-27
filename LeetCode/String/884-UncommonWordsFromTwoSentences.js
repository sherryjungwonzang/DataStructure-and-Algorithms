//884. Uncommon Words From Two Sentences
//a sentence is a string of single-space separated words where each word consists only of of lowercase letters
//a word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence
//given two sentences s1 and s2
//return a list of all the uncommon words - you may return the answer in any order

//Approach:
//using hash map
var uncommonWords = (s1, s2) => {
    let words = [...s1.split(' '), ...s2.split(' ')];
    let map = {};
    let res = [];

    //hash map
    for (let word of words) {
        if (word in map) map[word] += 1;
        else map[word] = 1;
    }

    //find uncommon words
    for (let i in map) {
        //uncommon words
        if (map[i] === 1) res.push(i);
    }

    return res;
}
//TC: O(n + m)
//SC: O(n + m)
uncommonWords(s1 = "this apple is sweet", s2 = "this apple is sour"); //["sweet","sour"]
//words = [ 'this', 'apple', 'is', 'sweet','this', 'apple', 'is', 'sour' ]

//map = {
//  this: 2
//  apple: 2
//  is: 2
//  sweet: 1
//  sour: 1
//}

//sweet and sour is 1 -> res = ['sweet', 'sour']

uncommonWords(s1 = "apple apple", s2 = "banana"); //["banana"]
//words = [ 'apple', 'apple', 'banana' ]

//map = {
//  apple: 2
//  banana: 1
//}

//banana is 1 -> res = ['banana']

