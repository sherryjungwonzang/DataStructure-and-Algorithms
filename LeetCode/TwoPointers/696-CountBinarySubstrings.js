//696. Count Binary Substrings
//given a binary string 's'
//return the number of non-empty substrings that have the same number of 0's and 1's
//and all the 0's and the 1's in these substrings are grouped consecutively
//substrings that occur multiple times are counted the number of times they occur

//Approach:
//using two pointers
var countBinarySubstrings = (s) => {
    let res = 0; 
    let prev = 0; //prev group
    let curr = 1; //curr group

    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] !== s[i]) {
            res += Math.min(prev, curr); //valid binary substrings count
            prev = curr; //update prev with curr
            curr = 1; //rest - encountering a different character
        } else {
            curr += 1;
        }
    }

    return res + Math.min(prev, curr); //adding remaining valid binary substrings
}
countBinarySubstrings("00110011"); //6 - There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01"
//"0 0 1 1 0 0 1 1"
// ^ ^
//0 = 0
//res = 0
//prev = 0
//curr = 1 -> 2

//"0 0 1 1 0 0 1 1"
//   ^ ^
//0 != 1
//res = 0 => min(0, 2) = 0
//prev = 0 -> 2
//curr = 1 -> 2 -> 1

//"0 0 1 1 0 0 1 1"
//     ^ ^
//1 = 1
//res = 0 => min(0, 2) = 0
//prev = 0 -> 2
//curr = 1 -> 2 -> 1 -> 2

//"0 0 1 1 0 0 1 1"
//       ^ ^
//1 != 0
//res = 0 => min(0, 2) = 0 -> min(2, 2) = 2
//prev = 0 -> 2 -> 2
//curr = 1 -> 2 -> 1 -> 2 -> 1

//"0 0 1 1 0 0 1 1"
//         ^ ^
//0 = 0
//res = 0 => min(0, 2) = 0 -> min(2, 2) = 2
//prev = 0 -> 2 -> 2
//curr = 1 -> 2 -> 1 -> 2 -> 1 -> 2

//"0 0 1 1 0 0 1 1"
//           ^ ^
//0 != 1
//res = 0 => min(0, 2) = 0 -> min(2, 2) = 2 -> (2, 2) = 4
//prev = 0 -> 2 -> 2 -> 2
//curr = 1 -> 2 -> 1 -> 2 -> 1 -> 2 -> 1

//"0 0 1 1 0 0 1 1"
//             ^ ^
//1 = 1
//res = 0 => min(0, 2) = 0 -> min(2, 2) = 2 -> (2, 2) = 4
//prev = 0 -> 2 -> 2 -> 2
//curr = 1 -> 2 -> 1 -> 2 -> 1 -> 2 -> 1 -> 2

//res + min(prev, curr) = 4 + 2 = 6

countBinarySubstrings("10101"); //4 - There are 4 substrings: "10", "01", "10", "01" 
//"1 0 1 0 1"
// ^ ^
//1 != 0
//res = 0 -> (0, 1) = 1
//prev = 0 -> 1
//curr = 1 -> 1

//"1 0 1 0 1"
//   ^ ^
//0 != 1
//res = 0 -> (0, 1) = 0 -> (1, 1) = 1
//prev = 0 -> 1 -> 1
//curr = 1 -> 1 -> 1

//"1 0 1 0 1"
//     ^ ^
//1 != 
//res = 0 -> (0, 1) = 0 -> (1, 1) = 1 -> (1, 1) = 2
//prev = 0 -> 1 -> 1 -> 1
//curr = 1 -> 1 -> 1 -> 1

//"1 0 1 0 1"
//       ^ ^
//0 != 1
//res = 0 -> (0, 1) = 0 -> (1, 1) = 1 -> (1, 1) = 2 -> (1, 1) = 3
//prev = 0 -> 1 -> 1 -> 1 -> 1
//curr = 1 -> 1 -> 1 -> 1 -> 1
