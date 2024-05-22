//1209. Remove All Adjacent Duplicates in String2
//given a string 's' and integer 'k'
//k duplicate removal consists of choosing k adjacent and equal letters from s
//removing them, causing the left and the right side of the deleted substring to concatenate together

//repeatedly make k duplicate removals on s until we no longer can

//return the final string after all such duplicate removals have been made
//it is huaranteed that the answer is unique

//Approach:
//using Stack data structure
var removeAdjacentDuplicates2 = (s, k) => {
    //setting stack
    let stack = [];

    //loop through string
    for (let i = 0; i < s.length; i++) {
        //extract the current value
        let curr = s[i];

        //add into the stack
        if (stack.length === 0 || curr !== stack[stack.length - 1][0]) {
            stack.push([curr, 1]);
        } else {
            //incrementing
            stack[stack.length - 1][1]++;

            //popping off from the stack when it is equal to k
            if (stack[stack.length - 1][1] === k) stack.pop();
        }
    }
    //produce the result from stack
    let res = "";

    for (let [char, count] of stack) {
        res += char.repeat(count); //repeat() - return a string with a num of copies of string
    }
    return res;
}
//TC: O(n + m) -  n is the length of string and m is the length of stack
//SC: O(n)
removeAdjacentDuplicates2("deeedbbcccbdaa", 3); //"aa" 
//"deeedbbcccbdaa"
// ^
//stack = [ [d, 1], [e, 3] ] - pop off [e, 3]

//"ddbbcccbdaa"
//  ^
//stack = [ [d, 2], [b, 2], [c, 3] ] - pop off [c, 3]

//"ddbbbdaa"
//     ^
//stack = [ [d, 2], [b, 3] ] - pop off [b, 3]

//"dddaa"
//   ^
//stack = [ [d, 3] ] - pop off [d, 3]

//"aa"
// ^
//stack = [ [a, 2] ]

removeAdjacentDuplicates2("pbbcggttciiippooaais", 2); //"ps"
//"pbbcggttciiippooaais"
//   ^
//stack = [ [p, 1], [b, 2] ] - pop off [b, 2]

//"pcggttciiippooaais"
//    ^
//stack = [ [p, 1], [c, 1], [g, 2] ] - pop off [g, 2]

//"pcttciiippooaais"
//   ^
//stack = [ [p, 1], [c, 1], [t, 2] ] - pop off [t, 2]

//"pcciiippooaais"
//   ^
//stack = [ [p, 1], [c, 2] ] - pop off [c, 2]

//"piiippooaais"
//   ^
//stack = [ [p, 1], [i, 2] ] - pop off [i, 2]

//"pippooaais"
//   ^
//stack = [ [p, 2], [i, 1] ] - pop off [p, 2]

//"ipooaais"
//    ^
//stack = [ [i, 1], [p, 1], [o, 2] ] - pop off [o, 2]

//"ipaais"
//   ^
//stack = [ [i, 1], [p, 1], [a, 2] ] - pop off [a, 2]

//"ipis"
//   ^
//stack = [ [i, 2], [p, 1] ] - pop off [i, 2]

//"ps"
//  ^
//stack = [ [p, 1], [s, 1] ]

removeAdjacentDuplicates2("abcd", 2); //"abcd" - there is nothing to delete
