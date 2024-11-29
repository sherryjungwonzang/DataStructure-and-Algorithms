//2762. Continuous Subarrays
//given a 0-indexed integer array nums
//a subarray of nums is called continuous if:
//let i, i + 1, ..., j be the indices in the subarray
//then, for each pair of indices i <= i1, i2 <= j, 0 <= |nums[i1] - nums[i2]| <= 2
//return the total number of continuous subarrays
//a subarray is a contiguous non-empty sequence of elements within an array

//Approach:
//using sliding window (almost same solution with above 1438)
var continuousSubarrays = (nums) => {
    let minQueue = [];
    let maxQueue = [];
    let left = 0;
    let count = 0;

    //checking subarrays
    for (let right = 0; right < nums.length; right++) {
        //checking increasing
        while (minQueue.length && nums[minQueue[minQueue.length - 1]] >= nums[right]) minQueue.pop();

        minQueue.push(right);

        //checking decreasing
        while (maxQueue.length && nums[maxQueue[maxQueue.length - 1]] <= nums[right]) maxQueue.pop();

        maxQueue.push(right);


        //sliding window
        while(nums[maxQueue[0]] - nums[minQueue[0]] > 2) {
            left++;
            
            //sliding windows
            if (minQueue[0] < left) minQueue.shift();

            if (maxQueue[0] < left) maxQueue.shift();
        }

        //adding subarrays count with length
        count += right - left + 1;
    }

    return count;
}
//TC: O(n)
//SC: O(n)
continuousSubarrays([5,4,2,4]); //8

continuousSubarrays([1,2,3]); //6
//[1, 2, 3]
// L
// R
//left = 0
//right = 0

//minQueue = [ 0, ]
//maxQueue = [ 0, ]
//count = 0 -> (0 - 0 + 1 = 1) 1

//[1, 2, 3]
// L
//    R
//left = 0
//right = 0 -> 1

//minQueue = [ 0, ]  ||      maxQueue = [ 0, ] 
//             ^                          ^
//nums[0] = 1 < nums[1] = 2 -> maxQueue pop
//minQueue = [ 0, ] -> [ 0, 1, ]     ||      maxQueue = [ 0, ] -> [ ] -> [ 1, ]
//                       ^                                                 ^
//[1] = 2 - [0] = 1 = 1 < 2 -> no sliding window
//count = 0 -> (0 - 0 + 1 = 1) 1 -> (1 - 0 + 1 = 2) 3

//[1, 2, 3]
// L
//       R
//left = 0
//right = 0 -> 1 -> 2

//minQueue = [ 0, ] -> [ 0, 1, ]     ||      maxQueue = [ 0, ] -> [ ] -> [ 1, ]
//                          ^                                              ^
//nums[1] = 2 < nums[2] = 3 -> maxQueue pop
//minQueue = [ 0, ] -> [ 0, 1, ] -> [ 0, 1, 2]    ||      maxQueue = [ 0, ] -> [ ] -> [ 1, ] -> [ ] -> [ 2, ]
//                                    ^                                                                  ^
//[2] = 3 - [0] = 1 = 2 = 2 -> no sliding window
//count = 0 -> (0 - 0 + 1 = 1) 1 -> (1 - 0 + 1 = 2) 3 -> (2 - 0 + 1 = 3) 6

//[1] || [2], [1, 2] || [3], [2, 3], [1, 2, 3] = 6
