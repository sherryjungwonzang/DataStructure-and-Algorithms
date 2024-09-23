//2760. Longest Even Odd Subarray With Threshold
//given a 0-indexed integer array nums and an integer threshold
//find the length of the longest subarray of nums starting at index l
//and ending at index r (0 <= i <= r < nums.length) that satisfies the following conditions:

//nums[l] % 2 === 0
//for all indices i in the range [l, r - 1], nums[i] % 2 != nums[i + 1] % 2
//for all indices i in the range [l, r], nums[i] <= threshold

//return an integer denoting the length of the longest such subarray

//Approach:
//using sliding windows
var longestEvenOddSubarray = (nums, threshold) => {
    let maxLen = 0;

    for (let left = 0; left < nums.length; left++) {
        //invalid
        if (nums[left] > threshold || nums[left] % 2 !== 0) continue;

        let right = left + 1;
        let prev = nums[left];

        //searching subarray range
        while (right < nums.length && nums[right] <= threshold && nums[right] % 2 !== prev % 2) {
            //updating prev to right value
            prev = nums[right];

            right++;
        }

        //updating maxLen
        maxLen = Math.max(maxLen, right - left);

        left = right - 1;
    }

    return maxLen;
}
//TC: O(n)
//SC: O(1)
longestEvenOddSubarray(nums = [3,2,5,4], threshold = 5); //3 - subarray that starts at l = 1 and ends at r = 3 => [2,5,4].
//[3, 2, 5, 4]
// L
//    R
//right <= threshold && 2 % 2 = 0 != 3 % 2 = 1 : valid
//prev = 3 -> 2 & right++

//[3, 2, 5, 4]
// L
//       R
//right <= threshold && 5 % 2 = 1 != 2 % 2 = 0 : valid
//prev = 3 -> 2 -> 5

//[3, 2, 5, 4]
// L
//          R
//right <= threshold && 4 % 2 = 0 != 5 % 2 = 1 : valid
//prev = 3 -> 2 -> 5 -> 4

//[3, 2, 5, 4]
//          L
//              R
//maxLen = 0 -> (0, 3 - 0) = 3
//left = 0 -> 3

longestEvenOddSubarray(nums = [2,3,4,5], threshold = 4); //3 - l = 0 and ends at r = 2 => [2,3,4]
//[2, 3, 4, 5]
// L
//    R
//right <= threshold && 3 % 2 = 1 != 2 % 2 = 0 : valid
//prev = 2 -> 3

//[2, 3, 4, 5]
// L
//       R
//right <= threshold && 4 % 2 = 0 != 3 % 2 = 1 : valid
//prev = 2 -> 3 -> 4

//[2, 3, 4, 5]
// L
//          R
//right > threshold: invalid
//maxLen = 0 -> (0, 3 - 0) = 3

//[2, 3, 4, 5]
//       L
//          R
//left = 0 -> 2

//maxLen = 0 -> (0, 3 - 0) = 3

longestEvenOddSubarray(nums = [1,2], threshold = 2); //1 - subarray that starts at l = 1 and ends at r = 1 => [2]
