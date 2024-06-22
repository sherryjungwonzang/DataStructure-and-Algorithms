//643. Maximum Average Subarray
//given an integer array 'nums' consisting of 'n' elements and an integer 'k'
//find a contiguous subarray whose length is equal to k that has the max average value
//and return the value

//Approach:
//using sliding window
var maxAvgSubarray = (nums, k) => {
    let sum = 0;

    //calculating sum until k position
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    //sliding window
    let max = sum;
    for (let i = k; i < nums.length; i++) {
        //subtracting the elements of previous subarray from the curr sum
        sum = sum - nums[i - k] + nums[i];
        max = Math.max(max, sum); //updating max
    }

    return max / k; //calculating average
}
maxAvgSubarray([1,12,-5,-6,50,3], 4); //12.75000
//(12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75


//[1, 12, -5, -6, 50, 3]
// -------------

//sum = 1+12-5-6 = 2

//max = 2
//    -------------
//sum = 2 - nums[4-4] + nums[4] = 2 - 1 + 50 = 51
//max = 2 -> 51

//        -------------
//sum = 51 - nums[5-4] + nums[5] = 51 - 12 + 3 = 42
//max = 2 -> 51 -> 51

//51 / 4 = 12.75


maxAvgSubarray([5], 1); //5.00000
