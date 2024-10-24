//1624. Largest Substring Between Two Equal Characters
//given a string s
//return the length of the longest substring between two equal characters, excluding the two characters
//if there is no such substring return -1.
//a substring is a contiguous sequence of characters within a string

//Approach:
//using hash map
var largestSubstring = (s) => {
    let res = -1;
    let firstIndex = new Map();

    //traversing
    for (let i = 0; i < s.length; i++) {
        //calculating the length between equal characters
        if (firstIndex.has(s[i])) res = Math.max(res, i - firstIndex.get(s[i]) - 1);
        else firstIndex.set(s[i], i);
    }

    return res;
}
//TC: O(n)
//SC: O(1)
largestSubstring("acbzxya"); //5 - cbzxy
//a c b z x y a
//^
//firstIndex = {
//  a: 0,
//}

//a c b z x y a
//  ^
//firstIndex = {
//  a: 0,
//  c: 1,
//}

//a c b z x y a
//    ^
//firstIndex = {
//  a: 0,
//  c: 1,
//  b: 2,
//}


//a c b z x y a
//      ^
//firstIndex = {
//  a: 0,
//  c: 1,
//  b: 2,
//  z: 3,
//}

//a c b z x y a
//        ^
//firstIndex = {
//  a: 0,
//  c: 1,
//  b: 2,
//  z: 3,
//  x: 4,
//}

//a c b z x y a
//          ^
//firstIndex = {
//  a: 0,
//  c: 1,
//  b: 2,
//  z: 3,
//  x: 4,
//  y: 5,
//}

//a c b z x y a
//            ^
//firstIndex = {
//  a: 0,
//  c: 1,
//  b: 2,
//  z: 3,
//  x: 4,
//  y: 5,
//}
//'a' is already exist -> updates res
//res = -1 -> max(-1, 6 - 1) = 5

largestSubstring("aa"); //0

largestSubstring("abca"); //2 - bc

