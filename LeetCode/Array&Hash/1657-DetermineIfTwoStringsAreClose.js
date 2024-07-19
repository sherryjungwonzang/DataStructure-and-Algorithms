//1657. Determine If Two Strings Are Close
//two strings are considered close if you can attain one from the other using the following operations:
//Operation1: Swap any two existing characters
//Operation2: transform every occurence of one existing character into another existing character and do the same with the other chars

//you can use the operations on either string as many times as necessary
//given two strings, word1 and word2
//return true if word1 and word2 are close and false otherwise

//Approach:
//using Array and frequency
var closeStrings = (word1, word2) => {
    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);

    //filling the frequency
    for (let i = 0; i < word1.length; i++) freq1[word1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    for (let i = 0; i < word2.length; i++) freq2[word2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    for (let i = 0; i < 26; i++) {
        if ( (freq1[i] > 0 && freq2[i] === 0) || (freq2[i] > 0 && freq1[i] === 0) ) return false;
    }

    //sorting
    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);
    for (let i = 0; i < 26; i++) {
        if (freq1[i] !== freq2[i]) return false;
    }

    return true;
}
closeStrings("abc", "bca");  //true
//You can attain word2 from word1 in 2 operations.
//Apply Operation 1: "abc" -> "acb"
//Apply Operation 1: "acb" -> "bca"

//freq1 = [0, 0, 0 ... 0]
//freq2 = [0, 0, 0 ... 0]

//"a b c", "b c a"
// ^        ^
//a - a = 0 || b - a = 1
//freq1 = [1, 0, 0 ... 0]
//freq2 = [0, 1, 0 ... 0]

//"a b c", "b c a"
//   ^        ^
//b - a = 1 || c - a = 2
//freq1 = [1, 1, 0 ... 0]
//freq2 = [0, 1, 1 ... 0]

//"a b c", "b c a"
//     ^        ^
//c - a = 2 || a - a = 0
//freq1 = [1, 1, 1 ... 0]
//freq2 = [1, 1, 1 ... 0]

//sorting
//freq1 = [0, ... 1, 1, 1]
//freq2 = [0, ... 1, 1, 1]
//true

closeStrings("a", "aa"); //false
//freq1 = [0, 0, 0 ... 0]
//freq2 = [0, 0, 0 ... 0]

//"a", "a a"
// ^      ^
//a - a = 0 || a - a = 0
//freq1 = [1, 0, 0 ... 0]
//freq2 = [1, 0, 0 ... 0]

//"a", "a a"
// ^      ^
//| a - a = 0
//freq1 = [1, 0, 0 ... 0]
//freq2 = [2, 0, 0 ... 0]

//sorting
//freq1 = [0, ... 0, 0, 1]
//freq2 = [0, ... 0, 0, 2]
//false

closeStrings("cabbba", "abbccc"); //true
//You can attain word2 from word1 in 3 operations.
//Apply Operation 1: "cabbba" -> "caabbb"
//Apply Operation 2: "caabbb" -> "baaccc"
//Apply Operation 2: "baaccc" -> "abbccc"
