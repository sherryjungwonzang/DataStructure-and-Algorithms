//1403. Minimum Subsequence In Non-Increasing Order
//given the array nums
//obtain a subsequence of the array whose sum of elements is strictly greater than
//the sum of the nonincluded elements in such subsequence

//if there are multiple solutions, return the subsequence with min size and if there still exists multiple solutions
//return the subsequence with the max total sum of all its elements
//a subsequence of an array can be obtained by erasing some elements from the array

//Approach:
//using sorting
var minSubsequence = (nums) => {
    //sorting - ascending
    nums = nums.sort((a, b) => b - a);

    //to collect sum
    let sum = nums.reduce((a, b) => a + b, 0);
    let res = [];
    let currSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];

        res.push(nums[i]);

        //non-increasing order
        if (currSum > sum - currSum) return res;
    }
}
minSubsequence([4,3,10,9,8]); //[10,9]
//sum = 4 + 3 + 10 + 9 + 8 = 34

//sorting: [10, 9, 8, 4, 3]
//          ^
//currSum = 0 -> 10
//res = [10, ]
//10 > 34 - 10 = 24 -> continue

//sorting: [10, 9, 8, 4, 3]
//              ^
//currSum = 0 -> 10 -> 19
//res = [10, 9]
//19 > 34 - 19 = 15 -> done

//[10, 9]

minSubsequence([4,4,7,6,7]); //[7,7,6]
//sum = 4 + 4 + 7 + 6 + 7 = 28

//sorting: [7, 7, 6, 4, 4]
//          ^
//currSum = 0 -> 7
//res = [7, ]
//7 > 28 - 7 = 21 -> continue

//sorting: [7, 7, 6, 4, 4]
//             ^
//currSum = 0 -> 7 -> 14
//res = [7, 7, ]
//14 > 28 - 14 = 14 -> continue

//sorting: [7, 7, 6, 4, 4]
//                ^
//currSum = 0 -> 7 -> 14 -> 20
//res = [7, 7, 6, ]
//20 > 28 - 20 = 8 -> done

//[7, 7, 6]

