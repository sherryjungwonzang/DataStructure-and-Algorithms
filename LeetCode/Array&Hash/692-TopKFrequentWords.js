//692. Top K Frequent Words
//given an array of strings words and an integer k
//return the k most frequent strings
//return the answer sorted by the frequency from highest to lowest
//sort the words with the same frequency by their lexicographical order

//Approach:
//using hash map and sorting
var topKFrequentWords = (words, k) => {
    let map = new Map();
    let bucket = [];
    let res = [];

    //frequency checking
    for (let word of words) map.set(word, (map.get(word) || 0) + 1);

    //by frequency, adding to bucket
    for (let [word, freq] of map) {
        if (bucket[freq] === undefined) bucket[freq] = [word];
        else bucket[freq].push(word);
    }

    //sorting
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i] === undefined) continue;

        res.push(...bucket[i].sort());

        if (res.length >= k) return res.slice(0, k);
    }
}
topKFrequentWords(words = ["i","love","leetcode","i","love","coding"], k = 2); //["i","love"]
//["i", "love", "leetcode", "i", "love", "coding"]

//map = {
//  i: 1 -> 2
//  love: 1 -> 2    -> bucket = [     , [leetcode, coding], [i, love]  ]
//  leetcode: 1                     0            1              2     
//  coding: 1
//}
//                                                              ^
//res = [i, love] -> length = 2 = k

topKFrequentWords(words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4); //["the","is","sunny","day"]
//["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"]

//map = {
//  the: 1 -> 2 -> 3 -> 4
//  day: 1                      -> bucket = [     , [day], [sunny], [is], [the] ]
//  is: 1 -> 2 -> 3                            0       1      2       3     4
//  summy: 1 -> 2
//}
//                                                                          ^

//res = [ the, is, sunny, day ] -> length = k
