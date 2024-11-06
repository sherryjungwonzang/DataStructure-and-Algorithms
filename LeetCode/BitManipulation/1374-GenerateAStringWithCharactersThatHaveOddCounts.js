//1374. Generate A String With Characters That Have Odd Counts
//given an integer n
//return a string with n characters such that each character in such string occurs an odd number of times
//the returned string must contain only lowercase English letters
//if there are multiples valid strings, return any of them

//Approach:
//using bit manipulation & 
var charsHaveOddCounts = (n) => {
    let res = Array(n).fill('a');

    //checking odd times
    if (!(n & 1)) res[n - 1] = 'b';

    return res.join('');
}
charsHaveOddCounts(4); //"aaab" or "pppz" or "ohhh" - can be various
//res = [a, a, a, a]

//4 & 1 = 0100
//        0001
//        ----
//        0000 = 0
//[4 - 1] = 'b'
//res = [a, a, a, a] -> [a, a, a, b]
//'aaab' 

charsHaveOddCounts(2); //2 - "xy" or "ag" or "ur" - can be various

charsHaveOddCounts(7); //"holasss" - can be various
//res = [a, a, a, a, a, a, a]

//7 & 1 = 111
//        001
//        ----
//        001 = 1
//res = [a, a, a, a, a, a, a] -> [a, a, a, a, a, a, a]
//'aaaaaaa' 
