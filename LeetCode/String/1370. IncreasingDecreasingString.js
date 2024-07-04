//1370. Increasing Decreasing String
//given a string 's'
//reorder the string using the following algorithm:

//pick the smallest character from s and append it to the result
//pick the smallest character from s which is greater than the last appended character to the result and append it
//repeat the step 2 until you cannot pick more characters
//pick the largest character from s and append it to the result
//pick the largest character from s which is smaller than the last appended character to the result and append it
//repeat step 5 until you cannot pick more characters
//repeat the steps from 1 to 6 until you pick all characters from s
//in each step, if the smallest or the largest character appears more than once you can choose any occurence and append it to the result

//return the result string after soring s with the algorithm

//Approach:
//using flag to check the direction and CharCodeAt & String.fromCharCode
var increasingDecreasingString = (s) => {
    let memo = new Array(26).fill(0); 
    let flag = true;
    let res = [];

    //filling the memo array with designated alphabet
    for (let i = 0; i < s.length; i++) {
        memo[s.charCodeAt(i) - 97] += 1;
    }

    //checking the directions
    while (res.length < s.length) {
        for (let i = 0; i < memo.length; i++) {
            let pos = i;

            if (!flag) pos = 25 - i; //changing the direction
            if (memo[pos] !== 0) {
                res.push(String.fromCharCode(pos + 97));
                memo[pos] -= 1;
            }
        }
        flag = !flag; //changing the direction
    }
    res = res.join('');

    return res;
}
increasingDecreasingString("aaaabbbbcccc"); //"abccbaabccba"
//memo = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
//         0, 0, 0, 0, 0, 0
//]

//"a a a a b b b b c c c c"
// ^
//memo = [ 4, 4, 4, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
//         0, 0, 0, 0, 0, 0
//]

//pos = 0, 1, 2 ... 25 | 25, 24... 2, 1, 0 | ...
//      ^               !flag      ^
//String.fromCharCode(0 + 97) = "a"
//String.fromCharCode(1 + 97) = "b"
//String.fromCharCode(2 + 97) = "c"
//...
//String.fromCharCode(2 + 97) = "c"
//String.fromCharCode(1 + 97) = "b"
//String.fromCharCode(0 + 97) = "a"
//...

//res = [a, b, c, c, b, a, a, b, c, c, b, a]
//res = "abccbaabccba"

increasingDecreasingString("rat"); //"art"
