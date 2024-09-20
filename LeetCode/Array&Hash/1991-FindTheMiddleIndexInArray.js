//1991. Find The Middle Index In Array
//given a 0-indexed integer array nums
//find the leftmost middleIndex - the smallest amongst all the possible ones
//a middleIndex is an index where nums[0] + nums[1] +...+ nums[middleIndex - 1] === nums[middleIndex + 1] + nums[middleIndex + 2] + ... + nums[nums.length - 1]
//if a middleIndex === 0, the left side sum is considered to be 0
//similarly if middleIndex === nums.length - 1, the right side sum is considered to be 0
//return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index
var middleIndexArray = (nums) => {
    //by slicing and comparing
    for (let i = 0; i < nums.length; i++) {
        let left = nums.slice(0, i).reduce((a, b) => a + b, 0);
        let right = nums.slice(i + 1).reduce((a, b) => a + b, 0);

        if (left === right) return i;
    }

    return -1;
}
middleIndexArray([2,3,-1,8,4]); //3 - The sum of the numbers before index 3 is: 2 + 3 + -1 = 4 || The sum of the numbers after index 3 is: 4 = 4
//left = (0, 0) = []
//right = (1) = [3,-1,8,4] = 14
//left != right

//left = (0, 1) = [2] = 2
//right = (2) = [-1,8,4] = 11
//left != right

//left = (0, 2) = [2,3] = 5
//right = (3) = [8,4] = 12
//left != right

//left = (0, 3) = [2,3,-1] = 4
//right = (4) = [4] = 4
//left = right

middleIndexArray([1,-1,4]); //2 - The sum of the numbers before index 2 is: 1 + -1 = 0 || The sum of the numbers after index 2 is: 0
//left = (0, 0) = [] = 0
//right = (1) = [-1,4] = 3
//left != right

//left = (0, 1) = [1] = 1
//right = (2) = [4] = 4
//left != right

//left = (0, 2) = [1,-1] = 0
//right = (3) = [] = 0
//left = right

middleIndexArray([2,5]); //-1
