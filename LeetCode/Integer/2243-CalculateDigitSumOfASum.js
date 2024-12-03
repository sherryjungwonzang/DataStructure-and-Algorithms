//2243. Calculate Digit Sum Of A Sum
//given a string s consisting of digits and an integer k
//a round can be completed if the length of s is greater than k

//in one round, do the following:
//divide s into consecutive groups of size k such that the first k characters are in the first group, the next k characters are in the second group, and so on
//note that the size of the last group can be smaller than k
//replace each group of s with a string representing the sum of all its digits
//for example, "346" is replaced with "13" because 3 + 4 + 6 = 13
//merge consecutive groups together to form a new string
//if the length of the string is greater than k, repeat from step 1
//return s after all rounds have been completed
var calculateDigitSum = (s, k) => {
    while (s.length > k) {
        let str = "";

        for (let i = 0; i < s.length; i += k) {
            //substring and add all integers
            str += s.substring(i, i + k).split("").reduce((a, b) => +a + +b);
        }
        
        //updating
        s = str;
    }

    return s;
}
calculateDigitSum("11111222223", 3); //"135"
// 1 1 1 1 1 2 2 2 2 2 3
// ^
//substring(0, 3) = "111" -> 1, 1, 1 -> 1 + 1 + 1 = 3
//str = '' -> "3"

// 1 1 1 1 1 2 2 2 2 2 3
//       ^
//substring(3, 6) = "112" -> 1, 1, 2 -> 1 + 1 + 2 = 4
//str = '' -> "3" -> "34"

// 1 1 1 1 1 2 2 2 2 2 3
//             ^
//substring(6, 9) = "222" -> 2, 2, 2 -> 2 + 2 + 2 = 6
//str = '' -> "3" -> "34" -> "346"

// 1 1 1 1 1 2 2 2 2 2 3
//                   ^
//substring(9, 12) = "23" -> 2, 3 -> 2 + 3 = 5
//str = '' -> "3" -> "34" -> "346" -> "3465"

//s = 3465
// 3 4 6 5
// ^
//substring(0, 3) = "346" -> 3, 4, 6 -> 3 + 4 + 6 = 13
//str = '' -> "3" -> "34" -> "346" -> "3465" -> "13"

//s = 3465
// 3 4 6 5
//       ^
//substring(4) = "5" -> 5 -> 5  = 5
//str = '' -> "3" -> "34" -> "346" -> "3465" -> "13" -> "135"

//s = 135 = k

calculateDigitSum("00000000", 3); //"000"
