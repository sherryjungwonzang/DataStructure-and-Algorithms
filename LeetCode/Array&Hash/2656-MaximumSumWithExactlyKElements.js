//2656. Maximum Sum With Exactly K Elements
//given a 0-indexed integer array nums and an integer k
//your task is to perform the following operation exactly k times in order to maximize your score:
//select an element m from nums
//remove the selected element m from the array
//add a new element with a value of m + 1 to the array
//increase your score by m
//return the maximum score you can achieve after performing the operation exactly k times
var maxSumKElements = (nums, k) => {
    let max = Math.max(...nums);
    let sum = 0;

    //checking only max value
    for (let i = 0; i < k; i++) {
        sum += max;

        //adding +1 to max value
        max += 1;
    }

    return sum;
}
//TC: O(n)
//SC: O(1)
maxSumKElements(nums = [1,2,3,4,5], k = 3); //18
//i = 0
//[1, 2, 3, 4, 5] -> [1, 2, 3, 4, 6] 
//             ^
//max = 5
//sum = 0 -> 5

//i = 1
//[1, 2, 3, 4, 6] -> [1, 2, 3, 4, 7] 
//             ^
//max = 6
//sum = 0 -> 5 -> 11

//i = 2
//[1, 2, 3, 4, 7]
//             ^
//max = 7
//sum = 0 -> 5 -> 11 -> 18

maxSumKElements(nums = [5,5,5], k = 2); //11
