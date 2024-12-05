//2451. Odd String Difference
//given an array of equal-length strings words
//assume that the length of each string is n
//cach string words[i] can be converted into a difference integer array difference[i] of length n - 1 where difference[i][j] = words[i][j+1] - words[i][j] where 0 <= j <= n - 2
//note that the difference between two letters is the difference between their positions in the alphabet i.e. the position of 'a' is 0, 'b' is 1, and 'z' is 25
//for example, for the string "acb", the difference integer array is [2 - 0, 1 - 2] = [2, -1]
//all the strings in words have the same difference integer array, except one. You should find that string
//return the string in words that has different difference integer array

//Approach:
//using hash map
var oddStringDifference = (words) => {
    let map = {};

    //traversing words array
    for (let i = 0; i < words.length; i++) {
        let diff = "";

        //traversing each word
        for (let j = 0; j < words[i].length - 1; j++) {
            //string difference
            diff = diff + "." + String(words[i].charCodeAt(j + 1) - words[i].charCodeAt(j));
        }

        //filling the hash map
        if (map[diff]) map[diff].push(i);
        else map[diff] = [i];
    }

    //traversing hash map
    for (let [key, val] of Object.entries(map)) {
        //difference integer array
        if (val.length === 1) return words[val[0]];
    }
}
oddStringDifference(["adc","wzy","abc"]); //"abc"
//["adc", "wzy", "abc"]
//   ^
//words = a d c
//        ^
//diff = "" + . + charCodeAt(d - a) = "" + . + 3 - 0 = .3

//words = a d c
//          ^
//diff = "" + . + charCodeAt(c - d) = "" + . + 2 - 3 = .-1
//map = {
//  '.3, .-1': [0]
//}

//["adc", "wzy", "abc"]
//          ^
//words = w z y
//        ^
//diff = "" + . + charCodeAt(z - w) = "" + . + 25 - 22 = .3

//words = w z y
//          ^
//diff = "" + . + charCodeAt(y - z) = "" + . + 24 - 25 = .-1
//map = {
//  '.3, .-1': [0, 1]
//}

//["adc", "wzy", "abc"]
//                 ^
//words = a b c
//        ^
//diff = "" + . + charCodeAt(b - a) = "" + . + 1 - 0 = .1

//words = a b c
//          ^
//diff = "" + . + charCodeAt(c - b) = "" + . + 2 - 1 = .1
//map = {
//  '.3, .-1': [0, 1],
//  '.1, .11': [2]
//}

//from map, [key, val] = [ '.3, .-1': [0, 1], '.1, .11': [2] ]
//                                                        ^     -> val length = 1
//[2] = "abc"

oddStringDifference(["aaa","bob","ccc","ddd"]); //"bob"
