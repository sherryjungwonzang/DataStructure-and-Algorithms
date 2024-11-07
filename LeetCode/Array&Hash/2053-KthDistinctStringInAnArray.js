//2053. Kth Distinct String In An Array
//a distinct string is a string that is present only once in an array
//given an array of strings arr, and an integer k
//return the kth distinct string present in arr
//if there are fewer than k distinct strings, return an empty string ""
//note that the strings are considered in the order in which they appear in the array

//Approach:
//using hash map
var kthDistinctString = (arr, k) => {
    let map = {};
    let res = [];

    //checking occurrence
    arr.forEach(char => map[char] = map[char] + 1 || 1);

    //store distinct values in order
    for (let [key, val] of Object.entries(map)) {
        //find distinct string
        if (val === 1) res.push(key);
    }

    return res[k - 1] || "";
}
kthDistinctString(arr = ["d","b","c","b","c","a"], k = 2); //"a"
//["d", "b", "c", "b", "c", "a"]
//  ^
//map = {
//  d: 1,           <-
//  b: 1 -> 2,
//  c: 1 -> 2,
//  a: 1,           <-
//}

//res = [ d, a ]
//           ^  : k - 1 = 1
//'a'

kthDistinctString(arr = ["aaa","aa","a"], k = 1); //"aaa"

kthDistinctString(arr = ["a","b","a"], k = 3); //""
//["a", "b", "a"]
//  ^
//map = {
//  a: 1 -> 2,
//  b: 1         <-
//}

//res = [ b ]
//            ^  : k - 1 = 2
//""
