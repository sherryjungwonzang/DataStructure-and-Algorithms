//1974. Minimum Time To Type Word Using Special Typewriter
//there is a special typerwriter with lowercase English letters 'a' to 'z' arranged in a circle with a pointer
//a character can only be typed if the pointer is pointing to that character
//the pointer is initially pointing to the character 'a'

//each second, you may perform one of the following operations:
//move the pointer one character counterclockwise or clockwise
//type the character the pointer is currently on

//given a string word
//return the min number of seconds to type out the characters in word

//Approach:
//using charCodeAt()
var minTimeToType = (word) => {
    let first = 'a'.charCodeAt(0); //97
    let last = 'z'.charCodeAt(0); //122
    let char = first;
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        let curr = word.charCodeAt(i);
        let max = Math.max(char, curr);
        let min = Math.min(char, curr);

        //checking counterclockwise and clockwise
        count += Math.min(last - max + min - first + 1, max - min) + 1;

        //resetting
        char = curr;
    }

    return count;
}
minTimeToType("abc"); //5
//first = 97, last = 122

//"a b c"
// ^
//max: max(97, 97) = 97
//min: max(97, 97) = 97
//counterclockwise: 122 - 97 + 97 - 97 + 1 = 26
//clockwise: 97 - 97 = 0
//a = 97 -> itself so type 'a'
//char = 97 -> 97
//count = 0 -> 1

//"a b c"
//   ^
//max: max(97, 98) = 98
//min: max(97, 98) = 97
//counterclockwise: 122 - 98 + 97 - 97 + 1 = 25
//clockwise: 98 - 97 = 1
//b = 98 -> move from 'a' to 'b': clockwise
//char = 97 -> 97 -> 98
//count = 0 -> 1 -> 3

//"a b c"
//     ^
//max: max(97, 99) = 99
//min: max(97, 99) = 97
//counterclockwise: 122 - 99 + 97 - 97 + 1 = 24
//clockwise: 99 - 97 = 2
//c = 99 -> move from 'a' to 'c': clockwise
//char = 97 -> 97 -> 98 -> 99
//count = 0 -> 1 -> 3 -> 5

minTimeToType("bza"); //7
//first = 97, last = 122

//"b z a"
// ^
//max: max(97, 98) = 98
//min: min(97, 98) = 97
//counterclockwise: 122 - 98 + 97 - 97 + 1 = 25
//clockwise: 98 - 97 = 1
//b = 98 -> move from 'a' to 'b': clockwise
//char = 97 -> 98
//count = 0 -> 2

//"b z a"
//   ^
//max: max(98, 122) = 122
//min: min(98, 122) = 98
//counterclockwise: 122 - 122 + 98 - 97 + 1 = 2
//clockwise: 122 - 98 = 24
//z = 122 -> move from 'b' to 'z': counterclockwise
//char = 97 -> 98 -> 122
//count = 0 -> 2 -> 5

//"b z a"
//     ^
//max: max(122, 97) = 122
//min: min(122, 97) = 97
//counterclockwise: 122 - 122 + 97 - 97 + 1 = 1
//clockwise: 122 - 97 = 25
//a = 197 -> move from 'z' to 'a': clockwise
//char = 97 -> 98 -> 122 -> 97
//count = 0 -> 2 -> 5 -> 7

minTimeToType("zjpc"); //34
//first = 97, last = 122

//"z j p c"
// ^
//max: max(97, 122) = 122
//min: min(97, 122) = 97
//counterclockwise: 122 - 122 + 97 - 97 + 1 = 1
//clockwise: 122 - 97 = 25
//z = 122 -> move from 'a' to 'z': counterclockwise
//char = 97 -> 122
//count = 0 -> 2

//"z j p c"
//   ^
//max: max(122, 106) = 122
//min: min(122, 106) = 106
//counterclockwise: 122 - 122 + 106 - 97 + 1 = 10
//clockwise: 122 - 106 = 16
//j = 106 -> move from 'z' to 'j': clockwise
//char = 97 -> 122 -> 106
//count = 0 -> 2 -> 13

//"z j p c"
//     ^
//max: max(106, 112) = 112
//min: min(106, 112) = 106
//counterclockwise: 122 - 112 + 106 - 97 + 1 = 20
//clockwise: 112 - 106 = 6
//p = 112 -> move from 'j' to 'p': clockwise
//char = 97 -> 122 -> 106 -> 112
//count = 0 -> 2 -> 13 -> 20

//"z j p c"
//       ^
//max: max(112, 99) = 112
//min: min(112, 99) = 99
//counterclockwise: 122 - 112 + 99 - 97 + 1 = 13
//clockwise: 112 - 99 = 13
//c = 99 -> move from 'p' to 'c': clockwise/counterclockwise
//char = 97 -> 122 -> 106 -> 112 -> 99
//count = 0 -> 2 -> 13 -> 20 -> 34
