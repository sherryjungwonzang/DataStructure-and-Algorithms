//1422. Maximum Score After Splitting A String
//given a string s of zeroes and ones
//return the maximum score after splitting the string into two non-empty substrings - left substring and right substring
//the score after splitting a string is the number of zeroes in the left substring 
//plus the number of ones in the right substring

//Approach:
//using prefix sum
var maxScoreAfterSplitting = (s) => {
    let score = 0;
    let zeroLeft = 0; //zeroes to left
    let oneRight = s.split("1").length - 1; //the count of 1s

    for (let i = 0; i < s.length - 1; i++) {
        zeroLeft += s[i] === "0" ? 1: 0; //adding
        oneRight -= s[i] === "1" ? 1 : 0; //subtracting

        score = Math.max(score, zeroLeft + oneRight);
    }

    return score;
}
//TC: O(n)
//SC: O(1)
maxScoreAfterSplitting("011101"); //5
//left = "0" and right = "11101", score = 1 + 4 = 5 
//left = "01" and right = "1101", score = 1 + 3 = 4 
//left = "011" and right = "101", score = 1 + 2 = 3 
//left = "0111" and right = "01", score = 1 + 1 = 2 
//left = "01110" and right = "1", score = 2 + 1 = 3

//zeroLeft = 0
//s.split("1") -> ["0", "", "", "", "0", ""]
//oneRight = 5 - 1 = 4

//"0 1 1 1 0 1"
// ^
//zeroLeft = 0 -> 1
//oneRight = 4
//score = 0 -> max(0, 4 + 1 = 5) = 5

//"0 1 1 1 0 1"
//   ^
//zeroLeft = 0 -> 1
//oneRight = 4 -> 3
//score = 0 -> max(0, 4 + 1 = 5) = 5 -> (5, 1 + 3 = 4) = 5

//"0 1 1 1 0 1"
//     ^
//zeroLeft = 0 -> 1
//oneRight = 4 -> 3 -> 2
//score = 0 -> max(0, 4 + 1 = 5) = 5 -> (5, 1 + 3 = 4) = 5 -> (5, 2 + 1 = 3) = 5

//"0 1 1 1 0 1"
//       ^
//zeroLeft = 0 -> 1
//oneRight = 4 -> 3 -> 2 -> 1
//score = 0 -> max(0, 4 + 1 = 5) = 5 -> (5, 1 + 3 = 4) = 5 -> (5, 2 + 1 = 3) = 5 -> (5, 1 + 1 = 2) = 5

//"0 1 1 1 0 1"
//         ^
//zeroLeft = 0 -> 1 -> 2
//oneRight = 4 -> 3 -> 2 -> 1
//score = 0 -> max(0, 4 + 1 = 5) = 5 -> (5, 1 + 3 = 4) = 5 -> (5, 2 + 1 = 3) = 5 -> (5, 1 + 1 = 2) = 5 -> (5, 2 + 1 = 3) = 5

//"0 1 1 1 0 1"
//           ^
//zeroLeft = 0 -> 1 -> 2
//oneRight = 4 -> 3 -> 2 -> 1 -> 0
//score = 0 -> max(0, 4 + 1 = 5) = 5 -> (5, 1 + 3 = 4) = 5 -> (5, 2 + 1 = 3) = 5 -> (5, 1 + 1 = 2) = 5 -> (5, 2 + 1 = 3) = 5 -> (5, 2 + 0 = 2) = 5

maxScoreAfterSplitting("00111"); //5 - left = "00" and right = "111", we get the maximum score = 2 + 3 = 5
//zeroLeft = 0
//s.split("1") -> ["00", "", "", ""]
//oneRight = 4 - 1 = 3

//"0 0 1 1 1"
// ^
//zeroLeft = 0 -> 1
//oneRight = 3
//score = 0 -> max(0, 3 + 1 = 4) = 4

//"0 0 1 1 1"
//   ^
//zeroLeft = 0 -> 1 -> 2
//oneRight = 3
//score = 0 -> max(0, 3 + 1 = 4) = 4 -> (4, 2 + 3 = 5)

//"0 0 1 1 1"
//     ^
//zeroLeft = 0 -> 1 -> 2
//oneRight = 3 -> 2
//score = 0 -> max(0, 3 + 1 = 4) = 4 -> (4, 2 + 3 = 5) -> (5, 2 + 2 = 4) = 5

//"0 0 1 1 1"
//       ^
//zeroLeft = 0 -> 1 -> 2
//oneRight = 3 -> 2 -> 1
//score = 0 -> max(0, 3 + 1 = 4) = 4 -> (4, 2 + 3 = 5) -> (5, 2 + 2 = 4) = 5 -> (5, 2 + 1 = 3) = 5

//"0 0 1 1 1"
//         ^
//zeroLeft = 0 -> 1 -> 2
//oneRight = 3 -> 2 -> 1 -> 0
//score = 0 -> max(0, 3 + 1 = 4) = 4 -> (4, 2 + 3 = 5) -> (5, 2 + 2 = 4) = 5 -> (5, 2 + 1 = 3) = 5 -> (5, 2 + 0 = 2) = 5

maxScoreAfterSplitting("1111"); //3

