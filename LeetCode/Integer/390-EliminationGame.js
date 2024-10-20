//390. Elimination Game
//you have a list arr of all integers in the range [1, n] sorted in a strictly increasing order
//apply the following algorithm on arr:
//starting from left to right, remove the first number and every other number afterward until you reach the end of the list
//repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers
//keep repeating the steps again, alternating left to right and right to left, until a single number remains

//given the integer n
//return the last number that remains in arr
var eliminationGame = (n) => {
    let res = 1;
    let diff = 1;
    let direction = false;
    
    while(n > 1) {
        //from left to right or odd
        if(n % 2 === 1 || direction === false) res += diff;

        //remaining elements count
        n = Math.floor(n / 2);

        //meaning the diff between gap
        diff *= 2;

        //changing the direction
        direction = !direction;
    }

    return res;
}
eliminationGame(9); //6
//arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//arr = [2, 4, 6, 8]
//arr = [2, 6]
//arr = [6]

//res = 1
//diff = 1
//direction = false

//n = 9 -> 9 % 2 = 1 & direction = false
//res = 1 -> 2
//diff = 1 -> 2
//direction = false -> true
//9 / 2 = 4

//n = 4 -> 4 % 2 != 1 & direction = true
//res = 1 -> 2 -> 2
//diff = 1 -> 2 -> 4
//direction = false -> true -> false
//4 / 2 = 2

//n = 2 -> 2 % 2 != 1 & direction = false
//res = 1 -> 2 -> 2 -> 6
//diff = 1 -> 2 -> 4 -> 8
//direction = false -> true -> false -> true
//2 / 2 = 1

eliminationGame(1); //1
