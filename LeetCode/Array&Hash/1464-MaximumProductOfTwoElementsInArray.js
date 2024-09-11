//1464. Maximum Product Of Two Elements In Array
//given the array of integers nums
//will choose two different indices i and j of that array
//return the max value of (nums[i] - 1) * (nums[j] - 1)

//Approach:
//using sorting
var maxProduct = (nums) => {
    //sorting
    nums.sort((a, b) => a - b);

    //find the first and second largest value
    let first = nums[nums.length - 1];
    let second = nums[nums.length - 2];

    return (first - 1) * (second - 1);
}
maxProduct([3,4,5,2]); //12 - (4-1)*(5-1) = 3*4 = 12
//sorting: [2, 3, 4, 5]
//first = 4, second = 5 -> (4 - 1) * (5 - 1) = 12

maxProduct([1,5,4,5]); //16 - (5-1)*(5-1) = 16
//sorting: [1, 4, 5, 5]
//first = 5, second = 5 -> (5 - 1) * (5 - 1) = 16

maxProduct([3,7]); //12
