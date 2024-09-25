//868. Binary Gap
//given a positive integer n
//find and return the longest distance between any two adjacent 1's in the binary representation of n
//if there are no two adjacent 1's, return 0

//two 1's adjacent if there are only 0's separating them - possibly no 0's
//the distance between two 1's is the absolute difference between their bit positions
//for example, the two 1's in "1001" have a distance of 3

//Approach:
//using toString
var binaryGap = (n) => {
    let binary = n.toString(2);
    let res = 0;
    let endPoint = 0; //to calculate the length

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "1") {
            res = Math.max(res, i - endPoint); //updating max length

            endPoint = i;
        }
    }

    return res;
}
//TC: O(n)
//SC: O(1)
binaryGap(22); //2
//22 -> toString: 10110

// 1 0 1 1 0
// i
// -
//i = 1 -> max(0, 0 - 1) = 0
//res = 0 -> 0
//endPoint = 0 -> 0

// 1 0 1 1 0
//   i
// ---
//i = 0
//res = 0 -> 0
//endPoint = 0 -> 0

// 1 0 1 1 0
//     i
// -----
//i = 1 -> max(0, 2 - 0) = 2
//res = 0 -> 0 -> 2
//endPoint = 0 -> 0 -> 2

// 1 0 1 1 0
//       i
// -----
//i = 1 -> max(2, 3 - 2) = 1
//res = 0 -> 0 -> 2 -> 2
//endPoint = 0 -> 0 -> 2 -> 3

// 1 0 1 1 0
//         i
// -----
//i = 0
//res = 0 -> 0 -> 2 -> 2
//endPoint = 0 -> 0 -> 2 -> 3

binaryGap(8); //0
//8 -> toString: 1000

// 1 0 0 0
// i
// -
//i = 1 -> max(0, 0 - 1) = 0
//res = 0 -> 0
//endPoint = 0 -> 0

// 1 0 0 0
//   i
// -
//i = 0
//res = 0 -> 0
//endPoint = 0 -> 0

// 1 0 0 0
//     i 
// -
//i = 0
//res = 0 -> 0
//endPoint = 0 -> 0

// 1 0 0 0
//       i 
// -
//i = 0
//res = 0 -> 0
//endPoint = 0 -> 0

binaryGap(5); //2
//5 -> toString: 101

// 1 0 1
// i
// -
//i = 1 -> max(0, 0 - 1) = 0
//res = 0 -> 0
//endPoint = 0 -> 0

// 1 0 1
//   i
// ---
//i = 0
//res = 0 -> 0
//endPoint = 0 -> 0

// 1 0 1
//     i
// ---
//i = 1 -> (0, 2 - 0) = 2
//res = 0 -> 0 -> 2
//endPoint = 0 -> 0 -> 2

