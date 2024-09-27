//830. Positions Of Large Groups
//in a string 's' of lowercase letters, these letters from consecutive groups of the same character
//for example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy"
//a group is identified by an interval [start, end] where start and end denoting the start and end indices (inclusive) of the group
//in the above example, "xxxx" has the interval [3,6]

//a group is considered large if it has 3 or more characters
//return the intervals of every large group sorted in increasing order by start index

//Approach:
//using sliding window
var positionsLargeGroups = (s) => {
    let res = [];
    let start = 0;

    for (let i = 1; i <= s.length; i++) {
        //finding consecutive
        if (s[i] !== s[i - 1]) {
            //large groups
            if (i - start >= 3) res.push([start, i - 1]);

            //reset start to the consecutive range
            start = i;
        }
    };

    return res;
}
positionsLargeGroups("abbxxxxzzy"); //[[3, 6]] - "xxxx" is the only large group with start index 3 and end index 6
// s
// a b b x x x x z z y
//   ^
//i = 1 -> b != a : non-consecutive
//1 - 0 not more than 3
//reset start to 'b' start point

//   s
// a b b x x x x z z y
//     ^
//i = 2 -> b = b : consecutive

//   s
// a b b x x x x z z y
//       ^
//i = 3 -> x != b : non-consecutive
//3 - 1 not more than 3
//reset start to 'x' start point

//       s
// a b b x x x x z z y
//         ^ ^ ^ 
//i = 4 -> x = x : consecutive | i = 5 -> x = x : consecutive | i = 6 -> x = x : consecutive

//       s
// a b b x x x x z z y
//               ^
//i = 7 -> z != x : non-consecutive
//7 - 3 is more than 3
//res = [ [3, 7 - 1 = 6] ]
//reset start to 'z' start point

//               s
// a b b x x x x z z y
//                 ^
//i = 8 -> z = z : consecutive

//               s
// a b b x x x x z z y
//                   ^
//i = 9 -> y != z : non-consecutive
//9 - 7 not more than 3

//res = [ [3, 6] ]

positionsLargeGroups("abcdddeeeeaabbbcd"); //[[3,5],[6,9],[12,14]] - The large groups are "ddd", "eeee", and "bbb"
// s
// a b c d d d e e e e a a b b b c d
//   ^
//i = 1 -> b != a : non-consecutive
//1 - 0 not more than 3
//reset start to 'b' start point

//   s
// a b c d d d e e e e a a b b b c d
//     ^
//i = 2 -> c != b : non-consecutive
//2 - 1 not more than 3
//reset start to 'c' start point

//     s
// a b c d d d e e e e a a b b b c d
//       ^
//i = 3 -> d != c : non-consecutive
//3 - 2 not more than 3
//reset start to 'd' start point

//       s
// a b c d d d e e e e a a b b b c d
//         ^ ^ 
//i = 4 -> d = d : consecutive | i = 5 -> d = d : consecutive |

//       s
// a b c d d d e e e e a a b b b c d
//             ^
//i = 6 -> e != d : non-consecutive
//6 - 3 is more than 3
//res = [ [3, 6 - 1 = 5] ]
//reset start to 'e' start point

//             s
// a b c d d d e e e e a a b b b c d
//               ^ ^ 
//i = 7 -> e = e : consecutive | i = 8 -> e = e : consecutive | i = 9 -> e = e : consecutive


//             s
// a b c d d d e e e e a a b b b c d
//                     ^
//i = 10 -> a != e : non-consecutive
//10 - 6 is more than 3
//res = [ [3, 6 - 1 = 5], [6, 10 - 1 = 9] ]
//reset start to 'a' start point

//                     s
// a b c d d d e e e e a a b b b c d
//                       ^
//i = 11 -> a = a : consecutive

//                     s
// a b c d d d e e e e a a b b b c d
//                         ^
//i = 12 -> b != a : non-consecutive
//12 - 10 not more than 3
//reset start to 'b' start point

//                         s
// a b c d d d e e e e a a b b b c d
//                           ^ ^
//i = 13 -> b = b : consecutive | i = 14 -> b = b : consecutive

//                         s
// a b c d d d e e e e a a b b b c d
//                               ^
//i = 15 -> b != c : non-consecutive
//15 - 12 is more than 3
//res = [ [3, 6 - 1 = 5], [6, 10 - 1 = 9], [12, 15 - 1 = 14] ]
//reset start to 'c' start point

//                               s
// a b c d d d e e e e a a b b b c d
//                                 ^
//i = 16 -> d != c : non-consecutive
//16 - 15 not more than 3
//reset start to 'd' start point

//res = [ [3, 5], [6, 9], [12, 14] ]

positionsLargeGroups("abc"); //[] - We have groups "a", "b", and "c", none of which are large groups

