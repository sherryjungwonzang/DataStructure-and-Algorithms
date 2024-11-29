//1438. Longest Continuous Subarray With Absolute Diff Less Than Or Equal To Limit
//given an array of integers nums and an integer limit, 
//return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit

//Approach:
//using sliding window
var longestContinuousSubarray = (nums, limit) => {
    let increase = []; //to track increasing order for min 
    let decrease = []; //to track decreasing order for max 
    let max = 0;
    let left = 0;

    //traversing
    for (let right = 0; right < nums.length; right++) {
        //removing the greater last val
        while (increase.length && nums[right] < increase[increase.length - 1]) increase.pop();

        increase.push(nums[right]);

        //removing the less last val
        while (decrease.length && nums[right] > decrease[decrease.length - 1]) decrease.pop();

        decrease.push(nums[right]);

        //max diff
        while (decrease[0] - increase[0] > limit) {
            //adjusting sliding window
            if (nums[left] === decrease[0]) decrease.shift();

            if (nums[left] === increase[0]) increase.shift();

            left++;
        }

        //updating the length
        max = Math.max(max, right - left + 1);
    }

    return max;
}
//TC: O(n)
//SC: O(n)
longestContinuousSubarray(nums = [8,2,4,7], limit = 4); //2
//[8, 2, 4, 7]
// L
// R
//increase = [ 8, ]     ||  decrease = [ 8, ]
//8 - 8 = 0 < limit
//max = 0 -> (0 - 0 + 1) 1

//[8, 2, 4, 7]
// L  L
//    R
//8 > 2: non-increasing so remove 8 and add 2       || 8  > 2: decreasing
//increase = [ 8, ] -> [ 2, ]                          decrease = [ 8, 2, ] -> [ 2, ]
//8 - 2 = 6 > limit
//left = 8 and remove 8 in decrease array & move left
//max = 0 -> (0 - 0 + 1) 1 -> (1 - 1 + 1) 1

//[8, 2, 4, 7]
//    L
//       R
//2 < 4: increasing                   || 2  < 4: non-decreasing so remove 2 and add 4
//increase = [ 2, ] -> [ 2, 4 ]          decrease = [ 2, ] -> [  ] -> [ 4, ]
//4 - 2 = 2 < limit
//max = 0 -> (0 - 0 + 1) 1 -> (1 - 1 + 1) 1 -> (2 - 1 + 1) 2

//[8, 2, 4, 7]
//    L  L
//          R
//4 < 7: increasing                                      || 4 < 7: non-decreasing so remove 4 and add 7
//increase = [ 2, 4, ] -> [ 2, 4, 7 ]                       decrease = [ 4, ] -> [  ] -> [ 7, ]
//7 - 2 = 5 > limit
//left = 2 and remove 2 in increase array
//increase = [ 2, 4, ] -> [ 2, 4, 7 ] -> [ 4, 7 ]           decrease = [ 4, ] -> [  ] -> [ 7, ]
//max = 0 -> (0 - 0 + 1) 1 -> (1 - 1 + 1) 1 -> (2 - 1 + 1) 2 -> (3 - 2 + 1) 2

//2

longestContinuousSubarray(nums = [10,1,2,4,7,2], limit = 5); //4

longestContinuousSubarray(nums = [4,2,2,2,4,4,2,2], limit = 0); //3

