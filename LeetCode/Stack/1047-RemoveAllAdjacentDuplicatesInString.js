//1047. Remove all adjacent duplicates in string
//given a string's' consisting of lowercase english letters
//a duplicate removal consiste of choosing two adjacent and equal letters and remving them

//repeatedly make duplicate removals on 's' until we no longer can

//return the final string after all such duplicate removals have been made
//it can be proven that the answer is unique

//Approach:
//using  the stack data structure - to keep track of previous value for comparison
var removeAdjacentDuplicates = (s) => {
    //creating stack
    let stack = [];

    for (let char of s) {
        //compare with the previous value in the stack
        stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
    }
    return stack.join("");
}
//TC: O(n) - n is the length of the string | loop through array exaclty once
//SC: O(n) - utilizing the stack data structure | worst case: add all of the values within the string into the stack
removeAdjacentDuplicates("abbaca"); //"ca" - can remove "bb" since the letters are adjacent and equal, and then possible move. After moving, "aa" is possible to remove
//stack = [ ]
//"a b b a c a"
// ^

//a has no previous value -> add into stack
//stack = [ a ]

//   ^
//a != b -> add into stack
//stack = [ a b ]

//      ^
//b = b -> pop off from the stack
//stack = [ a ]

//         ^
//a = a -> pop off from the stack
//stack = [ ]

//          ^
//add the rest -> stack = [c a]
//convert it to string -> "ca"

removeAdjacentDuplicates("azxxzy"); //"ay"
