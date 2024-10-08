//1935. Maximum Number Of Words You Can Type
//there is a malfunctioning keyboard where some letter keys do not work
//all other keys on the keyboard work properly

//given a string text of words separated by a single space = no leading or trailing spaces
//and a string brokenLetters of all distinct letter keys that are broken
//return the number of words in text you can fully type using this keyboard
var maxNumWordsCanType = (text, brokenLetters) => {
    let words = text.split(' ');
    let broken = brokenLetters.split('');
    let count = 0;

    //traversing
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < broken.length; j++) {
            //can be typed
            if (words[i].includes(broken[j])) {
                count++;

                break;
            }
        }
    }

    return words.length - count;
}
maxNumWordsCanType(text = "hello world", brokenLetters = "ad"); //1 - hello
//words = [ hello, world ] || broken = a d
//            ^
//words = h e l l o     || broken = a d         words = w o r l d     || broken = a d
//        ^                         ^ ^                 ^                         ^ ^
//h != a || h != d                              w != a || w != d

//words = h e l l o     || broken = a d         words = w o r l d     || broken = a d
//          ^                       ^ ^                   ^                       ^ ^
//e != a || e != d                              o != a || o != d

//words = h e l l o     || broken = a d         words = w o r l d     || broken = a d
//            ^                     ^ ^                     ^                     ^ ^
//l != a || l != d                              r != a || r != d

//words = h e l l o     || broken = a d         words = w o r l d     || broken = a d
//              ^                   ^ ^                       ^                   ^ ^
//l != a || l != d                              l != a || l != d

//words = h e l l o     || broken = a d         words = w o r l d     || broken = a d
//                ^                 ^ ^                         ^                 ^ ^
//o != a || o != d                              d != a || d = d
//count = 0                                     count = 0 -> 1

//words.length - 1 = 1

maxNumWordsCanType(text = "leet code", brokenLetters = "lt"); //1 - code

maxNumWordsCanType(text = "leet code", brokenLetters = "e"); //0
