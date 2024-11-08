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
//using DP
var wiggleSubsequence = (nums) => {
    //base case        
    if (nums.length < 2) return nums.length;

    let neg = 1;
    let pos = 1;

    for (let i = 1; i < nums.length; i++) {
        //wiggle subsequence
        if (nums[i] > nums[i - 1]) pos = neg + 1;
        else if (nums[i] < nums[i - 1]) neg = pos + 1;
    }
    
    return Math.max(neg, pos);
}
wiggleSubsequence([1,7,4,9,2,5]); //6 - wiggle sequence with differences (6, -3, 5, -7, 3)
//[1, 7, 4, 9, 2, 5]
//    ^
//7 > 1 -> pos
//neg = 1
//pos = 1 -> 2

//[1, 7, 4, 9, 2, 5]
//       ^
//4 < 7 -> neg
//neg = 1 -> 3
//pos = 1 -> 2

//[1, 7, 4, 9, 2, 5]
//          ^
//9 > 4 -> pos
//neg = 1 -> 3
//pos = 1 -> 2 -> 4

//[1, 7, 4, 9, 2, 5]
//             ^
//2 < 9 -> neg
//neg = 1 -> 3 -> 5
//pos = 1 -> 2 -> 4

//[1, 7, 4, 9, 2, 5]
//                ^
//5 > 2 -> pos
//neg = 1 -> 3 -> 5
//pos = 1 -> 2 -> 4 -> 6

//max(5, 6) = 6

wiggleSubsequence([1,17,5,10,13,15,10,5,16,8]); //7 - [1, 17, 10, 13, 10, 16, 8] with differences (16, -7, 3, -3, 6, -8)
//[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]      [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]        [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]        [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
//     ^                                            ^                                               ^                                               ^
//17 > 1 -> pos                             5 < 17 -> neg                               10 > 5 -> pos                               13 > 10 -> pos 
//neg = 1                                   neg = 1 -> 3                                neg = 1 -> 3                                neg = 1 -> 3
//pos = 1 -> 2                              pos = 1 -> 2                                pos = 1 -> 2 -> 4                           pos = 1 -> 2 -> 4 -> 4

//[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]      [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]        [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]        [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
//                    ^                                             ^                                              ^                                               ^
//15 > 13 -> pos                             10 < 15 -> neg                              5 < 10 -> neg                               16 > 5 -> pos 
//neg = 1 -> 3                               neg = 1 -> 3 -> 5                           neg = 1 -> 3 -> 5 -> 5                      neg = 1 -> 3 -> 5 -> 5
//pos = 1 -> 2 -> 4 -> 4 -> 4                pos = 1 -> 2 -> 4 -> 4 -> 4                 pos = 1 -> 2 -> 4 -> 4 -> 4                 pos = 1 -> 2 -> 4 -> 4 -> 4 -> 6

//[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
//                                  ^
//8 < 16 -> neg 
//neg = 1 -> 3 -> 5 -> 5 -> 7
//pos = 1 -> 2 -> 4 -> 4 -> 4 -> 6

//max(7, 6) = 7

wiggleSubsequence([1,2,3,4,5,6,7,8,9]); //2
