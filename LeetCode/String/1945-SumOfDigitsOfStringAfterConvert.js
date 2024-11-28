//1945. Sum Of Digits Of String After Convert
//given a string s consisting of lowercase English letters, and an integer k
//your task is to convert the string into an integer by a special process, and then transform it by summing its digits repeatedly k times
//more specifically, perform the following steps:

//convert s into an integer by replacing each letter with its position in the alphabet (i.e. replace 'a' with 1, 'b' with 2, ..., 'z' with 26)
//transform the integer by replacing it with the sum of its digits
//repeat the transform operation (step 2) k times in total

//for example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:
//Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
//Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
//Transform #2: 17 ➝ 1 + 7 ➝ 8
//return the resulting integer after performing the operations described above

//Approach:
//using charCodeAt()
var sumOfDigits = (s, k) => {
    let sum = 0;

    //converting
    for (i = 0; i < s.length; i++) {
        let val = s.charCodeAt(i) - 96;

        //adding digits of val
        sum += Math.floor(val / 10) + (val % 10);
    }

    //transforming
    for (let i = 1; i < k; i++) {
        let nextSum = 0;

        while (sum > 0) {
            //adding
            nextSum += sum % 10;

            sum = Math.floor(sum / 10);
        }

        //updating
        sum = nextSum;
    }

    return sum
}
sumOfDigits("iiii", 1); //36

sumOfDigits("leetcode", 2); //6
//l e e t c o d e                       l e e t c o d e                         l e e t c o d e                             l e e t c o d e                         l e e t c o d e                         l e e t c o d e                         l e e t c o d e
//^                                       ^ ^                                         ^                                             ^                                         ^                                         ^                                         ^
//val = charCodeAt(l) - 96 = 12         val = charCodeAt(e) - 96 = 5            val = charCodeAt(t) - 96 = 20               val = charCodeAt(c) - 96 = 3            val = charCodeAt(o) - 96 = 15           val = charCodeAt(d) - 96 = 4            val = charCodeAt(e) - 96 = 5
//(12 / 10) + (12 % 10) = 1 + 2 = 3     (5 / 10) + (5 % 10) = 0 + 5 = 5         (20 / 10) + (20 % 10) = 2 + 0 = 2           (3 / 10) + (3 % 10) = 0 + 3 = 3         (15 / 10) + (15 % 10) = 1 + 5 = 6       (4 / 10) + (4 % 10) = 0 + 4 = 4         (5 / 10) + (5 % 10) = 0 + 5 = 5 
//sum = 0 -> 3                          -> 8 -> 13                              -> 15                                       -> 18                                   -> 24                                   -> 28                                   -> 33

//sum = 33

//transforming
//sum = 33 -> (33 / 10)  = 3
//nextSum = 0 -> (33 % 10) = 3

//sum = 33 -> (33 / 10 = 3) 3 -> (3 / 10 = 3) 6
//nextSum = 0 -> (33 % 10) = 3 -> (3 % 10) = 0

//updating sum = 33 -> 6

sumOfDigits("zbax", 2); //8
