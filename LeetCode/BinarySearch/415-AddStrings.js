//415. Add Strings
//given two non-negative integers num1 and num2 represented as string
//return the sum of num1 and num2 as a string

//Approach:
//using two pointers
var addStrings = (num1, num2) => {
    let m = num1.length;
    let n = num2.length;
    let res = "";
    let carry = 0;

    //two pointers
    let i = m - 1;
    let j = n - 1;

    while (i >= 0 || j >= 0) {
        let sum1 = i < 0 ? 0 : parseInt(num1.charAt(i));
        let sum2 = j < 0 ? 0 : parseInt(num2.charAt(j));
        let total = sum1 + sum2 + carry;
        
        let final = total % 10;

        //update carry
        carry = Math.floor(total / 10);

        res = final + res;
        i--;
        j--;
    } 

    if (carry === 1) res = carry + res;

    return res;
}
addStrings("11", "123"); //"134"
//        1  1  -> nums1
//     1  2  3  -> nums2
//     -----------

//i = 1, j = 2         --------> i = 0, j = 1       ----->  j = 0
//sum1 = parseInt(1) = 1        = parseInt(0) = 1
//sum2 = parseInt(2) = 3        = parseInt(1) = 2           = parseInt(0) = 1
//total = 1 + 3 + 0 = 4         = 1 + 2 + 0 = 3             = 1 + 0 = 1
//final = 4 % 10 = 4            = 3 % 10 = 3                = 1 % 10 = 1
//carry = 0                     = 0                         = 0
//res = 4 + "" = "4"            = 3 + "4" = "34"            = 1 + "34" = "134"

addStrings("456", "77"); //"533"
//     4  5  6  -> nums1
//        7  7  -> nums2
//     -----------

//i = 2, j = 1         --------> i = 1, j = 0       ----->  i = 0
//sum1 = parseInt(1) = 6        = parseInt(1) = 5           = parseInt(0) = 4
//sum2 = parseInt(2) = 7        = parseInt(0) = 7           
//total = 6 + 7 + 0 = 13        = 5 + 7 + 1 = 13            = 4 + 1 = 5
//final = 13 % 10 = 3           = 13 % 10 = 3               = 5 % 10 = 0
//carry = 1                     = 1                         = 0
//res = 3 + "" = "3"            = 3 + "" = "33"             = 5 + "33" = "533"

addStrings("0", "0"); //"0"
