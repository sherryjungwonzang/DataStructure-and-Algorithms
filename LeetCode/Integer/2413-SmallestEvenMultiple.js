//2413. Smallest Even Multiple
//given a positive integer n
//return the smallest positive integer that is a multiple of both 2 and n
var smallestEvenMultiple = (n) => {
    //odd - n * 2
    //even - return itself since that is smallest even 
    return n % 2 === 0 ? n : n * 2;
}
smallestEvenMultiple(5); //10 - the smallest multiple of both 5 and 2 is 10
//5 % 2 !== 0 -> odd
//5 * 2 = 10

smallestEvenMultiple(6); //6 - the smallest multiple of both 6 and 2 is 6
//6 % 2 = 0 -> even
//6
