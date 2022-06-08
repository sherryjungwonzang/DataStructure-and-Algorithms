//Reverse Integer
//given a signed 32-bit integer x
//return x with its digits reversed
//if reversing x causes the value to go outside the signed 32-bit integer


//Approach1: Pop and Push digits
var reverse = (x) => {
    let revert = 0;

    const isNegative = x < 0 ? true : false;

    //x = Math.abs(x)
    if (isNegative) x = -1 * x;

    for (let i = x; i; i = Math.trunc(i / 10)) { //trunc(): returns the integer part of a number by removing any fractional digits
        revert = revert * 10 + i % 10;
    }

    if (revert >= 2147483648) return 0;

    return isNegative ? -revert : revert;
}


//Approach2: String reverse
var reverse = (x) => {
    const number = Math.abs(x).toString().split('').reverse().join('');

    if (number > Math.pow(2, 31) - 1) return 0;

    return x < 0 ? -number : number;
}

