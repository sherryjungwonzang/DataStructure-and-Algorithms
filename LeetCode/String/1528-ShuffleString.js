//1528. Shuffle String
//given a string s and an integer array indices of the same length
//the string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string
//return the shuffled string
var shuffleString = (s, indices) => {
    let res = [];

    for (let i = 0; i < s.length; i++) {
        //mapping with indices position with s
        res[indices[i]] = s[i];
    }

    return res.join('');
}
shuffleString(s = "codeleet", indices = [4,5,6,7,0,2,1,3]); //"leetcode"
//s = "c o d e l e e t" || indices = [4, 5, 6, 7, 0, 2, 1, 3]
//     ^                              ^
//setting "c" on position 4
//res = [  ,  ,  ,  , c,  ,  ,  ]

//s = "c o d e l e e t" || indices = [4, 5, 6, 7, 0, 2, 1, 3]
//       ^                               ^
//setting "o" on position 5
//res = [  ,  ,  ,  , c, o,  ,  ]

//s = "c o d e l e e t" || indices = [4, 5, 6, 7, 0, 2, 1, 3]
//         ^                                ^
//setting "d" on position 6
//res = [  ,  ,  ,  , c, o, d,  ]

//s = "c o d e l e e t" || indices = [4, 5, 6, 7, 0, 2, 1, 3]
//           ^                                 ^
//setting "e" on position 7
//res = [  ,  ,  ,  , c, o, d, e ]

//s = "c o d e l e e t" || indices = [4, 5, 6, 7, 0, 2, 1, 3]
//             ^                                  ^
//setting "l" on position 0
//res = [ l,  ,  ,  , c, o, d, e ]

//s = "c o d e l e e t" || indices = [4, 5, 6, 7, 0, 2, 1, 3]
//               ^                                   ^
//setting "l" on position 0
//res = [ l,  , e,  , c, o, d, e ]

//s = "c o d e l e e t" || indices = [4, 5, 6, 7, 0, 2, 1, 3]
//                 ^                                    ^
//setting "l" on position 0
//res = [ l, e, e,  , c, o, d, e ]

//s = "c o d e l e e t" || indices = [4, 5, 6, 7, 0, 2, 1, 3]
//                   ^                                     ^
//setting "l" on position 0
//res = [ l, e, e, t, c, o, d, e ]

//res = [ l, e, e, t, c, o, d, e ] -> "leetcode"

shuffleString(s = "abc", indices = [0,1,2]); //"abc"
