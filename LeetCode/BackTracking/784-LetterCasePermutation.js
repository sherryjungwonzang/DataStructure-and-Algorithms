//784. Letter Case Permutation
//given a string s
//you can transform every letter individually to be lowercase or uppercase to create another string
//return a list of all possible strings we could create - return the output in any order

//Approach:
//using backtracking
var letterCasePermutation = (s) => {
    let res = [];

    //backtracking
    function recurse(s, arr, str, idx) {
        //base case
        if (idx === s.length) {
            arr.push(str);

            return;
        }

        //upper alphabet
        if (s.charAt(idx) >= 'A' && s.charAt(idx) <= 'Z') recurse(s, arr, str + s.charAt(idx).toLowerCase(), idx + 1);

        //lower alphabet
        if (s.charAt(idx) >= 'a' && s.charAt(idx) <= 'z') recurse(s, arr, str + s.charAt(idx).toUpperCase(), idx + 1);

        //original permutation
        recurse(s, arr, str + s.charAt(idx), idx + 1);
    };

    recurse(s, res, "", 0);

    return res;
}
letterCasePermutation("a1b2"); //["a1b2","a1B2","A1b2","A1B2"]
//starting with recurse("a1b2", [], "", 0)
//recurse("a1b2", [], "", 0) -> a's upper: recurse("a1b2", [], "" + A, 1)
//         ^
//                                         recurse("a1b2", [], "" + A, 1) -> recurse("a1b2", [], "A" + 1, 2)
//                                                   ^
//                                                                           recurse("a1b2", [], "A" + 1, 2) -> b's upper: recurse("a1b2", [], "A1" + B, 3)
//                                                                                      ^
//                                                                                                                         recurse("a1b2", [], "A1" + B, 3) -> recurse("a1b2", [], "A1B" + 2, 4)
//                                                                                                                                     ^
//                                                                                                                                                             recurse("a1b2", [], "A1B" + 2, 4) -> arr = [A1B2]

//backtracking to b
//recurse("a1b2", [A1B2], "A1B2", 4) -> recurse("a1b2", [A1B2], "A1B", 3) -> recurse("a1b2", [A1B2], "A1", 2)
//                                                                           recurse("a1b2", [A1B2], "A1", 2) -> b's lower: recurse("a1b2", [A1B2], "A1" + b, 3)
//                                                                                      ^
//                                                                                                                          recurse("a1b2", [A1B2], "A1" + b, 3) -> recurse("a1b2", [A1B2], "A1b" + 2, 4)
//                                                                                                                                      ^
//                                                                                                                                                                  recurse("a1b2", [A1B2], "A1b" + 2, 4) -> arr = [A1B2, A1b2]

//backtracking to a
//recurse("a1b2", [A1B2, A1b2], "A1b2", 4) -> recurse("a1b2", [A1B2, A1b2], "A1b", 3) -> recurse("a1b2", [A1B2, A1b2], "A1", 2) -> recurse("a1b2", [A1B2, A1b2], "A", 1) -> recurse("a1b2", [A1B2, A1b2], "", 0)
//recurse("a1b2", [A1B2, A1b2], "", 0) -> a's lower: recurse("a1b2", [A1B2, A1b2], "" + a, 1)
//         ^
//                                                   recurse("a1b2", [A1B2, A1b2], "" + a, 1) -> recurse("a1b2", [A1B2, A1b2], "a" + 1, 2) 
//                                                             ^
//                                                                                               recurse("a1b2", [A1B2, A1b2], "a" + 1, 2) -> b's upper: recurse("a1b2", [A1B2, A1b2], "a1" + B, 3)
//                                                                                                          ^
//                                                                                                                                                       recurse("a1b2", [A1B2, A1b2], "a1" + B, 3) -> recurse("a1b2", [A1B2, A1b2], "a1B" + 2, 4)
//                                                                                                                                                                   ^
//                                                                                                                                                                                                     recurse("a1b2", [A1B2, A1b2], "a1B" + 2, 4) -> arr = [A1B2, A1b2, a1B2]

//backtracking to b
//recurse("a1b2", [A1B2, A1b2, a1B2], "a1B2", 4) -> recurse("a1b2", [A1B2, A1b2, a1B2], "a1B", 3) -> recurse("a1b2", [A1B2, A1b2, a1B2], "a1", 2)
//                                                                                                   recurse("a1b2", [A1B2, A1b2, a1B2], "a1", 2) -> b's lower: recurse("a1b2", [A1B2, A1b2, a1B2], "a1" + b, 3)
//                                                                                                              ^
//                                                                                                                                                              recurse("a1b2", [A1B2, A1b2, a1B2], "a1" + b, 3) -> recurse("a1b2", [A1B2, A1b2, a1B2], "a1b" + 2, 4)
//                                                                                                                                                                          ^
//                                                                                                                                                                                                                  recurse("a1b2", [A1B2, A1b2, a1B2], "a1b" + 2, 4) -> arr = [A1B2, A1b2, a1B2, a1b2]

//backtracking to a
//recurse("a1b2", [A1B2, A1b2, a1B2, a1b2], "a1b2", 4) -> recurse("a1b2", [A1B2, A1b2, a1B2, a1b2], "a1b", 3) -> recurse("a1b2", [A1B2, A1b2, a1B2, a1b2], "a1", 2) -> recurse("a1b2", [A1B2, A1b2, a1B2, a1b2], "a", 1) -> recurse("a1b2", [A1B2, A1b2, a1B2, a1b2], "", 0)

//res = [A1B2, A1b2, a1B2, a1b2]

letterCasePermutation("3z4"); //["3z4","3Z4"]

