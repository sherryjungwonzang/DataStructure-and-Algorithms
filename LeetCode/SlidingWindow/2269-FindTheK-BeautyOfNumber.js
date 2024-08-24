//2269. Find The K-Beauty Of Number
//the k-beauty of an integer num is defined as the number of substrings of nums
//when it is read as a string that meet the following conditions:
//it has a length of k
//if is a divisor of num

//given integers num and k
//return the k-beauty of num

//Approach:
//using sliding window
var kbeautyNumber = (num, k) => {
    let res = 0;
    let winStr = ''; //to store sliding window value
    let numStr = num.toString(); //convert num to string

    for (let winStart = 0; winStart < numStr.length; winStart++) {
        winStr += numStr[winStart];

        if (winStart >= k - 1) {
            if (num % Number(winStr) === 0) res++; //checking divisor

            winStr = winStr.substr(1, winStr.length);
        }
    }

    return res;
}
kbeautyNumber(240, 2); //2
//"24" from "240": 24 is a divisor of 240
//"40" from "240": 40 is a divisor of 240
//Therefore, the k-beauty is 2

//winStr = ''
//res = 0
//numStr = "240"

//winStart = 0 -> 2 4 0
//                -
//winStr = "2"

//winStart = 1 -> 2 4 0
//                ---
//winStr = "24"
//winStart = k - 1 = 1
//check divisor of not: 240 % 24 = 0 -> res = 0 -> 1
//winStr = "24" -> "4"

//winStart = 2 -> 2 4 0
//                  ---
//winStr = "40"
//winStart > k - 1 = 1
//check divisor of not: 240 % 40 = 0 -> res = 0 -> 1 -> 2
//winStr = "40" -> "0"

kbeautyNumber(430043, 2); //2
//- "43" from "430043": 43 is a divisor of 430043.
//"30" from "430043": 30 is not a divisor of 430043.
//"00" from "430043": 0 is not a divisor of 430043.
//"04" from "430043": 4 is not a divisor of 430043.
//"43" from "430043": 43 is a divisor of 430043.
//Therefore, the k-beauty is 2.

//winStr = ''
//res = 0
//numStr = "430043"

//winStart = 0 -> 4 3 0 0 4 3
//                -
//winStr = "4"

//winStart = 1 -> 4 3 0 0 4 3
//                ---
//winStr = "43"
//winStart = k - 1 = 1
//check divisor of not: 430043 % 43 = 0 -> res = 0 -> 1
//winStr = "43" -> "3"


//winStart = 2 -> 4 3 0 0 4 3
//                  ---
//winStr = "30"
//winStart > k - 1 = 1
//check divisor of not: 430043 % 43 != 0 -> not a divisor
//winStr = "30" -> "0"

//winStart = 3 -> 4 3 0 0 4 3
//                    ---
//winStr = "00"
//winStart > k - 1 = 1
//check divisor of not: 430043 % 00 != 0 -> not a divisor
//winStr = "00" -> "0"

//winStart = 4 -> 4 3 0 0 4 3
//                      ---
//winStr = "04"
//winStart > k - 1 = 1
//check divisor of not: 430043 % 00 != 0 -> not a divisor
//winStr = "04" -> "4"

//winStart = 5 -> 4 3 0 0 4 3
//                        ---
//winStr = "43"
//check divisor of not: 430043 % 43 = 0 -> res = 0 -> 1 -> 2
//winStr = "43" -> "3"

