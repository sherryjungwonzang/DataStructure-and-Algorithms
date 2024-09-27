//806. Number Of Lines To Write String
//given a string s of lowercase English letters and an array widths denoting how many pixels wide each lowercase English letter is
//specifically, widths[0] is the width of 'a', widths[1] is the width of 'b' and so on

//you are trying to write s across several lines, where each line is no longer than 100 pixels
//starting at the beginning of s
//write as many letters on the first line such that the total width does not exceed 100 pixels
//then, from where you stopped in s, continue writing as many letters as you can on the second line
//continue this process until you have written all of s

//return an array result of length 2 where:
//result[0] is the total number of lines
//result[1] is the width of the last line in pixels

//Approach:
//using charCodeAt()
var numOfLines = (widths, s) => {
    let lines = 1;
    let lastWidth = 0;

    for (let i = 0; i < s.length; i++) {
        let width = widths[s.charCodeAt(i) - 97]; //'a': 97 as base

        //calculating until 100
        lastWidth += width;

        //another line
        if (lastWidth > 100) {
            //adding line
            lines++;

            //resetting
            lastWidth = width;
        }
    };

    return [lines, lastWidth];
}
numOfLines(widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"); //[3, 60]
//lines = 1
//lastWidth = 0

//s = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
//     ^ ^ ^ ^ ^ ^ ^ ^ ^ ^
//     -------------------
//'a': 97 - 97 = 0 | 'b': 98 - 97 = 1 | 'c': 99 - 97 = 2 | 'd': 100 - 97 = 3 | 'e': 101 - 97 = 4 | 'f': 102 - 97 = 5 | 'g': 103 - 97 = 6  | 'h': 104 - 97 = 7 | 'i': 105 - 97 = 8  | 'j': 106 - 97 = 9 | 'k': 107 - 97 = 10  
//lastWidth = 0 -> 10       -> 20               -> 30               -> 40               -> 50               -> 60               -> 70           -> 80               -> 90               -> 100              -> 110
//completed line 1: "a b c d e f g h i j"
//lines = 1 -> 2
//resetting lastWidth as 10 as start again

//s = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
//                         ^ ^ ^ ^ ^ ^ ^ ^ ^ ^
//                         -------------------
//'k': 107 - 97 = 10 | 'l': 108 - 97 = 11 | 'm': 109 - 97 = 12 | 'n': 110 - 97 = 13 | 'o': 111 - 97 = 14 | 'p': 112 - 97 = 15 | 'q': 113 - 97 = 16  | 'r': 114 - 97 = 17 | 's': 115 - 97 = 18  | 't': 116 - 97 = 19 | 'u': 117 - 97 = 20  
//lastWidth = 110 -> 10       -> 20               -> 30                 -> 40                -> 50               -> 60                 -> 70                 -> 80               -> 90               -> 100              -> 110
//completed line 2: "k l m n o p q r s t"
//lines = 1 -> 2 -> 3
//resetting lastWidth as 10 as start again

//s = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
//                                             ^ ^ ^ ^ ^ ^ 
//                                             -----------
//'u': 117 - 97 = 20 | 'v': 118 - 97 = 21 | 'w': 119 - 97 = 22 | 'x': 120 - 97 = 23 | 'y': 121 - 97 = 24 | 'z': 122 - 97 = 25 
//lastWidth = 110 -> 10       -> 20               -> 30                 -> 40                -> 50               -> 60                
//completed line 3: "u v w x y z"

//[3, 60]

numOfLines(widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"); //[2, 4]
//lines = 1
//lastWidth = 0

//s = "b b b c c c d d d a a a"
//     ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^
//     ---------------------
//'b': 98 - 97 = 1 | 'b': 98 - 97 = 1 | 'b': 98 - 97 = 1 | 'c': 99 - 97 = 2 | 'c': 99 - 97 = 2 | 'c': 99 - 97 = 2 | 'd': 100 - 97 = 3 | 'd': 100 - 97 = 3 | 'd': 100 - 97 = 3 | 'a': 97 - 97 = 0 | 'a': 97 - 97 = 0  | 'a': 97 - 97 = 0 
//lastWidth = 0 -> 10       -> 20            -> 30            -> 40               -> 50               -> 60               -> 70              -> 80                  -> 90             -> 94              -> 98            -> 102
//completed line 1: "b b b c c c d d d a a"
//lines = 1 -> 2

//s = "b b b c c c d d d a a a"
//                         ^ ^
//                         ---
//'a': 97 - 97 = 0  
//lastWidth = 102 -> 4
//completed line 2: "a"

//[2, 4]
