//Bit Manipulation
//Number Operations
//how to perform addition, subtraction, multiplication, division and modulus using bitwise operators

//1. Addition
//adding bunary numbers is no different from adding decimal numbers
//add up to two numbers and carry 1 to next digit if it exceeds 10
function BitwiseAdd(a, b) {
    while(b != 0) {
        var carry = (a & b);
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}
console.log(BitwiseAdd(4, 5)) //9


//2. Subtraction
//the difference of two numbers
//create a negate function using the NOT operator
//subtracting a negative binary number from a positive one is obtained by inverting all the bits and adding 1
function BitwiseNegate(a) {
    return BitwiseAdd(~a, 1);
}
console.log(BitwiseNegate(9));
console.log(BitwiseNegate(BitwiseNegate(9)));

function BitwiseSubtract(a, b) {
    return BitwiseAdd(a, BitwiseNegate(b));
}
console.log(BitwiseSubtract(5, 4)); //1


//3. Multiplication
//in base 2 follows the same logic as multiplying numbers in base 2
//multiply the numbers, carry anything over 10 to the next digit
//and then multiply the next digit with the shifted base: in the case of decimals, multiply by 10 each time you shift the digit
function BitwiseMultiply(a, b) {
    var m = 1;
    var c = 0;

    if (a < 0) {
        a = BitwiseNegate(a);
        b = BitwiseNegate(b);
    }
    while (a >= m && b) {
        if (a & m) {
            c = BitwiseAdd(b, c);
        }
        b = b << 1;
        m = m << 1;
    }
    return c;
}
console.log(BitwiseMultiply(4, 5));


//4. Division
//as the num of times you can subtract b from a, given a/b
function BitwiseDividePositive(a, b) {
    var c = 0;

    if (b != 0) {
        while (a >= b) {
            a = BitwiseSubtract(a, b);
            c++;
        }
    }
    return c;
}
console.log(BitwiseDividePositive(10, 2)); //5

function BitwiseDivide(a, b) {
    var c = 0;
    var isNegative = 0;

    if (a < 0) {
        a = BitwiseNegate(a); //convert to positive
        isNegative = !isNegative;
    }

    if (b < 0) {
        b = BitwiseNegate(b); //convert to positive
        isNegative = !isNegative;
    }

    if (b != 0) {
        while(a >= b) {
            a = BitwiseSubtract(a, b); 
            c++;
        }
    }

    if (isNegative) {
        c = BitwiseNegate(c);
    }
    return c;
}
console.log(BitwiseDivide(10, 2)); //5
console.log(BitwiseDivide(-10, 2)); //-5
console.log(BitwiseDivide(-200, 4)); //-50
