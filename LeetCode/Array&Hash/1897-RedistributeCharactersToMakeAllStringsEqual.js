//1897. Redistribute Characters To Make All Strings Equal
//given an array of strings words (0-indexed)
//in one operation, pick two distinct indices i and j, where words[i] is a non-empty string, 
//and move any character from words[i] to any position in words[j]
//return true if you can make every string in words equal using any number of operations, and false otherwise

//Approach:
//using hash map
var redistributeCharacters = (words) => {
    let m = words.length;
    let map = new Map();

    //collecting frequency
    for (let word of words) for (let char of word) map.set(char, (map.get(char) || 0) + 1);

    //checking divisible by total num of words
    for (let val of map.values()) if (val % m !== 0) return false;

    return true;
}
//TC: O(n * k)
//SC: O(1)
redistributeCharacters(["abc","aabc","bc"]); //true
//["a b c", "a a b c", "b c"]
//map = {
//  a: 3,
//  b: 3,
//  c: 3
//}

//starting from a: 3 -> 3 % 3 = 0
//              b: 3 -> 3 % 3 = 0
//              c: 3 -> 3 % 3 = 0
//true

redistributeCharacters(words = ["ab","a"]); //false
//["a b", "a"]
//map = {
//  a: 2,
//  b: 1
//}

//starting from a: 2 -> 2 % 2 = 0
//              b: 1 -> 1 % 2 != 0
//false
