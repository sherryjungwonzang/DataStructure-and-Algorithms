//2085. Count Common Words With One Occurrence
//given two string arrays words1 and words2
//return the number of strings that appear exactly once in each of the two arrays

//Approach:
//using hash map
var oneOccurrence = (words1, words2) => {
    let freq1 = new Map();
    let freq2 = new Map();
    let count = 0;

    //checking frequency
    for (let word of words1) freq1.set(word, freq1.get(word) + 1 || 1);
    for (let word of words2) freq2.set(word, freq2.get(word) + 1 || 1);

    //checking one occurrence
    for (let word of words1) {
        if (freq1.get(word) === 1 && freq2.get(word) === 1) count++;
    }

    return count;
}
oneOccurrence(words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]); //2 - amazing, leetcode
//freq1 = {                 freq2 = { 
//  leetcode: 1                   amazing: 1
//  is: 1 -> 2                    leetcode: 1
//  amazing: 1                      is: 1 
//  as: 1                   }
//}
 
//leetcode is "1" on both freq1 and freq2
//count = 0 -> 1

//amazing is "1" on both freq1 and freq2
//count = 0 -> 1 -> 2

oneOccurrence(words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]); //0

oneOccurrence(words1 = ["a","ab"], words2 = ["a","a","a","ab"]); //1 - a
//freq1 = {            freq2 = { 
//  a: 1                   a: 1 -> 2 -> 3
//  ab:1                  ab: 1
//}                     }
 
//ab is "1" on both freq1 and freq2
//count = 0 -> 1
