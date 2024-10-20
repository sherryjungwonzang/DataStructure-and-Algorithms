//357. Count Numbers With Unique Digits
//given an integer n
//return the count of all numbers with unique digits, x, where 0 <= x < 10^n

//Approach:
//using recursion
var uniqueDigits = (n) => {
    //base case
    if (n === 0) return 1;
    if (n === 1) return 10;

    let res = 9;

    for (let i = 0; i < n - 1; i++) {
        res *= 9 - i;
    }

    //recursive call
    return res + countNumbersWithUniqueDigits(n - 1);
}
uniqueDigits(3); //739
//n = 3 -> 0 <= x <= 1000
//res = 9
//i = 0 -> res = 9 * (9 - 0) = 81
//i = 1 -> res = 9 * 9 * (9 - 1) = 648
//648 + recurse(3 - 1 = 2)

//n = 2 -> 0 <= x <= 100
//res = 9
//i = 0 -> res = 9 * (9 - 0) = 81
//81 + recurse(2 - 1 = 1) = 81 + 10 = 91

//648 + recurse(3 - 1 = 2) = 648 + 91 = 739

uniqueDigits(2); //91 - excluding 11,22,33,44,55,66,77,88,99
//n = 2 -> 0 <= x <= 100
//res = 9
//i = 0 -> res = 9 * (9 - 0) = 81
//81 + recurse(2 - 1 = 1)

//as n = 1 is 10 with base case
//81 + 10 = 91

uniqueDigits(0); //1
