//2614. Prime In Diagonal
//given a 0-indexed two-dimensional integer array nums
//return the largest prime number that lies on at least one of the diagonals of nums
//in case, no prime is present on any of the diagonals, return 0

//an integer is prime if it is greater than 1 and has no positive integer divisors other than 1 and itself
//an integer val is on one of the diagonals of nums if there exists an integer i for which nums[i][i] = val or an i for which nums[i][nums.length - i - 1] = val
var primeInDiagonal = (nums) => {
    let n = nums.length;
    let max = 0;

    //traversing
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            //checking two ways of diagonal
            if (i === j && isPrime(nums[i][j])) max = Math.max(max, nums[i][j]);
            
            if (j === n - i - 1 && isPrime(nums[i][j])) max = Math.max(max, nums[i][j]);
        }
    }
    
    //checking prime
    function isPrime(n) {
        //base case
        if (n === 1) return 0;

        //checking from 2
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return 0; //not prime
        }

        return 1; //prime
    };

    return max;
}
primeInDiagonal(nums = [[1,2,3],[5,6,7],[9,10,11]]); //11
//  1  2 3
//  5  6 7
//  9 10 11

//n = 3
//max = 0

//i = 0, j = 0 -> i = j: diagonal
//                [0][0] = "1" -> isPrime = "0": not prime
//             -> 0 != 3 - 0 - 1 = 2: not diagonal

//i = 0, j = 1 -> i != j: not diagonal
//             -> 1 != 3 - 0 - 1 = 2: not diagonal

//i = 0, j = 2 -> i != j: not diagonal
//             -> 2 = 3 - 0 - 1 = 2: diagonal
//                [0][2] = "3" -> i = 2 => 2 * 2 != 4 <= 3
//                isPrime = "1": prime
//max = 0 -> (0, 3) = 3

//i = 1, j = 0 -> i != j: not diagonal
//             -> 0 != 3 - 1 - 1 = 1: not diagonal

//i = 1, j = 1 -> i = j: diagonal
//                [1][1] = "6" -> i = 2 => 2 * 2 = 4 <= 6
//                             -> 6 % 2 = 0
//                isPrime = "0": not prime
//             -> 1 = 3 - 1 - 1 = 1: diagonal

//i = 1, j = 2 -> i != j: not diagonal
//             -> 2 != 3 - 1 - 1 = 1: not diagonal

//i = 2, j = 0 -> i != j: not diagonal
//             -> 0 = 3 - 2 - 1 = 0: diagonal
//                [2][0] = "9" -> i = 2 => 2 * 2 = 4 <= 9
//                             -> 9 % 2 != 0
//                isPrime = "1": prime
//                [2][0] = "9" -> i = 3 => 3 * 3 = 9 <= 9
//                             -> 9 % 3 = 0
//                isPrime = "0": not prime

//i = 2, j = 1 -> i != j: not diagonal
//             -> 1 != 3 - 2 - 1 = 0: not diagonal

//i = 2, j = 2 -> i = j: not diagonal
//                [2][2] = "11" -> i = 2 => 2 * 2 = 4 <= 11
//                             -> 11 % 2 != 0
//                isPrime = "1": prime
//                [2][2] = "11" -> i = 3 => 3 * 3 = 9 <= 9
//                             -> 11 % 3 != 0
//                isPrime = "1": prime
//             -> 2 != 3 - 2 - 1 = 0: not diagonal
//max = 0 -> (0, 3) = 3 -> (3, 11) = 11

primeInDiagonal(nums = [[1,2,3],[5,17,7],[9,11,10]]); //17
//  1  2 3
//  5  17 7
//  9 11 10
