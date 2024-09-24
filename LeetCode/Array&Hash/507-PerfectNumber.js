//507. Perfect Number
//a perfect number is a positive integer that is equal to the sum of its positive divisors
//excluding the number itself
//a divisor of an integer x is an integer that can divide x evenly
//given an integer n
//return true if n is a perfect number, otherwise return false
var perfectNumber = (num) => {
    let count = 0;

    for (let i = 1; i <= num / 2; i++) {
        //perfect number
        if (num % i === 0) count += i;
    }

    return num === count;
}
perfectNumber(28); //true - 1 + 2 + 4 + 7 + 14 = 28
//starting from 1 to 28 / 2 = 14
//28 % 1 === 0 -> perfect number
//count = 0 -> 1

//28 % 2 === 0 -> perfect number
//count = 0 -> 1 -> 3

//28 % 4 === 0 -> perfect number
//count = 0 -> 1 -> 3 -> 7

//28 % 7 === 0 -> perfect number
//count = 0 -> 1 -> 3 -> 7 -> 14

//28 % 14 === 0 -> perfect number
//count = 0 -> 1 -> 3 -> 7 -> 14 -> 28

perfectNumber(7); //false
