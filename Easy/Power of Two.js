//Power of Two
//given an integer n
//return two if it is a power of two
//n is power of 2-> n == 2**x

//Approach: Bitwise Operation
/*
ex:
0000 0001 = 1
0000 0010 = 2 -> n-1 = 0000 0001
0000 0100 = 4 -> n-1 = 0000 0011
0000 1000 = 8 -> n-1 = 0000 0111
0001 0000 = 16 -> n-1 = 0000 1111
0010 0000 = 32 -> n-1 = 0001 1111
*/

//using n-1 as a mask
//if n & n-1 == 0 means that n is power of 2
var isPowerOfTwo = (n) => {
    return (Math.log2(n) % 1 === 0);
}


//Approach: Recursive
var isPowerOfTwo = (n) => {
    if (n == 1) {
        return true;
    } else if (n <= 0) {
        return false;
    }

    if (n % 2 !== 0) {
        return false;
    } else {
        return isPowerOfTwo(Math.floor(n / 2));
    }
}
