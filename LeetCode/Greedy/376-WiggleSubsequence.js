//376. Wiggle Subsequence
//a wiggle sequence is a sequence where the differences between successive numbers strictly alternate between positive and negative
//the first difference (if one exists) may be either positive or negative
//a sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences

//for example, [1, 7, 4, 9, 2, 5] is a wiggle sequence because the differences (6, -3, 5, -7, 3) alternate between positive and negative
//in contrast, [1, 4, 7, 2, 5] and [1, 7, 4, 5, 5] are not wiggle sequences
//the first is not because its first two differences are positive, and the second is not because its last difference is zero
//a subsequence is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order

//given an integer array nums
//return the length of the longest wiggle subsequence of nums

//Approach:
//using Greedy algorithm
var wiggleSubsequence = (nums) => {
    let flag = undefined; //to check neg or pos
    let count = 1;

    for (let i = 0; i < nums.length - 1; i++) {
        //negative
        if (nums[i] > nums[i + 1]) {
            //wiggle subsequence
            if (flag === 1 || flag === undefined) {
                flag = 0;

                count = count + 1;
            }

        //positive
        } else if (nums[i] < nums[i + 1]) {
            //wiggle subsequence
            if ((flag === 0 || flag === undefined)) {
                flag = 1;

                count = count + 1;
            }
        }
    }
    
    return count;
}
//TC: O(n)
//SC: O(1)wiggleSubsequence([1,7,4,9,2,5]); //6 - wiggle sequence with differences (6, -3, 5, -7, 3)
wiggleSubsequence([1,17,5,10,13,15,10,5,16,8]); //7 - [1, 17, 10, 13, 10, 16, 8] with differences (16, -7, 3, -3, 6, -8)
//[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
// ^
//1 < 17 -> pos
//flag = undefined -> 1
//count = 1 -> 2

//[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
//    ^
//17 > 5 -> neg
//flag = undefined -> 1 -> 0
//count = 1 -> 2 -> 3

//[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
//        ^
//5 < 10 -> pos
//flag = undefined -> 1 -> 0 -> 1
//count = 1 -> 2 -> 3 -> 4

//[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
//            ^
//10 < 13 -> pos: not wiggle subsequence
//flag = undefined -> 1 -> 0 -> 1 -> 1
//count = 1 -> 2 -> 3 -> 4 -> 4

//[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
//               ^
//13 < 15 -> pos: not wiggle subsequence
//flag = undefined -> 1 -> 0 -> 1 -> 1 -> 1
//count = 1 -> 2 -> 3 -> 4 -> 4 -> 4

//[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
//               ^
//13 < 15 -> pos: not wiggle subsequence
//flag = undefined -> 1 -> 0 -> 1 -> 1 -> 1
//count = 1 -> 2 -> 3 -> 4 -> 4 -> 4

//[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
//                    ^
//15 > 10 -> neg
//flag = undefined -> 1 -> 0 -> 1 -> 1 -> 1 -> 0
//count = 1 -> 2 -> 3 -> 4 -> 4 -> 4 -> 5

//[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
//                        ^
//10 > 5 -> neg: not wiggle subsequence
//flag = undefined -> 1 -> 0 -> 1 -> 1 -> 1 -> 0 -> 0
//count = 1 -> 2 -> 3 -> 4 -> 4 -> 4 -> 5 -> 5

//[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
//                           ^
//5 < 16 -> pos
//flag = undefined -> 1 -> 0 -> 1 -> 1 -> 1 -> 0 -> 0 -> 1
//count = 1 -> 2 -> 3 -> 4 -> 4 -> 4 -> 5 -> 5 -> 6

//[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
//                              ^
//16 > 8 -> neg
//flag = undefined -> 1 -> 0 -> 1 -> 1 -> 1 -> 0 -> 0 -> 1 -> 0
//count = 1 -> 2 -> 3 -> 4 -> 4 -> 4 -> 5 -> 5 -> 6 -> 7

wiggleSubsequence([1,7,4,9,2,5]); //6 - wiggle sequence with differences (6, -3, 5, -7, 3)

wiggleSubsequence([1,2,3,4,5,6,7,8,9]); //2
