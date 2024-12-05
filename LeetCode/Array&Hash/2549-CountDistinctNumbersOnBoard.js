//2549. Count Distinct Numbers On Board
//given a positive integer n, that is initially placed on a board
//every day, for 109 days, you perform the following procedure:
//for each number x present on the board, find all numbers 1 <= i <= n such that x % i == 1
//then, place those numbers on the board
//return the number of distinct integers present on the board after 109 days have elapsed

//note:
//once a number is placed on the board, it will remain on it until the end
//% stands for the modulo operation. For example, 14 % 3 is 2
var countDistinctNumbers = (n) => {
    //base case
    if (n === 1 || n === 2) return 1;

    if (n > 2) {
        if (n % (n - 1) === 1) return n - 1;
    }
}
countDistinctNumbers(n = 5); //4
//n = 5
//-> 5 % 4 = 1
//4

//-> 4 % 3 = 1
//3

//-> 3 % 2 = 1
//2

//-> n = 2 -> return 1

//4

countDistinctNumbers(n = 3); //2
//n = 3 -> 3 % 2 = 1
//2

//-> n = 2 -> return 1

//2
