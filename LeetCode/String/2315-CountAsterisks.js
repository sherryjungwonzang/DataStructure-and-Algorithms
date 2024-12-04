//2315. Count Asterisks
//given a string s, where every two consecutive vertical bars '|' are grouped into a pair
//in other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth
//return the number of '*' in s, excluding the '*' between each pair of '|'
//note that each '|' will belong to exactly one pair

//Approach:
//using flag
var countAsterisks = (s) => {
    let flag = true;
    let res = 0;

    for (let char of s) {
        if (flag && char == "*") res += 1;
        
        //changing the directions for non-pair
        if (char == "|") flag = !flag;
    }

    return res;
}
//TC: O(n)
//SC: O(1)
countAsterisks("l|*e*et|c**o|*de|"); //2
//"l | * e * e t | c * * o | * d e|"
// ^
//flag = T
//res = 0 -> 0

//"l | * e * e t | c * * o | * d e|"
//         ^
//flag = T -> F

//"l | * e * e t | c * * o | * d e|"
//                   ^ ^
//flag = T -> F -> T
//res = 0 -> 0 -> 1 -> 2

//"l | * e * e t | c * * o | * d e|"
//                             ^
//flag = T -> F -> T -> F
//res = 0 -> 0 -> 1 -> 2

//2

countAsterisks("iamprogrammer"); //0

countAsterisks("yo|uar|e**|b|e***au|tifu|l"); //5
//" y o | u a r | e * * | b | e * * * a u | t i f u | l"
//   ^
//flag = T
//res = 0 -> 0

//" y o | u a r | e * * | b | e * * * a u | t i f u | l"
//          ^
//flag = T -> F

//" y o | u a r | e * * | b | e * * * a u | t i f u | l"
//                  ^ ^
//flag = T -> F -> T
//res = 0 -> 0 -> 1 -> 2

//" y o | u a r | e * * | b | e * * * a u | t i f u | l"
//                        ^
//flag = T -> F -> T -> F

//" y o | u a r | e * * | b | e * * * a u | t i f u | l"
//                              ^ ^ ^
//flag = T -> F -> T -> F -> T
//res = 0 -> 0 -> 1 -> 2 -> 3 -> 4 -> 5

//" y o | u a r | e * * | b | e * * * a u | t i f u | l"
//                                              ^
//flag = T -> F -> T -> F -> T -> F

//" y o | u a r | e * * | b | e * * * a u | t i f u | l"
//                                                     ^
//flag = T -> F -> T -> F -> T -> F -> T
//res = 0 -> 0 -> 1 -> 2 -> 3 -> 4 -> 5

//5
