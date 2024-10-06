//1952. Three Divisors
//given an integer n
//return true if n has exactly three positive divisors, otherwise return false
//an integer m is a divisor of n if there exists an integer k such that n = k * m
var threeDivisors = (n) => {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        //divisors
        if (n % 1 === 0) count++;
    }

    return count === 3;
}
threeDivisors(2); //false - having only 1 and 2
//i = 1 -> 2 % 1 = 0
//count = 0 -> 1

//i = 2 -> 2 % 2 = 0
//count = 0 -> 1 -> 2
//not 3

threeDivisors(4); //true - 1, 2, and 4
//i = 1 -> 4 % 1 = 0
//count = 0 -> 1

//i = 2 -> 4 % 2 = 0
//count = 0 -> 1 -> 2

//i = 3 -> 4 % 3 != 0
//count = 0 -> 1 -> 2 -> 2

//i = 4 -> 4 % 4 = 0
//count = 0 -> 1 -> 2 -> 2 -> 3
//true
