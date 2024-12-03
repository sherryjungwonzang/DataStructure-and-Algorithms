//2047. Number Of Valid Words In A Sentence
//a sentence consists of lowercase letters ('a' to 'z'), digits ('0' to '9'), hyphens ('-'), punctuation marks ('!', '.', and ','), and spaces (' ') only
//each sentence can be broken down into one or more tokens separated by one or more spaces ' '

//a token is a valid word if all three of the following are true:
//it only contains lowercase letters, hyphens, and/or punctuation (no digits)
//there is at most one hyphen '-'. If present, it must be surrounded by lowercase characters ("a-b" is valid, but "-ab" and "ab-" are not valid)
//there is at most one punctuation mark. If present, it must be at the end of the token ("ab,", "cd!", and "." are valid, but "a!b" and "c.," are not valid)
//examples of valid words include "a-b.", "afad", "ba-c", "a!", and "!"

//given a string sentence, 
//return the number of valid words in sentence
var validWords = (sentence) => {
    let words = sentence.split(' ');
    let count = 0;

    for (let word of words) {
        if (validate(word) === true) count++;
    }

    //checking validation
    function validate(word) {
        let hyphens = 0;

        //base case
        if (word.length === 0) return false;
        if (word.at(0) === '-' || word.at(-1) === '-') return false;

        for (let i = 0; i < word.length; i++) {
            //invalid - including digits
            if (word[i] >= '0' && word[i] <= '9') return false;

            //checking punctuation
            if (i < word.length - 1) {
                if (word[i] === "!" || word[i] === "." || word[i] === ",") return false;
            }

            //'-' need to set between chars
            if (word[i] === '-') {
                if (word[i - 1] > 'z' || word[i - 1] < 'a') return false;
                if (word[i + 1] > 'z' || word[i + 1] < 'a') return false;

                hyphens++;
            }

        }
        
        if (hyphens > 1) return false;

        return true;
    };

    return count;
}
validWords("cat and  dog"); //3 - "cat", "and", and "dog"
//"cat and  dog"
//words = [cat, and, dog]
//          ^
//c a t = no digits/hyphens/puntucations -> True 
//count = 0 -> 1

//words = [cat, and, dog]
//              ^
//a n d = no digits/hyphens/puntucations -> True 
//count = 0 -> 1 -> 2

//words = [cat, and, dog]
//                    ^
//d o g = no digits/hyphens/puntucations -> True
//count = 0 -> 1 -> 2 -> 3

validWords("!this  1-s b8d!"); //0
//"!this  1-s b8d!"
//words = [ !this  1-s b8d! ]
//            ^
// ! t h i s
// ^        -> punctuation is not in the end => False
//count = 0 -> 0

//words = [ !this  1-s b8d! ]
//                  ^
// 1 - s
// ^        -> digits => False
//count = 0 -> 0 -> 0

//words = [ !this  1-s b8d! ]
//                      ^
// b 8 d !
// ^        -> no digits/hyphens/puntucations -> True
//   ^        -> digits => False
//count = 0 -> 0 -> 0 -> 0

validWords("alice and  bob are playing stone-game10"); //5 - "alice", "and", "bob", "are", and "playing"
