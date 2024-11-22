//1461. Check If A String Contains All Binary Codes Of SizeK
//given a binary string s and an integer k
//return true if every binary code of length k is a substring of s
//otherwise, return false

//Approach:
//using hash set
var checkAllBinaryCodes = (s, k) => {
    let m = s.length;
    let set = new Set();

    for (let i = 0; i <= m - k; i++) {
        //checking each k length
        let subStr = s.slice(i, i + k);

        set.add(subStr);
    }

    //the num of unique binary substring = 2^k
    return set.size === Math.pow(2, k);
}
checkAllBinaryCodes(s = "00110110", k = 2); //true
//i = 0 <= 8 - 2 = 6
//subStr = slice from 0 to 0 + 2 = 2 -> 00
//0 0 1 1 0 1 1 0
//---
//set = { 00, }

//i = 1 <= 8 - 2 = 6
//subStr = slice from 1 to 1 + 2 = 3 -> 01
//0 0 1 1 0 1 1 0
//   ---
//set = { 00, 01, }

//i = 2 <= 8 - 2 = 6
//subStr = slice from 2 to 2 + 2 = 4 -> 11
//0 0 1 1 0 1 1 0
//    ---
//set = { 00, 01, 11, }

//i = 3 <= 8 - 2 = 6
//subStr = slice from 3 to 3 + 2 = 5 -> 10
//0 0 1 1 0 1 1 0
//      ---
//set = { 00, 01, 11, 10, }

//i = 4 <= 8 - 2 = 6
//subStr = slice from 4 to 4 + 2 = 6 -> 01
//0 0 1 1 0 1 1 0
//        ---
//set = { 00, 01, 11, 10 } -> already in set

//i = 5 <= 8 - 2 = 6
//subStr = slice from 5 to 5 + 2 = 7 -> 11
//0 0 1 1 0 1 1 0
//          ---
//set = { 00, 01, 11, 10 } -> already in set

//i = 6 <= 8 - 2 = 6
//subStr = slice from 6 to 6 + 2 = 8 -> 10
//0 0 1 1 0 1 1 0
//            ---
//set = { 00, 01, 11, 10 } -> already in set

//set size = 4 === 2^2 = 4
//true

checkAllBinaryCodes(s = "0110", k = 1); //true

checkAllBinaryCodes(s = "0110", k = 2); //false
//i = 0 <= 4 - 2 = 2
//subStr = slice from 0 to 0 + 2 = 2 -> 01
//0 1 1 0 
//---
//set = { 01, }

//i = 1 <= 4 - 2 = 2
//subStr = slice from 1 to 1 + 2 = 3 -> 11
//0 1 1 0 
//  ---
//set = { 01, 11, }

//i = 2 <= 4 - 2 = 2
//subStr = slice from 2 to 2 + 2 = 4 -> 10
//0 1 1 0 
//    ---
//set = { 01, 11, 10 }

//set size = 3 != 2^2 = 4
//false
