//55. Jump Game
//given an integer array 'nums'
//initially positioned at the array's first index, and each element in the array represents max jump length at that position
//return true - if can reach the last index
//otherwise false

//Approach:
//using greedy Algorithm
var jumpGame = (nums) => {
    let target = nums.length - 1; //the num of nums arrays

    //looping from the backwards
    for (let i = nums.length = 1; i >= 0; i--) {
        //check able to jump with max jump length
        if (i + nums[i] >= target) target = i; 
    }

    return target === 0;
}
//TC: O(N) - loop through nums array
//SC: O(1)
jumpGame([2, 3, 1, 1, 4]); //true - jump 1 step from index 0 to 1, then 3 steps to the last index
//                    i   target = 4

//i + nums[i] >= target -> Valid
//3  +  1 = 4  >= target = 4 -> Y
//target = 4 -> 3
//2 + 1 = 3 >= target = 3 -> Valid
//target = 3 -> 2
//1 + 3 = 4 >= target = 2 -> Valid
//target = 2 -> 1
//0 + 2  = 2 >= target = 1 -> Valid
//target = 1 -> 0
//if target gets to 0 -> return true

jumpGame([3, 2, 1, 0, 4]); //false - always arrvie at index 3 | it's max jump length is 0, which makes it impossible to reach the last index
//                    i  | target = 4
//i + nums[i] >= target -> Valid
//3  +  0 = 3  >= target = 4 -> N
//target = 4
//2 + 1 = 3 >= target = 4 -> N
//target = 4
//1 + 2 = 3 >= target = 4 -> N
//target = 4
//0 + 3 = 3 >= target = 4 -> N
//target = 4
//return false
