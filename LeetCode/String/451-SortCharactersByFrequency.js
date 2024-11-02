//451. Sort Characters By Frequency
//given a string s
//sort it in decreasing order based on the frequency of the characters
//the frequency of a character is the number of times it appears in the string
//return the sorted string. If there are multiple answers, return any of them

//Approach:
//using hash map
var frequencySort = (s) => {
    let frequency = new Map();
    let res = '';

    //collecting frequency
    for (let char of s) frequency.set(char, (frequency.get(char) || 0) + 1);

    //sorting by frequency
    let sorted = new Map([...frequency.entries()].sort((a, b) => b[1] - a[1]));

    //repeating string
    for (let [char, freq] of sorted.entries()) res += char.repeat(freq);

    return res;
}
//TC: O(n logn)
//SC: O(n)
frequencySort("tree"); //"eert" or "eetr"
//frequency = {                     sorted = {
//  t: 1,                               e: 2,
//  r: 1,           -> sorting:         t: 1,
//  e: 2,                               r: 1,
//}                                 }

//res = '' -> eetr

frequencySort("cccaaa"); //"aaaccc" or "cccaaa"
//frequency = {                     sorted = {
//  c: 3,                               c: 3,
//  a: 3,           -> sorting:         a: 3,
//}                                 }

//res = '' -> cccaaa

frequencySort("Aabb"); //"bbAa" or "bbaA"
//frequency = {                     sorted = {
//  A: 1,                               b: 2,
//  a: 1,           -> sorting:         A: 1,
//  b: 2,                               a: 1,
//}                                 }

//res = '' -> bbAa
