//905. Sort Array By Parity
//given an integer array 'nums'
//move all the even integers at the beginning of the array followed by all the odd integers
//return any array that satisfies this condition

//Approach:
//using two pointers
//left increases when it is even
//right decreases when it is odd
var parityArraySorting = (nums) => {
    //two pointers
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        while (left < right && nums[left] % 2 === 0) left++; //even
        while (left < right && nums[right] % 2 === 1) right--; //odd

        //switching
        [nums[left], nums[right]] = [nums[right], nums[left]];
    }

    return nums;
} 
parityArraySorting([3,1,2,4]); //[2,4,3,1] - The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted

parityArraySorting([0]); //[0]
