//1005. Maximize Sum Of Array After K Negations
//given an integer array nums and an integer k
//modify the array in the following way:
//choose an index i and replace nums[i] with -nums[i]
//you should apply this process exactly k times
//you may choose the same index i multiple times
//return the largest possible sum of the array after modifying it in this way

//Approach:
//using sorting
var maxSumAfterNegations = (nums, k) => {
    //sorting
    nums = nums.sort((a, b) => a - b);

    let i = 0;

    while (k > 0) {
        //no negations
        if (nums[i] === 0) break;

        //negations
        nums[i] = -nums[i];

        //max value
        if (nums[i] > nums[i + 1]) i++;

        k--;
    }

    return nums.reduce((a, b) => a + b);
}
maxSumAfterNegations(nums = [4,2,3], k = 1); //5 - Choose index 1 and nums becomes [4,-2,3]
//sorting: [2, 3, 4]

//[2, 3, 4] -> [-2, 3, 4]
// i            -2 > 3 -> no
//k = 1 -> 0

//nums = [-2, 3, 4] = -2 + 3 + 4 = 5

maxSumAfterNegations(nums = [3,-1,0,2], k = 3); //6 - Choose indices (1, 2, 2) and nums becomes [3,1,0,2]
//sorting: [-1, 0, 2, 3]

//[-1, 0, 2, 3] -> [1, 0, 2, 3]
// i                1 > 0 -> i++
//k = 3 -> 2

//[1, 0, 2, 3]
//    i -> break

//[1, 0, 2, 3] -> [1, 0, -2, 3]
//       i              -2 > 3 -> no
//k = 3 -> 2 -> 1

//[1, 0, -2, 3]     ->         [1, 0, 2, 3] 
//       i -> negation again            2 > 3 -> no
//k = 3 -> 2 -> 1 -> 0

//nums =  [1, 0, 2, 3] = 1 + 0 + 2 + 3 = 6

maxSumAfterNegations(nums = [2,-3,-1,5,-4], k = 2); //13 - Choose indices (1, 4) and nums becomes [2,3,-1,5,4]
//sorting: [-4, -3, -1, 2, 5]

//[-4, -3, -1, 2, 5] -> [4, -3, -1, 2, 5]
// i                     4 > -3 -> i++
//k = 2 -> 1

//[4, -3, -1, 2, 5] -> [4, 3, -1, 2, 5] 
//    i                   3 > -1 -> i++
//k = 2 -> 1 -> 0

//nums = [4, 3, -1, 2, 5] = 4 + 3 - 1 + 2 + 5 = 13
