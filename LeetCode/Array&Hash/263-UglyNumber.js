//263. Ugly Number
//an ugly number is a positive integer whose prime factors are limited to 2, 3, and 5
//given an integer n
//return true if n is an ugly number
var uglyNumber = (n) => {
    //base case
    if (!n) return false;

    while (n > 1) {
        if (n % 2 === 0) n /= 2;
        else if (n % 3 === 0) n /= 3;
        else if (n % 5 === 0) n /= 5;
        return false;
    }

    return n === 1;
}
//TC: O(n)
//SC: O(1)
uglyNumber(6); //true - 2 x 3
//6 % 2 === 0
//n = 6 -> 3

//3 % 2 != 0 -> 3 % 3 = 0
//n = 6 -> 3 -> 1
//return true

uglyNumber(1); //true - 1 has no prime factors, therefor all of its prime factors are limited to 2, 3, and 5

uglyNumber(14); //false - it includes 7 as prime
//14 % 2 === 0
//n = 14 -> 7

//7 % 2 != 0 -> 7 % 3 != 0 -> 7 % 5 != 0
//return false
