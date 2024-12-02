//2264. Largest 3 Same Digit Number In String
//given a string num representing a large integer

//an integer is good if it meets the following conditions:
//it is a substring of num with length 3
//it consists of only one unique digit
//return the maximum good integer as a string or an empty string "" if no such integer exists

//note:
//a substring is a contiguous sequence of characters within a string
//there may be leading zeroes in num or a good integer
var largestThreeSameDigit = (num) => {
    let max = "";

    for (let i = 2; i < num.length; i++) {
        //3 smae digit num
        if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
            let subStr = num[i].repeat(3);

            //updating
            if (subStr > max) max = subStr;
        }
    }

    return max;
}
largestThreeSameDigit("6777133339"); //"777"
// 6 7 7 7 1 3 3 3 3 9
//     ^
//7 = 7 & 7 != 6 -> not 3 same digit number

// 6 7 7 7 1 3 3 3 3 9
//       ^
//7 = 7 & 7 = 7 -> 3 same digit number
//subStr = 777
//max = '' -> "777"

// 6 7 7 7 1 3 3 3 3 9                                  6 7 7 7 1 3 3 3 3 9                                     6 7 7 7 1 3 3 3 3 9     
//         ^                                                      ^                                                         ^
//1 != 7 & 1 != 7 -> not 3 same digit number            3 != 1 & 3 != 7 -> not 3 same digit number              3 = 3 & 3 != 1 -> not 3 same digit number

// 6 7 7 7 1 3 3 3 3 9
//               ^
//3 = 3 & 3 = 3 -> 3 same digit number
//subStr = 333 < 777
//max = '' -> "777" -> "777"

// 6 7 7 7 1 3 3 3 3 9
//                 ^
//3 = 3 & 3 = 3 -> 3 same digit number
//subStr = 333 < 777
//max = '' -> "777" -> "777" -> "777"

// 6 7 7 7 1 3 3 3 3 9
//                   ^
//9 != 3 & 9 != 3 -> not 3 same digit number

//max = "777"

largestThreeSameDigit("2300019"); //"000"

largestThreeSameDigit("42352338"); //""
