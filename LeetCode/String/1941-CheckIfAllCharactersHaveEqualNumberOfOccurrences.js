//1941. Check If All Characters Have Equal Number Of Occurrences
//Given a string s
//return true if s is a good string, or false otherwise
//a string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency)

//Approach:
//using hash map
var equalOccurrences = (s) => {
    let frequency = {};

    //checking frequency
    for (let char of s) frequency[char] = frequency[char] + 1 || 1;

    //checking same occurences
    var freq = frequency[s[0]];

    for (let char in frequency) {
        if (frequency[char] && frequency[char] != freq) return false;
    }
    
    return true;
}
equalOccurrences("abacbc"); //true
//a b a c b c
//^
//frequency = {
//  a: 1 -> 2     
//  b: 1 -> 2
//  c: 1 -> 2
//}

//freq = 2
//frequency[a] = 2 = freq -> true
//frequency[b] = 2 = freq -> true
//frequency[c] = 2 = freq -> true
//true

equalOccurrences("aaabb"); //false
//a a a b b
//^
//frequency = {
//  a: 1 -> 2 -> 3     
//  b: 1 -> 2
//}

//freq = 3
//frequency[a] = 3 = freq -> true
//frequency[b] = 2 != freq -> false
//false
