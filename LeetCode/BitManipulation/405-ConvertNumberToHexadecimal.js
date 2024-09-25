//405. Convert Number To Hexadecimal
//given a 32-bit integer num
//return a string representing its hexadecimal representation
//for negative integers, two's complement method is used
//all the letters in the answer string should be lowercase characters
//and there should not be any leading zeroes in the answer except for the zero itself

//Approach:
//using bit-wise operation
var numToHex = (num) => {
    //base case
    if (num === 0) return "0";

    let res = [];
    let hex = "0123456789abcdef";

    while(num !== 0 && res.length < 8) {
        res.unshift(hex[num & 0xf]); //adding from the front

        //right shift
        num >>>= 4;
    }

    return res.join('');
}
numToHex(26); //"1a"
//26 & 0xf = 26 & 15 = 10
//[10] = "a"
//res = [ a ]
//26 >>> 4 = 11010 >>> 4 = 00001

//1 & 0xf = 1 & 15 = 1
//[1] = "1"
//res = [ 1 a ]
//1 >>> 4 = 00001 >>> 4 = 00000

//join() -> "1a"

numToHex(-1); //"ffffffff"
