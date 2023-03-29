//Two Sum II - Input Array is Sorted (167)
//given 1-indexed array of integers 'numbers' - already sorted in non-decreasing order
//find two numbers such that they add up to a specific 'target' number
//let these two numbers be numbers[index_1] and numbers[index_2] - where 1 <= index_1 < index_2 <= numbers.length

//return the indices of the two numbers, index_1, index_2 added by one as an integer array [index_1, index_2] of length 2

//Approach:
//using two pointers: left and right pointers
//adding up two pointers and compare with target value
//if adding up > target -> right--
//if addding up < target -> left++
var twoSum2 = (numbers, target) => {
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
//TC:O(n) - looping through the sorted array
//SC: O(1)
twoSum2([2, 7, 11, 15], 9); //[1,2] - the sum of 2 and 7 is 9 | index + 1 = [1,2]
//       L          R


twoSum2([2, 3, 4], 6); //[1,3] - the sum of 2 and 4 is 6 | index + 1 = [1,3]

twoSum2([-1, 0], -1); //[1,2] - the sum of -1 and 0 is -1 | index + 1 = [1,2]
