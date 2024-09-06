//414. Third Maximum Number
//given an integer array nums
//return the third distinct maximum number in this array
//if the third max does not exist, return the max number

//Approach
//using Set
var thirdMaxNum = (nums) => {
    //Set
    nums = [...new Set(nums)].sort((a, b) => b - a);

    return (nums.length <= 2) ? nums[0] : nums[2];
}
thirdMaxNum([1, 2]); //2
//The first distinct maximum is 2
//The second distinct maximum is 1
//The third distinct maximum does not exist, so the maximum (2) is returned instead

//Set -> [1, 2] & sorting: [2, 1]
//nums length is 2 -> return nums[0] value = 2

thirdMaxNum([2,2,3,1]); //1
//The first distinct maximum is 3
//The second distinct maximum is 2 (both 2's are counted together since they have the same value)
//The third distinct maximum is 1

//Set -> [2, 3, 1] & sorting: [3, 2, 1]
//nums length is 3 -> return nums[2] value = 1

thirdMaxNum([3,2,1]); //1
//The first distinct maximum is 3
//The second distinct maximum is 2
//The third distinct maximum is 1
