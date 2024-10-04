//674. Longest Continuous Increasing Subsequence
//given an unsorted array of integers nums
//return the length of the longest continuous increasing subseqeunce
//the subsequence must be strictly increasing

//a continuous increasing subsequence is defined by two indices l and r (l < r) 
//such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1]
var longestContinuousIncreasingSubsequence = (nums) => {
    let len = 1;
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        //increasing
        if (nums[i] < nums[i + 1]) len++;
        else len = 1;

        //update
        maxLen = Math.max(len, maxLen);
    }

    return maxLen;
}
longestContinuousIncreasingSubsequence([1,3,5,4,7]); //3 - [1,3,5]
//len = 1
//maxLen = 0

//[1, 3, 5, 4, 7]
// ^
//1 < 3 -> increasing
//len = 1 -> 2
//maxLen = 0 -> 2

//[1, 3, 5, 4, 7]
//    ^
//3 < 5 -> increasing
//len = 1 -> 2 -> 3
//maxLen = 0 -> 2 -> 3

//[1, 3, 5, 4, 7]
//       ^
//5 > 4 -> decreasing
//len = 1 -> 2 -> 3 -> 1
//maxLen = 0 -> 2 -> 3 -> 3

//[1, 3, 5, 4, 7]
//          ^
//4 < 7 -> increasing
//len = 1 -> 2 -> 3 -> 1 -> 2
//maxLen = 0 -> 2 -> 3 -> 3 -> 3

//[1, 3, 5, 4, 7]
//             ^
//maxLen = 0 -> 2 -> 3 -> 3 -> 3

longestContinuousIncreasingSubsequence([2,2,2,2,2]); //1
//len = 1
//maxLen = 0

//[2, 2, 2, 2, 2]
// ^
//2 = 2 -> same
//len = 1 -> 1
//maxLen = 0 -> 1

