//290. Word Pattern
//given a 'pattern' and a string 's'
//find if s follows the same pattern

//here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s
//specifically:
//each letter in pattern maps to exactly one unique word in s
//each unique word in s maps to exactly one letter in pattern
//no two letters map to the same word, and no two words map to the same letter

//Approach:
//using two hash maps for tracking
var wordPattern = (pattern, s) => {
    //two hash maps
    let charToWord = new Map();  //mapping from pattern to words
    let wordToChar = new Map(); //mapping from words to pattern
    let words = s.split(' ');
    let index = 0; //track curr position

    //iterating
    for (let word of words) {
        //base case
        if (index === pattern.length) return false;

        let currChar = pattern[index];

        //setting map
        if (!charToWord.has(currChar) && !wordToChar.has(word)) {
            charToWord.set(currChar, word);
            wordToChar.set(word, currChar);
        } else { //comparinig
            if (charToWord.get(currChar) !== word || wordToChar.get(word) !== currChar) return false;
        }

        index++;
    }

    return index === pattern.length;
}
//TC: O(n) - the length of the string
//SC: O(k) - the number of unique chars in pattern and unique words in s
wordPattern("abba", "dog cat cat dog"); //true
//words = [ "dog", "cat", "cat", "dog" ]
//           ^

//index = 0 || word = "dog"
//currChar = "a"
//charToWord = { a: "dog" }
//wordToChar = { "dog": "a" }

//words = [ "dog", "cat", "cat", "dog" ]
//                   ^
//index = 1 || word = "cat"
//currChar = "b"
//charToWord = { a: "dog", b: "cat" }
//wordToChar = { "dog": a , "cat": b }

//words = [ "dog", "cat", "cat", "dog" ]
//                          ^
//index = 2 || word = "cat"
//currChar = "b"
//cat === cat && b === b -> true

//words = [ "dog", "cat", "cat", "dog" ]
//                                 ^
//index = 3 || word = "dog"
//currChar = "a"
//dog === dog && a === a -> true

wordPattern("abba", "dog cat cat fish"); //false
//words = [ "dog", "cat", "cat", "fish" ]
//           ^
//index = 0 || word = "dog"
//currChar = "a"
//charToWord = { a: "dog" }
//wordToChar = { "dog": "a" }

//words = [ "dog", "cat", "cat", "fish" ]
//                   ^
//index = 1 || word = "cat"
//currChar = "b"
//charToWord = { a: "dog", b: "cat" }
//wordToChar = { "dog": a , "cat": b }

//words = [ "dog", "cat", "cat", "fish" ]
//                          ^
//index = 2 || word = "cat"
//currChar = "b"
//cat === cat && b === b -> true

//words = [ "dog", "cat", "cat", "fish" ]
//                                  ^
//index = 3 || word = "fish"
//currChar = "a"
//wordToChar does not have 'fish'
//dog != fish -> false

wordPattern("aaaa", "dog cat cat dog"); //false
//words = [ "dog", "cat", "cat", "dog" ]
//           ^
//index = 0 || word = "dog"
//currChar = "a"
//charToWord = { a: "dog" }
//wordToChar = { "dog": "a" }

//words = [ "dog", "cat", "cat", "dog" ]
//                   ^
//index = 1 || word = "cat"
//currChar = "a"
//dog != cat -> false

