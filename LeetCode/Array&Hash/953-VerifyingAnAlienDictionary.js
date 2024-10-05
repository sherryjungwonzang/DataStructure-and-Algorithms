//953. Verifying An Alien Dictionary
//in an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order
//the order of the alphabet is some permutation of lowercase letters

//given a sequence of words written in the alien language, and the order of the alphabet
//return true if and only if the given words are sorted lexicographically in this alien language

//Approach:
//using hash map
var verifyAlienDictionary = (words, order) => {
    let map = new Map();

    //setting position on map
    for (let i = 0; i < order.length; i++) {
        map.set(order[i], i);
    };

    //checking lexicographical order
    for (let i = 1; i < words.length; i++) {
        let prev = words[i - 1];
        let curr = words[i];

        //invalid lexicographical order
        if (map.get(prev[0]) > map.get(curr[0])) return false;

        //special cases - need to compare with non-equal char
        else if (prev[0] === curr[0]) {
            let pointer = -1;

            //need to check non equal position
            while (prev[pointer] === curr[pointer] && pointer < Math.max(curr.length, prev.length)) pointer++;

            //invalid lexicographical cases
            if ((map.get(prev[pointer]) >= 0 && !map.get(curr[pointer])) || map.get(prev[pointer]) > map.get(curr[pointer])) return false;
        }
    };

    return true;
}
verifyAlienDictionary(words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"); //true - As 'h' comes before 'l' in this language, then the sequence is sorted
//map = {
// 'h' => 0,    'n' => 13,
// 'l' => 1,    'o' => 14,
// 'a' => 2,    'p' => 15,
// 'b' => 3,    'q' => 16,
// 'c' => 4,    'r' => 17,
// 'd' => 5,    's' => 18,
// 'e' => 6,    't' => 19,
// 'f' => 7,    'u' => 20,
// 'g' => 8,    'v' => 21,
// 'i' => 9,    'w' => 22,
// 'j' => 10,   'x' => 23,
// 'k' => 11,   'y' => 24,
// 'm' => 12,   'z' => 25
//}

//words = ["h e l l o", "l e e t c o d e"]
//          ^            ^
//         prev         curr
//i = 1
//h:0 < l: 1 -> true

verifyAlienDictionary(words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"); //false - As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted
//map = {
// 'w' => 0,    'j' => 13,
// 'o' => 1,    'k' => 14,
// 'r' => 2,    'm' => 15,
// 'l' => 3,    'n' => 16,
// 'd' => 4,    'p' => 17,
// 'a' => 5,    'q' => 18,
// 'b' => 6,    's' => 19,
// 'c' => 7,    't' => 20,
// 'e' => 8,    'u' => 21,
// 'f' => 9,    'v' => 22,
// 'g' => 10,   'x' => 23,
// 'h' => 11,   'y' => 24,
// 'i' => 12,   'z' => 25
//}

//words = ["w o r d", "w o r l d", "r o w"]
//          ^          ^
//         prev        curr
//i = 1
//w: 0 = w: 0 -> special case
//pointer = -1                                              ->    0                                                  ->  1                                                    ->   2                                                         
//prev[-1] = curr[-1]: T && -1 < max(5, 4) = 5: T -> T     ||   prev[0] = curr[0]: T && 0 < max(5, 4) = 5: T -> T    || prev[1] = curr[1]: T && 1 < max(5, 4) = 5: T -> T     ||  prev[2] = curr[2]: T && 2 < max(5, 4) = 5: T -> T 

//pointer = 3
//prev[3]: "d" != curr[3]: "l": F && 3 < max(5, 4) = 5: T -> F 
//4 > 3 -> false

verifyAlienDictionary( words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"); //false
//The first three characters "app" match, and the second string is shorter (in size.)
//according to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character
//map = {
// 'a' => 0,    'n' => 13,
// 'b' => 1,    'o' => 14,
// 'c' => 2,    'p' => 15,
// 'd' => 3,    'q' => 16,
// 'e' => 4,    'r' => 17,
// 'f' => 5,    's' => 18,
// 'g' => 6,    't' => 19,
// 'h' => 7,    'u' => 20,
// 'i' => 8,    'v' => 21,
// 'j' => 9,    'w' => 22,
// 'k' => 10,   'x' => 23,
// 'l' => 11,   'y' => 24,
// 'm' => 12,   'z' => 25
//}

//words = ["a p p l e", "a p p "]
//          ^            ^
//         prev         curr
//i = 1
//a: 0 = a: 0 -> special case
//pointer = -1                                              ->    0                                                  ->  1                                                    ->   2                                                         
//prev[-1] = curr[-1]: T && -1 < max(5, 3) = 5: T -> T     ||   prev[0] = curr[0]: T && 0 < max(5, 3) = 5: T -> T    || prev[1] = curr[1]: T && 1 < max(5, 3) = 5: T -> T     ||  prev[2] = curr[2]: T && 2 < max(5, 3) = 5: T -> T 

//pointer = 3
//prev[3]: "l" != curr[3]: "undefined": F && 3 < max(5, 3) = 5: T -> F 
//curr[3] = undefined -> false

