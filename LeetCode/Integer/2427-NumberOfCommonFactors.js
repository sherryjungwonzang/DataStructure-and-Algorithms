//2427. Number Of Common Factors
//given two positive integers a and b
//return the number of common factors of a and b
//an integer x is a common factor of a and b if x divides both a and b
var numCommonFactors = (a, b) => {
    let count = 0; //to count common factors

    for (let i = 1; i<= Math.min(a, b); i++) {
        //both are divisible -> common factors
        a % i === 0 && b % i === 0 ? count++ : 0;
    }

    return count;
}
numCommonFactors(12, 6); //4 - 1, 2, 3, 6
//i = 1 -> 12 % 1 = 0       i = 2 -> 12 % 2 = 0       i = 3 -> 12 % 3 = 0
//         6 % 1 = 0                 6 % 2 = 0                 6 % 3 = 0
//count = 0 -> 1            count = 0 -> 1 -> 2       count = 0 -> 1 -> 2 -> 3

//i = 4 -> 12 % 4 = 0          i = 5 -> 12 % 5 != 0           i = 6 -> 12 % 6 = 0
//         6 % 4 != 0                   6 % 5 != 0                     6 % 6 = 0
//count = 0 -> 1 -> 2 -> 3     count = 0 -> 1 -> 2 -> 3       count = 0 -> 1 -> 2 -> 3 -> 4

numCommonFactors(25, 30); //2 - 1, 5
