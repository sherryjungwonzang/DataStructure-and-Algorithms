//1207. Unique Number Of Occurences
//given an array of integers arr
//return true if the number of occurrences of each value in the array is unique or false otherwise

//Approach:
//using hashmap and set
var uniqueNumOccurences = (arr) => {
    let freq = new Map();

    //to collect frequency
    for (let num of arr) freq.set(num, (freq.get(num) || 0) + 1);

    //only frequency
    let val = new Set(freq.values());

    return freq.size === val.size;
}
//TC: O(n)
//SC: O(n)
uniqueNumOccurences([1,2,2,1,1,3]); //true
//[1, 2, 2, 1, 1, 3]
// ^
//freq = {                  val = { 3, 2, 1 }
//  1: 1 -> 2 -> 3
//  2: 1 -> 2
//  3: 1
//}

//3 = 3: True

uniqueNumOccurences([1,2]); //false
//[1, 2]
// ^
//freq = {                  val = { 1 }
//  1: 1
//  2: 1
//}

//2 != 1: False

uniqueNumOccurences([-3,0,1,-3,1,1,1,-3,10,0]); //true
