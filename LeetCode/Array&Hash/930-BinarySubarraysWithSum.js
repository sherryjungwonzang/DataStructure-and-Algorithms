//930. Binary subarrays with sum
//given a binary array 'nums' and an integer 'goal'
//return the number of non-empty subarrays with a sum 'goal'
//a subarray is a contiguous part of the array

//Approach:
//using sliding window and map
var binarySubarraysWithSum = (nums, goal) => {
    let map = new Map();
    let count = 0; //for tracking the cumulative sum
    let currSum = 0; //for tracking the count of subarrays

    for (let num of nums) {
        currSum += num; //updating the sum

        if (currSum === goal) count++;
        if (map.has(currSum - goal)) count += map.get(currSum - goal); //currSum - goal: there is existing subarray whose sum is equal to goal

        map.set(currSum, (map.get(currSum) || 0) + 1);
    }
    return count;
}
binarySubarraysWithSum([1,0,1,0,1], 2); //4
//101, 1010, 0101, 101

binarySubarraysWithSum([0,0,0,0,0], 0); //15
