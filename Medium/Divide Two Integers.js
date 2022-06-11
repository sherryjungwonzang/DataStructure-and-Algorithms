//Divide Two Integers
//given two integers: dividend, divisor
//divide integers without using multiplication, division and mod operator
//losing its fractional part
//return quotient after dividing dividend by divisor
/*
ex: 20 / 3 = 6 ... 2
20: dividend
3: divisor
2: remainder
*/

//Approach: Bit manipulation, Binary Search
var divide = (dividend, divisor) => {
    if (divisor === 0) return 0;
    if (dividend === 0) return 0;
    if (dividend === -2147483648 && divisor === -1) return 2147483648;

    var isPositive = true;
    if (dividend > 0 !== divisor > 0) isPositive = false;

    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);

    var count = 1;
    var result = 0;
    var base = divisor;

    while(dividend >= divisor) {
        count = 1;
        base = divisor;

        while(base <= (dividend >> 1)) {
            base = base << 1;
            count = count << 1;
        }
        result += count;
        dividend -= base;
    }
    if (!isPositive) result = -result;
    return result;
}


//another solution
var divide  = (dividend, divisor) => {
    let result = 0;

    const sign = Math.sign(dividend) === Math.sign(divisor);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while(dividend >= divisor) {
        let val = divisor;
        let times = 1;

        while(dividend >= val + val) {
            val += val;
            times += times;
        }

        dividend -= val;
        result += times;
    }
    
    if (result > 2 ** 31 - 1) return sign ? 2 ** 31 - 1 : -(2 ** 31);
    return sign ? result : -result;
}
