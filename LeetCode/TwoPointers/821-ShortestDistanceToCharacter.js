//821. Shortest Distance To Character
//given a string s and a character c that occurs in s
//return an array of integers answer where answer.length == s.length 
//and answer[i] is the distance from index i to the closest occurrence of character c in s
//the distance between two indicies i and j is abs(i - j) where abs is the absolute value function

//Approach:
//using two pointers
var shortestToChar = (s, c) => {
    let n = s.length;
    let res = [];
    let prev = Infinity;

    //distance from left to right
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) prev = i;

        res[i] = Math.abs(prev - i); //distance
    }

    //distance from right to left
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === c) prev = i;

        res[i] = Math.min(res[i], prev - i);
    }

    return res;
}
//TC: O(c)
//SC: O(n)
shortestToChar(s = "loveleetcode", c = "e"); //[3,2,1,0,1,0,0,1,2,2,1,0]
//fisrt looping from  left to right                             second looping from right to left
//"l  o  v  e  l  e  e  t  c  o  d  e"                          "l  o  v  e  l  e  e  t  c  o  d  e"
// 0  1  2  3  4  5  6  7  8  9  10  11                          0  1  2  3  4  5  6  7  8  9  10  11 
// ^                                                                                                ^
//l != e                                                        e = e
//prev = Infi                                                   prev = Infi -> 11
//res = [ Infi,  ]                                              distance: |11 - 11| = 0
//                                                              res = [ Infi, Infi, Infi, 0, 1, 0, 0, 1, 2, 3, 4, 0 ]
    
//"l  o  v  e  l  e  e  t  c  o  d  e"                          "l  o  v  e  l  e  e  t  c  o  d  e"
// 0  1  2  3  4  5  6  7  8  9  10  11                          0  1  2  3  4  5  6  7  8  9  10  11
//    ^                                                                                         ^
//o != e                                                        d != e
//prev = Infi                                                   prev = Infi -> 11
//res = [ Infi, Infi,  ]                                        distance: |11 - 10| = 1
//                                                              res = [ Infi, Infi, Infi, 0, 1, 0, 0, 1, 2, 3, 1, 0 ]
//"l  o  v  e  l  e  e  t  c  o  d  e"
// 0  1  2  3  4  5  6  7  8  9  10  11                         "l  o  v  e  l  e  e  t  c  o  d  e"
//       ^                                                       0  1  2  3  4  5  6  7  8  9  10  11
//v != e                                                                                    ^
//prev = Infi                                                   o != e
//res = [ Infi, Infi, Infi,  ]                                  prev = Infi -> 11
//                                                              distance: |11 - 9| = 2
//"l  o  v  e  l  e  e  t  c  o  d  e"                          res = [ Infi, Infi, Infi, 0, 1, 0, 0, 1, 2, 2, 1, 0 ]
// 0  1  2  3  4  5  6  7  8  9  10  11
//          ^                                                   "l  o  v  e  l  e  e  t  c  o  d  e"   
//e = e                                                          0  1  2  3  4  5  6  7  8  9  10  11
//prev = Infi -> 3                                                                       ^
//distance: |3 - 3| = 0                                         c != e
//res = [ Infi, Infi, Infi, 0,  ]                               prev = Infi -> 11
//                                                              distance: |11 - 8| = 3
//"l  o  v  e  l  e  e  t  c  o  d  e"                          res = [ Infi, Infi, Infi, 0, 1, 0, 0, 1, 3, 2, 1, 0 ]
// 0  1  2  3  4  5  6  7  8  9  10  11
//             ^                                                 "l  o  v  e  l  e  e  t  c  o  d  e"  
//l != e                                                          0  1  2  3  4  5  6  7  8  9  10  11
//prev = Infi -> 3                                                                     ^
//distance: |3 - 4| = 1                                         t != e
//res = [ Infi, Infi, Infi, 0, 1,   ]                           prev = Infi -> 11
//                                                              distance: |11 - 7| = 4
//"l  o  v  e  l  e  e  t  c  o  d  e"                          res = [ Infi, Infi, Infi, 0, 1, 0, 0, 4, 3, 2, 1, 0 ]
// 0  1  2  3  4  5  6  7  8  9  10  11
//                ^                                             "l  o  v  e  l  e  e  t  c  o  d  e"  
//e = e                                                          0  1  2  3  4  5  6  7  8  9  10  11
//prev = Infi -> 3 -> 5                                                            ^
//distance: |5 - 5| = 0                                         e = e
//res = [ Infi, Infi, Infi, 0, 1, 0,  ]                         prev = Infi -> 11 -> 6
//                                                              res = [ Infi, Infi, Infi, 0, 1, 0, 0, 4, 3, 2, 1, 0 ]
//"l  o  v  e  l  e  e  t  c  o  d  e"
// 0  1  2  3  4  5  6  7  8  9  10  11                         "l  o  v  e  l  e  e  t  c  o  d  e"  
//                   ^                                           0  1  2  3  4  5  6  7  8  9  10  11
//e = e                                                                         ^
//prev = Infi -> 3 -> 5 -> 6                                    e = e
//distance: |6 - 6| = 0                                         prev = Infi -> 11 -> 6 -> 5
//res = [ Infi, Infi, Infi, 0, 1, 0, 0,  ]                      res = [ Infi, Infi, Infi, 0, 1, 0, 0, 4, 3, 2, 1, 0 ]

//"l  o  v  e  l  e  e  t  c  o  d  e"                          "l  o  v  e  l  e  e  t  c  o  d  e" 
// 0  1  2  3  4  5  6  7  8  9  10  11                          0  1  2  3  4  5  6  7  8  9  10  11
//                      ^                                                    ^
//t != e                                                        l != e
//prev = Infi -> 3 -> 5 -> 6                                    prev = Infi -> 11 -> 6 -> 5
//distance: |6 - 7| = 0                                         distance: |5 - 4| = 1
//res = [ Infi, Infi, Infi, 0, 1, 0, 0, 1 ]                     res = [ Infi, Infi, Infi, 0, 1, 0, 0, 4, 3, 2, 1, 0 ]         

//"l  o  v  e  l  e  e  t  c  o  d  e"                          "l  o  v  e  l  e  e  t  c  o  d  e" 
// 0  1  2  3  4  5  6  7  8  9  10  11                          0  1  2  3  4  5  6  7  8  9  10  11
//                         ^                                              ^
//c != e                                                        e = e
//prev = Infi -> 3 -> 5 -> 6                                    prev = Infi -> 11 -> 6 -> 5 -> 3
//distance: |6 - 8| = 2                                         res = [ Infi, Infi, Infi, 0, 1, 0, 0, 4, 3, 2, 1, 0 ]  
//res = [ Infi, Infi, Infi, 0, 1, 0, 0, 1, 2 ]
//                                                              "l  o  v  e  l  e  e  t  c  o  d  e" 
//"l  o  v  e  l  e  e  t  c  o  d  e"                           0  1  2  3  4  5  6  7  8  9  10  11
// 0  1  2  3  4  5  6  7  8  9  10  11                                ^
//                            ^                                  v != e
//o != e                                                         prev = Infi -> 11 -> 6 -> 5 -> 3
//prev = Infi -> 3 -> 5 -> 6                                     distance: |3 - 2| = 1
//distance: |6 - 9| = 2                                          res = [ Infi, Infi, 1, 0, 1, 0, 0, 4, 3, 2, 1, 0 ] 
//res = [ Infi, Infi, Infi, 0, 1, 0, 0, 1, 2, 3 ]
//                                                              "l  o  v  e  l  e  e  t  c  o  d  e" 
//"l  o  v  e  l  e  e  t  c  o  d  e"                           0  1  2  3  4  5  6  7  8  9  10  11
// 0  1  2  3  4  5  6  7  8  9  10  11                             ^
//                                ^                              o != e
//d != e                                                         prev = Infi -> 11 -> 6 -> 5 -> 3
//prev = Infi -> 3 -> 5 -> 6                                     distance: |3 - 1| = 2
//distance: |6 - 10| = 4                                         res = [ Infi, 2, 1, 0, 1, 0, 0, 4, 3, 2, 1, 0 ] 
//res = [ Infi, Infi, Infi, 0, 1, 0, 0, 1, 2, 3, 4 ]
//                                                              "l  o  v  e  l  e  e  t  c  o  d  e" 
//"l  o  v  e  l  e  e  t  c  o  d  e"                           0  1  2  3  4  5  6  7  8  9  10  11
// 0  1  2  3  4  5  6  7  8  9  10  11                          ^
//                                   ^                           l != e
//e = e                                                          prev = Infi -> 11 -> 6 -> 5 -> 3
//prev = Infi -> 3 -> 5 -> 6 -> 11                               distance: |3 - 0| = 3
//distance: |11 - 11| = 4                                        res = [ 3, 2, 1, 0, 1, 0, 0, 4, 3, 2, 1, 0 ] 
//res = [ Infi, Infi, Infi, 0, 1, 0, 0, 1, 2, 3, 4, 0 ]

//final distance = [3, 2, 1, 0, 1, 0, 0, 4, 3, 2, 1, 0 ] 

shortestToChar("aaab", "b"); //[3,2,1,0]
