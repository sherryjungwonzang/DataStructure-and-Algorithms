//1984. Minimum Difference Between Highest And Lowest Of K Scores
//given a 0-indexed integer array nums - where nums[i] represents the score of the i_th student
//also given an integer k
//pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized
//return the minimum possible difference

//Approach:
//using sliding windows
var minDiffHighLowScores = (nums, k) => {
    //sorting
    nums.sort((a, b) => a - b);

    let min = nums[0]; //sliding window start point
    let max = nums[k - 1]; //sliding window end point
    let diff = max - min;

    for (let i = k; i < nums.length; i++) {
        //sliding window to each diff
        diff = Math.min(diff, nums[i] - nums[i - k + 1]);
    }

    return diff;
}
minDiffHighLowScores([9,4,1,7], 2); //2 - The difference between the highest and lowest score is 9 - 7 = 2
//sorting: [1, 4, 7, 9]
//min = nums[0] = 1
//max = nums[1] = 4
//diff = 4 - 1 = 3

//[1, 4, 7, 9]
//       ^
//i = 2, k = 2
//diff = min(3, nums[2] - nums[2 - 2 + 1] = 7 - 4 = 3) = 3
//diff = 3 -> 3

//[1, 4, 7, 9]
//          ^
//i = 3, k = 2
//diff = min(3, nums[3] - nums[3 - 2 + 1] = 9 - 7 = 2) = 2
//diff = 3 -> 3 -> 2

minDiffHighLowScores([9,4,1,7], 3); //5 
//sorting: [1, 4, 7, 9]
//min = nums[0] = 1
//max = nums[2] = 7
//diff = 7 - 1 = 6

//[1, 4, 7, 9]
//          ^
//i = 3, k = 3
//diff = min(3, nums[3] - nums[3 - 3 + 1] = 9 - 4 = 5) = 5
//diff = 6 -> 5

minDiffHighLowScores([90], 1); //0
