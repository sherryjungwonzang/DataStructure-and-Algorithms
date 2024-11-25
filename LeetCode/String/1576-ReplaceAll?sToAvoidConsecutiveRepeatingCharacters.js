//1576. Replace All ?s To Avoid Consecutive Repeating Characters
//given a string s containing only lowercase English letters and the '?' character
//convert all the '?' characters into lowercase letters such that the final string does not contain any consecutive repeating characters
//you cannot modify the non '?' characters

//it is guaranteed that there are no consecutive repeating characters in the given string except for '?'
//return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them
//it can be shown that an answer is always possible with the given constraints
var replaceAllQuetionsMark = (s) => {
    let res = [...s];

    //traversing
    for (let i = 0; i < res.length; i++) {
        if (res[i] !== "?") continue;
        
        //replacing options - starting from a
        if (res[i - 1] !== "a" && res[i + 1] !== "a") {
            //replacing to "a"
            res[i] = "a";
            
            continue;
        }

        if (res[i - 1] !== "b" && res[i + 1] !== "b") {
            //replacing to "b"
            res[i] = "b";
            
            continue;
        }

        //other options
        res[i] = "c";
    }

    return res.join("");
}
replaceAllQuetionsMark("?zs"); //"azs"
//? z s
//^
//checking: [i - 1] != "a"
//          [i + 1] != "a"
//? -> a

//azs

replaceAllQuetionsMark("ubv?w"); //ubvaw
//u b v ? w
//      ^
//checking: [i - 1] != "a"
//          [i + 1] != "a"
//? -> a

//ubvaw
