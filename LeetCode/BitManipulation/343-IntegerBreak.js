//343. Integer Break
//given an integer n
//break it into the sum of k positive integers, where k >= 2 and maximize the product of those integers
//return the max productyou can get

//Approach:
//using brute-force approach
var integerBreak = (n) => {
    //base case
    if (n <= 3) return n - 1;

    let count = Math.floor(n / 3); //count of 3
    let remainder = n % 3;

    if (remainder === 0) return 3 ** count; //perfect multiple of 3
    else if (remainder === 1) return 3 ** (count - 1) * 4; // product of 3, 1, and n - 4 is less than the product of two numbers 4 and n - 4
    else return 3 ** count * 2; //multiply the leftover 2 with product of all 3s
}
//TC: O(logn)
//SC:O(1)
integerBreak(2); //1 - 1 + 1 = 2, 1 x 1 = 1

integerBreak(10); //36 - 3 + 3 + 4 = 10, 3 x 3 x 4 = 36
//count = floor(10 / 3) = 3
//remainder = 10 % 3 = 1
//-> 3 ** (3 - 1) * 4 = 36

integerBreak(44); //9565938
//count = floor(44 / 3) = 14
//remainder = 44 % 3 = 2
//-> 3 ** 14 * 2 = 9565938

