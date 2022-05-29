//Add Binary
//given two strings a and b
//return their sum as a bunary string

//bit-by-bit computation
var addBinary = (a, b) => {
    //i and j are the indices of the digits in the strings
    let i = a.length - 1;
    let j = b.length - 1;

    let carry = 0; //carry bit for addition of two digits
    let result = ''; //string to hold the result of the addition of a and b in binary form

    //while there are still digits to process
    while(i >= 0 || j >= 0) {
        let sum = carry;  //add the carry to sum

        if (i >= 0) sum += a[i--] - '0'; //add in the next digit of a

        if (j >= 0) sum += b[j--] - '0'; //add in the next digit of b

        result = (sum % 2) + result; //store the next digit
        carry = Math.floor(sum / 2); //calculate the next carry
    }
    //return carry ? carry + result : result; 
    if (carry != 0) {
        result = 1 + result;
    }
    return result;
};
