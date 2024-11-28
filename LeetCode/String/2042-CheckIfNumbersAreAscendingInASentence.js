//2042. Check If Numbers Are Ascending In A Sentence
//a sentence is a list of tokens separated by a single space with no leading or trailing spaces
//every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters
//for example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" and "4" are numbers and the other tokens such as "puppy" are words
//given a string s representing a sentence
//you need to check if all the numbers in s are strictly increasing from left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s)
//return true if so, or false otherwise
var ascendingSentence = (s) => {
    let value = s.split(' ');
    let prev = Number.MIN_VALUE;

    for (let val of value) {
        let num = parseInt(val);

        //not-number
        if (!num) continue;

        //not ascending
        if (prev >= num) return false;

        //updating
        prev = num;
    } 

    return true;
}
ascendingSentence("1 box has 3 blue 4 red 6 green and 12 yellow marbles"); //true
//"1 box has 3 blue 4 red 6 green and 12 yellow marbles"
//prev = -900..

//value = [1, box, has, 3, blue, 4, red, 6, green, and, 12, yellow, marbles]
//         ^
//parseInt(1) = 1 > prev
//prev = -900.. -> 1

//value = [1, box, has, 3, blue, 4, red, 6, green, and, 12, yellow, marbles]
//                      ^
//parseInt(3) = 3 > prev
//prev = -900.. -> 1 -> 3

//value = [1, box, has, 3, blue, 4, red, 6, green, and, 12, yellow, marbles]
//                               ^ 
//parseInt(4) = 4 > prev
//prev = -900.. -> 1 -> 3 -> 4

//value = [1, box, has, 3, blue, 4, red, 6, green, and, 12, yellow, marbles]
//                                       ^ 
//parseInt(6) = 6 > prev
//prev = -900.. -> 1 -> 3 -> 4 -> 6

//value = [1, box, has, 3, blue, 4, red, 6, green, and, 12, yellow, marbles]
//                                                       ^ 
//parseInt(12) = 12 > prev
//prev = -900.. -> 1 -> 3 -> 4 -> 6 -> 12

//true

ascendingSentence("hello world 5 x 5"); //false

ascendingSentence("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"); //false
