//3010. Divide An Array Into Subarrays With Minimum Cost
//given an array of integers nums of length n
//the cost of an array is the value of its first element
//for example, the cost of [1,2,3] is 1 while the cost of [3,4,1] is 3
//you need to divide nums into 3 disjoint contiguous subarrays
//return the minimum possible sum of the cost of these subarrays

//Approach:
//using sorting
var minCost = (nums) => {
    let sum = nums[0];

    //removing 
    nums.shift();

    //sorting
    nums.sort((a, b) => a - b);

    //adding disjoint contiguous subarrays [0]
    sum += nums[0];
    sum += nums[1];

    return sum;
}
minCost([1,2,3,12]); //6 - [1], [2], and [3,12]

minCost([5,4,3]); //12 - [5], [4], [3]
//[5, 4, 3] -> [4, 3]
// ^
//sum = 5

//sorting
//[4, 3]
// ^  ^
//sum = 5 -> 9 -> 12

minCost([10,3,1,1]); //12 - 10,3], [1], and [1]
//[10, 3, 1, 1] -> [3, 1, 1]
// ^
//sum = 10

//sorting
//[1, 1, 3]
// ^  ^
//sum = 10 -> 11 -> 12
