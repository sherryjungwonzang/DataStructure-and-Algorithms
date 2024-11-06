//918. Maximum Sum Circular Subarray
//given a circular integer array nums of length n
//return the maximum possible sum of a non-empty subarray of nums

//a circular array means the end of the array connects to the beginning of the array
//formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n]
//a subarray may only include each element of the fixed buffer nums at most once
//formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n
var maxSumCircularSubarray = (nums) => {
    //tracking subarrays
    let max = -Infinity;
    let min = Infinity;
    let currMax = 0;
    let currMin = 0;
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        //max subarray sum
        currMax = Math.max(currMax + nums[i], nums[i]);
        max = Math.max(max, currMax);

        //min subarray sum
        currMin = Math.min(currMin + nums[i], nums[i]);
        min = Math.min(min, currMin);
        
        total += nums[i];
    }

    //total = min: all elements are same
    //total - min: max sum of circular subarray
    return max > 0 ? Math.max(max, total - min) : max;
}
//TC: O(n)
//SC: O(1)
maxSumCircularSubarray(nums = [1,-2,3,-2]); //3 - Subarray [3] has maximum sum 3
//[1, -2, 3, -2]                               [1, -2, 3, -2]                                                   [1, -2, 3, -2]                                                                          [1, -2, 3, -2]
// ^                                               ^                                                                    ^                                                                                           ^
//currMax = 0 -> max(0 + 1, 1) = 1             currMax = 0 -> max(0 + 1, 1) = 1 -> max(1 - 2, -2) = -1          currMax = 0 -> max(0 + 1, 1) = 1 -> max(1 - 2, -2) = -1 -> max(-1 + 3, 3) = 3           currMax = 0 -> max(0 + 1, 1) = 1 -> max(1 - 2, -2) = -1 -> max(-1 + 3, 3) = 3 -> max(3 - 2, -2) = 1
//max = -Infinity -> max(-Infi, 1) = 1         max = -Infinity -> max(-Infi, 1) = 1 -> max(1, -1) = 1           max = -Infinity -> max(-Infi, 1) = 1 -> max(1, -1) = 1 -> max(1, 3) = 3                 max = -Infinity -> max(-Infi, 1) = 1 -> max(1, -1) = 1 -> max(1, 3) = 3 -> max(3, 1) = 3
//currMin = 0 -> min(0 + 1, 1) = 1             currMin = 0 -> min(0 + 1, 1) = 1 -> min(1 - 2, -2) = -2          currMin = 0 -> min(0 + 1, 1) = 1 -> min(1 - 2, -2) = -2 -> min(-2 + 3, 3) = 1           currMin = 0 -> min(0 + 1, 1) = 1 -> min(1 - 2, -2) = -2 -> min(-2 + 3, 3) = 1 -> min(1 - 2, -2) = -2
//min = Infinity -> min(Infi, 1) = 1           min = Infinity -> min(Infi, 1) = 1 -> min(1, -2) = -2            min = Infinity -> min(Infi, 1) = 1 -> min(1, -2) = -2 -> min(-2, 1) = -2                min = Infinity -> min(Infi, 1) = 1 -> min(1, -2) = -2 -> min(-2, 1) = -2 -> min(-2, -2) = -2
//total = 0 -> 1                               total = 0 -> 1 -> -1                                             total = 0 -> 1 -> -1 -> 2                                                               total = 0 -> 1 -> -1 -> 2 -> 0

//max = 3 || min = -2 || total = 0
//max = 3 > 0 -> max(3, 0 - -2) = 3

maxSumCircularSubarray(nums = [5,-3,5]); //10 - Subarray [5,5] has maximum sum 5 + 5 = 10
//[5, -3, 5]                                   [5, -3, 5]                                                       [5, -3, 5]
// ^                                               ^                                                                    ^
//currMax = 0 -> max(0 + 5, 5) = 5             currMax = 0 -> max(0 + 5, 5) = 5 -> max(5 - 3, -3) = 2           currMax = 0 -> max(0 + 5, 5) = 5 -> max(5 - 3, -3) = 2 -> max(2 + 5, 5) = 7       
//max = -Infinity -> max(-Infi, 5) = 5         max = -Infinity -> max(-Infi, 5) = 5 -> max(5, 2) = 5            max = -Infinity -> max(-Infi, 5) = 5 -> max(5, 2) = 5 -> max(5, 7) = 7               
//currMin = 0 -> min(0 + 5, 5) = 5             currMin = 0 -> min(0 + 5, 5) = 5 -> min(5 - 3, -3) = -3          currMin = 0 -> min(0 + 5, 5) = 5 -> min(5 - 3, -3) = -3 -> min(-3 + 5, 5) = 2   
//min = Infinity -> min(Infi, 5) = 5           min = Infinity -> min(Infi, 5) = 5 -> min(-3, -3) = -3           min = Infinity -> min(Infi, 5) = 5 -> min(-3, -3) = -3 -> min(-3, 2) = -3       
//total = 0 -> 5                               total = 0 -> 5 -> 2                                              total = 0 -> 5 -> 2 -> 7                                                          

//max = 7 || min = -3 || total = 7
//max = 7 > 0 -> max(7, 7 - -3) = 10

maxSumCircularSubarray(nums = [-3,-2,-3]); //-2 - Subarray [-2] has maximum sum -2
