//942. DI String Match
//a permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
//s[i] === 'I if perm[i] < prem[i + 1], and
//s[i] === 'D' if perm[i] > perm[i + 1]

//given a string 's'
//reconstruct the permutation perm and return it

//Approach:
//using two pointer
var DIStringMatch = (s) => {
    let res = [];
    let left = 0;
    let right = s.length;

    for (let i = 0; i <= s.length; i++) {
        if (s.charAt(i) === "I") res.push(left++);
        else res.push(right--);
    }

    return res;
}
DIStringMatch("IDID"); //[0, 4, 1, 3, 2]
//"I D I D"
// ^
//res = [ 0, ]
//left = 0 -> 1
//right = 4

//"I D I D"
//   ^
//res = [ 0, 4, ]
///left = 0 -> 1
//right = 4 -> 3

//"I D I D"
//     ^ 
//res = [ 0, 4, 1, ]
///left = 0 -> 1 -> 2
//right = 4 -> 3

//"I D I D"
//       ^ 
//res = [ 0, 4, 1, 3 ]
///left = 0 -> 1 -> 2
//right = 4 -> 3 -> 2

//"I D I D   "
//         ^   
//res = [ 0, 4, 1, 3, 2 ]
///left = 0 -> 1 -> 2
//right = 4 -> 3 -> 2 -> 1

//res = [ 0, 4, 1, 3, 2 ]

DIStringMatch("DDI"); //[3, 2, 0, 1]
//"D D I  "
// ^
//res = [ 3, ]
//left = 0 
//right = 3 -> 2

//"D D I  "
//   ^
//res = [ 3, 2 ]
//left = 0 
//right = 3 -> 2 -> 1

//"D D I  "
//     ^
//res = [ 3, 2, 0 ]
//left = 0 -> 1
//right = 3 -> 2 -> 1

//"D D I  "
//       ^
//res = [ 3, 2, 0, 1 ]
//left = 0 -> 1
//right = 3 -> 2 -> 1 -> 0

//res = [ 3, 2, 0, 1 ]

DIStringMatch("III"); //[0, 1, 2, 3]

