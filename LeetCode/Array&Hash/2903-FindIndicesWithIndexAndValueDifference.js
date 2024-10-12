//2903. Find Indices With Index And Value Difference
//given a 0-indexed integer array nums having length n, an integer indexDifference, and an integer valueDifference.

//your task is to find two indices i and j, both in the range [0, n - 1], that satisfy the following conditions:
//abs(i - j) >= indexDifference, and
//abs(nums[i] - nums[j]) >= valueDifference
//return an integer array answer, where answer = [i, j] if there are two such indices, and answer = [-1, -1] otherwise
//if there are multiple choices for the two indices, return any of them.
//Note: i and j may be equal

//Approach:
//using two loops
var findIndicesWithIndexValDiff = (nums, indexDifference, valueDifference) => {
    let m = nums.length;

    //looping
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            //finding indices
            if (Math.abs(i - j) >= indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference) return [i, j];
        }
    }

    return [-1, -1];
}
findIndicesWithIndexValDiff(nums = [5,1,4,1], indexDifference = 2, valueDifference = 4); //[0,3]
//[5, 1, 4, 1]
//i
//j
//|0 - 0| = 0 <= 2: F && |5 - 5| = 0 <= 4: T -> F

//[5, 1, 4, 1]
//i
//    j
//|0 - 1| = 1 <= 2: F && |5 - 1| = 4 <= 4: T -> F

//[5, 1, 4, 1]
//i
//       j
//|0 - 2| = 2 <= 2: T && |5 - 4| = 1 <= 4: F -> F

//[5, 1, 4, 1]
//i
//          j
//|0 - 3| = 3 > 2: T && |5 - 1| = 4 <= 4: T -> T
//[0, 3]

findIndicesWithIndexValDiff(nums = [2,1], indexDifference = 0, valueDifference = 0); //[0,0]

findIndicesWithIndexValDiff(nums = [1,2,3], indexDifference = 2, valueDifference = 4); //[-1,-1]


