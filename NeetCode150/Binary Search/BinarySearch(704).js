//Binary Search (704)
//given an array of integers 'nums' - sorted in ascending order
//and an integer 'target'
//to search 'target' in 'nums'
//if target exists, return its index, otherwise return -1

//Approach:
//using left and right pointer and find the mid value
//compare mid value with target
var binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while(left <= right) {
    let mid = left + Math.floor((right + left) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
//TC: O(log(n))
binarySearch([-1, 0, 3, 5, 9, 12], 9); //4 - 9 exists in nums and its index is 4
//             l     m         r
//target=9 !== 3 -> target > mid
//move left to mid + 1
//                      l  m   r
//target=9 === m -> return 4

binarySearch([-1, 0, 3, 5, 9, 12], 2); //-1 - 2 does not exist in nums to return -1
//             l     m         r
//target=2 !== 3 -> target < mid
//move right to mid - 1
//             l  r
//return -1
