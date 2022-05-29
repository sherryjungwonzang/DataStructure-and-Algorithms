//Plus One
//given a large integer represented as integer array digits
//each digits[i] is the ith digit of the integer
//the digits are ordered from most significant to least siginificant in left-to-right order
//the large integer does not contain any leading 0's
//ex: input digits: [4,3,2,1] || [9]
//ex: output: [4,3,2,2] || [1,0]
var plusOne = (digits) => {
    for (i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        } else {
            digits[i] = 0
        }
    }
    return [1, ...digits]; //...: spread operator for iterating over either arrays, plain objects or arguments of a function
};

//Another TypeScript solution
function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] == 9) {
            digits[i] = 0;
        } else {
            digits[i] += 1;
            return digits;
        }
    }

    if (digits[0] == 0) digits.unshift(1);
    //unshift(): add one or more elements to the beginning of an array and returns the new length of the array
    
    return digits;
};
