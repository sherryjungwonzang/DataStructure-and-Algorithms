//1588. Sum Of All Odd Length Subarrays
//given an array of positive integers arr
//return the sum of all possible odd-length subarrays of arr
//a subarray is a contiguous subsequence of the array

//Approach:
//using three loops
var allOddLengthSubarrays = (arr) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            //odd length
            if ((i - j) % 2 === 0) {
                for (let k = i; k <= j; k++) { //k: adding all values within odd length
                    count += arr[k];
                }
            }
        }
    }

    return count;
}
allOddLengthSubarrays([1,4,2,5,3]); //58 - [1] = 1, [4] = 4, [2] = 2, [5] = 5, [3] = 3, [1,4,2] = 7, [4,2,5] = 11, [2,5,3] = 10, [1,4,2,5,3] = 15
//count = 0

//[1, 4, 2, 5, 3]
// i
// j
//i - j = 0 % 2 = 0 -> odd lendth
// k
//count = 0 -> 1

//[1, 4, 2, 5, 3]
// i
//    j
//i - j = 1 % 2 != 0 -> even length

//[1, 4, 2, 5, 3]
// i
//       j
//i - j = 2 % 2 = 0 -> odd length
// k
//count = 0 -> 1 -> 2
//   k
//count = 0 -> 1 -> 2 -> 6
//      k
//count = 0 -> 1 -> 2 -> 6 -> 8

//[1, 4, 2, 5, 3]
// i
//          j
//i - j = 3 % 2 != 0 -> even length

//[1, 4, 2, 5, 3]
// i
//             j
//i - j = 4 % 2 = 0 -> odd length
// k
//count = 0 -> 1 -> 2 -> 6 -> 8 -> 9
//   k
//count = 0 -> 1 -> 2 -> 6 -> 8 -> 9 -> 13
//      k
//count = 0 -> 1 -> 2 -> 6 -> 8 -> 9 -> 13 -> 15
//          k
//count = 0 -> 1 -> 2 -> 6 -> 8 -> 9 -> 13 -> 15 -> 20
//             k
//count = 0 -> 1 -> 2 -> 6 -> 8 -> 9 -> 13 -> 15 -> 20 -> 23

//[1, 4, 2, 5, 3]
//    i
//    j
//i - j = 0 % 2 = 0 -> odd length
//    k
//count = 0 -> 1 -> 2 -> 6 -> 8 -> 9 -> 13 -> 15 -> 20 -> 23 -> 27

//[1, 4, 2, 5, 3]
//    i
//        j
//i - j = 1 % 2 != 0 -> even length

//[1, 4, 2, 5, 3]
//    i
//          j
//i - j = 2 % 2 = 0 -> odd length
//    k
//count = 0 -> 1 -> 2 -> 6 -> 8 -> 9 -> 13 -> 15 -> 20 -> 23 -> 27 -> 31
//       k
//count = 0 -> 1 -> 2 -> 6 -> 8 -> 9 -> 13 -> 15 -> 20 -> 23 -> 27 -> 31 -> 33
//          k
//count = 0 -> 1 -> 2 -> 6 -> 8 -> 9 -> 13 -> 15 -> 20 -> 23 -> 27 -> 31 -> 33 -> 38

//[1, 4, 2, 5, 3]
//    i
//             j
//i - j = 3 % 2 != 0 -> even length

//[1, 4, 2, 5, 3]
//       i
//       j
//i - j = 0 % 2 = 0 -> odd length
//       k
//count = 0 -> 1 -> 2 -> 6 -> 8 -> 9 -> 13 -> 15 -> 20 -> 23 -> 27 -> 31 -> 33 -> 38 -> 40

//[1, 4, 2, 5, 3]
//       i
//          j
//i - j = 1 % 2 != 0 -> even length

//[1, 4, 2, 5, 3]
//       i
//             j
//i - j = 2 % 2 = 0 -> odd length
//       k
//count = 0 -> 1 -> 2 -> 6 -> 8 -> 9 -> 13 -> 15 -> 20 -> 23 -> 27 -> 31 -> 33 -> 38 -> 40 -> 42
//          k
//count = 0 -> 1 -> 2 -> 6 -> 8 -> 9 -> 13 -> 15 -> 20 -> 23 -> 27 -> 31 -> 33 -> 38 -> 40 -> 42 -> 47
//             k
//count = 0 -> 1 -> 2 -> 6 -> 8 -> 9 -> 13 -> 15 -> 20 -> 23 -> 27 -> 31 -> 33 -> 38 -> 40 -> 42 -> 47 -> 50

//[1, 4, 2, 5, 3]
//          i
//          j
//i - j = 2 % 2 = 0 -> odd length
//          k
//count = 0 -> 1 -> 2 -> 6 -> 8 -> 9 -> 13 -> 15 -> 20 -> 23 -> 27 -> 31 -> 33 -> 38 -> 40 -> 42 -> 47 -> 50 -> 55

//[1, 4, 2, 5, 3]
//          i
//             j
//i - j = 1 % 2 != 0 -> even length

//[1, 4, 2, 5, 3]
//             i
//             j
//i - j = 2 % 2 = 0 -> odd length
//             k
//count = 0 -> 1 -> 2 -> 6 -> 8 -> 9 -> 13 -> 15 -> 20 -> 23 -> 27 -> 31 -> 33 -> 38 -> 40 -> 42 -> 47 -> 50 -> 55 -> 58

allOddLengthSubarrays([1, 2]); //3 - [1], [2]

allOddLengthSubarrays([10, 11, 12]); //66
