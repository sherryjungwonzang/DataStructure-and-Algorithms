var reverseBits = (n) => {
    var result = 0;
    var count = 32;

    while(count--) {
        result *= 2;
        result += n & 1;
        n = n >> 1;
    }
    return result;
}


//another solution
var reverseBits = (n) => {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        result <<= 1; //same with result *= 2
        result |= n & 1;
        n >>= 1;
    }
    return result >>> 0;
}


//another approach: Bitwise Operation
function reverseBits(n) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        //find the last bit of n
        const lastBit = n & 1;

        //shift the last bit of n to the left
        const reversedLastBit = lastBit << (31 - i); //position starts from 0
        //<<: shifts the first operand the specified number of bits to the left


        //insert the reversed last bit of n into the result
        result |= reversedLastBit; //|=: Bitwisr OR operation

        //the last but of n is already taken care of, so we need to drop it
        n >>>= 1;
    }

    //convert the result to an unsigned 32-bit integer
    return result >>> 0;
}
