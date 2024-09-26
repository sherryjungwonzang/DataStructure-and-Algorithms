//796. Rotate String
//given two string s and goal
//return true if and only if s can become goal after some number of shifts on s
//a shift on s consists of moving the leftmost character of s to the rightmost position
//for example, if s = "abcde", then it will be "bcdea" after one shift

//Approach:
//using concat() and includes()
var rotateString = (s, goal) => {
    //base case
    if(s.length !== goal.length) return false;

    return s.concat(s).includes(goal); //same concatenating expression: s + s
}
rotateString(s = "abcde", goal = "cdeab"); //true
//s.concat(s) = abcdeabcde

//finding cdeab   -----
//true

rotateString(s = "abcde", goal = "abced"); //false
//s.concat(s) = abcdeabcde

//finding abced -> NO
//false
