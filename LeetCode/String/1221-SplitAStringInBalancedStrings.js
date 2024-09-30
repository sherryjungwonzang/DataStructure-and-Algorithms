//1221. Split A String In Balanced Strings
//balanced strings are those that have an equal quantity of 'L' and 'R' characters
//given a balanced string s
//split it into some number substrings such that:
//each substring is balanced
//return the max number of balanced strings you can obtain

//Approach:
//using greedy approach
var balancedStrings = (s) => {
    let balanced = 0;
    let countL = 0;
    let countR = 0;

    //splitting
    s.split('').forEach(val => {
        //counting L and R
        if (val === "L") countL++;
        else if (val === "R") countR++;

        //balanced
        if (countL === countR) {
            balanced++;

            //resetting
            countL = 0;
            countR = 0;
        }
    });

    return balanced;
}
balancedStrings("RLRRLLRLRL"); //4 - "RL", "RRLL", "RL", "RL"
//split = "R L R R L L R L R L"
//         ^ ^
//countL = 0 -> 1 -> 0
//countR = 0 -> 1 -> 0
//countL = countR -> balanced
//balanced = 0 -> 1

//"R L R R L L R L R L"
//     ^ ^ ^ ^
//countL = 0 -> 1 -> 2
//countR = 0 -> 1 -> 2
//countL = countR -> balanced
//balanced = 0 -> 1 -> 2

//"R L R R L L R L R L"
//             ^ ^ 
//countL = 0 -> 1 
//countR = 0 -> 1 
//countL = countR -> balanced
//balanced = 0 -> 1 -> 2 -> 3

//"R L R R L L R L R L"
//                 ^ ^
//countL = 0 -> 1 
//countR = 0 -> 1 
//countL = countR -> balanced
//balanced = 0 -> 1 -> 2 -> 3 -> 4

balancedStrings("RLRRRLLRLL"); //2 - "RL", "RRRLLRLL"

balancedStrings("LLLLRRRR"); //1 - "LLLLRRRR"
