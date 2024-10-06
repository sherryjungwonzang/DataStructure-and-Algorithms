//728. Self Dividing Numbers
//a self-dividing number is a number that is divisible by every digit it contains
//for example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0
//a self-dividing number is not allowed to contain the digit zero
//given two integers left and right
//return a list of all the self-dividing numbers in the range [left, right] (both inclusive)
var selfDividingNum = (left, right) => {
    let res = [];

    //traversing all numbers in range
    for (let i = left; i <= right; i++) {
        let digit = i;
        let valid = true;

        //traversing all digits
        while (digit > 1) {
            let lastDigit = digit % 10;

            //checking non self-dividing
            if (!lastDigit || i % lastDigit !== 0) {
                //not self-dividing
                valid = false;

                break;
            }

            //remove last digit
            digit = Math.floor(digit / 10);
        };

        //self-dividing
        if (valid) res.push(i);
    }

    return res;
}
selfDividingNum(left = 1, right = 22); //[1,2,3,4,5,6,7,8,9,11,12,15,22]
//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//       ^
//digit = 1 || valid = true
//res = [ 1, ] 

//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//          ^
//digit = 2 || valid = true
//lastDigit = 2 % 10 = 2 -> 2 % 2 = 0: self dividing
//digit = 2 -> floor(2 / 10) = 0
//res = [ 1, 2, ] 

//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//             ^
//digit = 3 || valid = true
//lastDigit = 3 % 10 = 3 -> 3 % 3 = 0: self dividing
//digit = 3 -> floor(3 / 10) = 0
//res = [ 1, 2, 3, ]
//...
//res = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//                                   ^
//digit = 10 || valid = true
//lastDigit = 10 % 10 = 0 -> not self-dividing
//valid = true - > false
//res = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//                                       ^
//digit = 11 || valid = true
//lastDigit = 11 % 10 = 1 -> 11 % 1 = 0: self dividing
//digit = 11 -> floor(11 / 10) = 1
//res = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11 ]

//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//                                          ^
//digit = 12 || valid = true
//lastDigit = 12 % 10 = 2 -> 12 % 2 = 0: self dividing
//digit = 12 -> floor(12 / 10) = 1
//res = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12 ]

//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//                                               ^
//digit = 13 || valid = true
//lastDigit = 13 % 10 = 3 -> 13 % 3 = 1 :not self-dividing
//valid = true - > false
//res = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12 ]

//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//                                                  ^
//digit = 14 || valid = true
//lastDigit = 14 % 10 = 4 -> 14 % 4 = 4 :not self-dividing
//valid = true - > false
//res = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12 ]

//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//                                                       ^
//digit = 15 || valid = true
//lastDigit = 15 % 10 = 5 -> 15 % 5 = 0: self dividing
//digit = 15 -> floor(15 / 10) = 1
//res = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15 ]

//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//                                                          ^
//digit = 16 || valid = true
//lastDigit = 16 % 10 = 6 -> 16 % 6 = 4 :not self-dividing
//valid = true - > false
//res = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15 ]

//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//                                                              ^
//digit = 17 || valid = true
//lastDigit = 17 % 10 = 7 -> 17 % 7 = 3 :not self-dividing
//valid = true - > false
//res = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15 ]

//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//                                                                   ^
//digit = 18 || valid = true
//lastDigit = 18 % 10 = 8 -> 18 % 8 = 2 :not self-dividing
//valid = true - > false
//res = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15 ]

//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//                                                                      ^
//digit = 19 || valid = true
//lastDigit = 19 % 10 = 9 -> 19 % 9 = 1 :not self-dividing
//valid = true - > false
//res = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15 ]

//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//                                                                          ^
//digit = 20 || valid = true
//lastDigit = 20 % 10 = 0 -> 20 % 10 = 0 :not self-dividing
//valid = true - > false
//res = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15 ]

//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//                                                                              ^
//digit = 21 || valid = true
//lastDigit = 21 % 10 = 1 -> 21 % 1 = 0 :not self-dividing
//valid = true - > false
//res = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15 ]

//range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
//                                                                                   ^
//digit = 22 || valid = true
//lastDigit = 22 % 10 = 2 -> 22 % 2 = 0: self dividing
//digit = 22 -> floor(22 / 10) = 2
//res = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22 ]

selfDividingNum(left = 47, right = 85); //[48,55,66,77]
