//1684. Count The Number Of Consistent Strings
//given a string 'allowed' consisting of distinct characters and an array of strings 'words'
//a string is consistent if all characters in the string appear in the string allowed
//return the number of consistent strings in the array words
var numConsistentStrings = (allowed, words) => {
    let count = 0;

    //traversing
    words.forEach(word => {
        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            //checking allowed
            if (!allowed.includes(char)) break; //non-consistent strings
            else if (i === word.length - 1) count++; //consistent strings
        }
    });

    return count;
}
numConsistentStrings(allowed = "ab", words = ["ad","bd","aaab","baa","badab"]); //2 - aaab, baa
//["ad", "bd", "aaab", "baa"," badab"]
//  ^
//starting with "a d"
//               ^   -> includes allowed
//                 ^ -> not including allowed
//count = 0

//"b d"
// ^   -> not including allowed
//count = 0

//"a a a b"
// ^   -> includes allowed
//   ^ -> includes allowed
//     ^ -> includes allowed
//       ^ -> includes allowed
//count = 0 -> 1

//"b a a"
// ^   -> includes allowed
//   ^ -> includes allowed
//     ^ -> includes allowed
//count = 0 -> 1 -> 2

//"b a d a b"
// ^   -> includes allowed
//   ^ -> includes allowed
//     ^ -> not includes allowed
//count = 0 -> 1 -> 2

numConsistentStrings(allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]); //7

numConsistentStrings(allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]); //4 - cc, acd, ac, d
