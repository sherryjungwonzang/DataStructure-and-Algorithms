//167. Two Sum2
//given a 1-indexed array of integers numbers that is already sorted in non-decreasing order
//find two numbers such that they add up to a specific 'target' number
//let these two numbers be numbers[index_1] and numbers[index_2] - where 1 <= index_1 < index_2 <= numbers.length

//return the indices of the two numbers - index1 and index2
//added by one as an integer array [index_1, index_2] of length 2

//the tests are generated such that there is exactly one solution
//you may not use the same element twice
//your solution must use only constant extra space
var twoSum2 = (numbers, target) => {
    //two pointers
    let left = 0;
    let right = numbers.length - 1;

    while(left < right) {
        if (numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1];
        } else if (numbers[left] + numbers[right] < target) {
            left++;
        } else {
            right--;
        }
    }
}
//TC: O(n)
//SC: O(1)
twoSum2([2,7,11,15], 9); //[1,2] - The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2]

twoSum2([2,3,4], 6); //[1,3] - The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3]

twoSum2([-1, 0], -1); //[1,2] - The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2]
