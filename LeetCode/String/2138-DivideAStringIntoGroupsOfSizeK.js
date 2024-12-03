//2138. Divide A String Into Groups Of Size K
//a string s can be partitioned into groups of size k using the following procedure:
//the first group consists of the first k characters of the string, the second group consists of the next k characters of the string, and so on
//each character can be a part of exactly one group
//for the last group, if the string does not have k characters remaining, a character fill is used to complete the group
//note that the partition is done so that after removing the fill character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be s
//given the string s, the size of each group k and the character fill, 
//return a string array denoting the composition of every group s has been divided into, using the above procedure
var divideStringToGroup = (s, k, fill) => {
    let res = [];

    for (let i = 0; i < s.length; i += k) res.push(s.substring(i, i + k));

    //checking the last words to fill
    let word = res[res.length - 1];

    if (word.length === k) return res;

    //if not - filling
    for (let i = word.length; i < k; i++) res[res.length - 1] += fill;

    return res;
}
divideStringToGroup(s = "abcdefghi", k = 3, fill = "x"); //["abc","def","ghi"]
// a b c d e f g h i
// ^
//substring(0, 3) = abc
//res = [ abc, ]

// a b c d e f g h i
//       ^
//substring(3, 6) = def
//res = [ abc, def, ]

// a b c d e f g h i
//             ^
//substring(6, 9) = ghi
//res = [ abc, def, ghi ]

//no words to fill
//res = [ abc, def, ghi ]

divideStringToGroup(s = "abcdefghij", k = 3, fill = "x"); //["abc","def","ghi","jxx"]
// a b c d e f g h i j
// ^
//substring(0, 3) = abc
//res = [ abc, ]

// a b c d e f g h i j
// ^
//substring(3, 6) = def
//res = [ abc, def, ]

// a b c d e f g h i j
//             ^
//substring(6, 9) = ghi
//res = [ abc, def, ghi ]

// a b c d e f g h i j
//                   ^
//substring(9) = j
//res = [ abc, def, ghi, j ]

//res = [ abc, def, ghi, j ]
//                       ^
//word = j != k -> need to fill
//j + x + x = jxx
//res = [ abc, def, ghi, jxx ]



