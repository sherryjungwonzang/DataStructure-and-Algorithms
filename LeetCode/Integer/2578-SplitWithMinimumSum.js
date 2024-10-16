//2578. Split With Minimum Sum
//given a positive integer num, split it into two non-negative integers num1 and num2 such that:
//the concatenation of num1 and num2 is a permutation of num
//in other words, the sum of the number of occurrences of each digit in num1 and num2 is equal to the number of occurrences of that digit in num
//num1 and num2 can contain leading zeros
//return the minimum possible sum of num1 and num2

//Notes:
//it is guaranteed that num does not contain any leading zeros
//the order of occurrence of the digits in num1 and num2 may differ from the order of occurrence of num

//Approach:
//using toString and sorting
var splitMinSum = (num) => {
    //sorting
    num = num.toString().split('').sort((a, b) => a - b);

    let str1 = '';
    let str2 = '';

    for (let i = 0; i < num.length; i++) {
        if (i % 2) str1 += num[i]; //even
        else str2 += num[i]; //odd
    }

    return Number(str1) + Number(str2);
}
splitMinSum(4325); //59 - num1 is 24 and num2 is 35, giving a sum of 59
//sorting: 2 3 4 5

//i = 0 -> "2": even    || i = 1 -> "3": odd
//str1 = 2                 str2 = 3

//i = 3 -> "4": even    || i = 3 -> "5": odd
//str1 = 24                 str2 = 35
//24 + 35 = 59

splitMinSum(687); //75 - num1 is 68 and num2 is 7, which would give an optimal sum of 75
//sorting: 6 7 8

//i = 0 -> "6": even    || i = 1 -> "7": odd 
//str1 = 6                 str2 = 7

//i = 6 -> "8": even
//str1 = 68
//68 + 7 = 75
