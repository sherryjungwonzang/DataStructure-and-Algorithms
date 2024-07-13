//209. Minimum Size Subarray Sum
//given an array of positive integers 'nums' and a positive integer 'target'
//return the min length of a subarray whose sum is greater than or equal to target
//if there is no such subarray, return 0 instead

//Approach:
//using Sliding Windows
var minSizeSubarraySum = (target, nums) => {
    let start = 0;
    let end = 0;
    let minVal = Infinity;
    let subSum = nums[0];

    //sliding window
    while (start <= end && end < nums.length) {
        //to extract min subarray length
        if (subSum >= target) {
            minVal = Math.min(minVal, end - start + 1);
            subSum -= nums[start];
            start++;
        } else { //drag the window
            end++;
            subSum += nums[end];
        }
    }

    return minVal === Infinity ? 0 : minVal;
}
minSizeSubarraySum(7, [2,3,1,2,4,3]); //2 - The subarray [4,3] has the minimal length under the problem constraint

minSizeSubarraySum(4, [1,4,4]); //1

minSizeSubarraySum(11, [1,1,1,1,1,1,1,1]); //0
