//35. Search Insert Position
//given a sorted array of distincy integers and a target value
//return the index of the target is found
//if not, return the index where it would be if it were inserted in order

//must wrtie with O(log(n)) runtime

//Approach:
//using Binary Search with comparing mid and target value -> for O(long(n)) runtime
var searchInsertPosition = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
//TC: O(log(n))
//SC: O(1)
searchInsertPosition([1,3,5,6], 5); //2
//[1, 3, 5, 6], target = 5
// l  m     r
//mid=3 < target -> move left to mid + 1
//      l/m r
//mid=5 === target -> return 2

searchInsertPosition([1,3,5,6], 2); //1
//[1, 3, 5, 6], target = 2
// l  m     r
//mid=3 < target=2 -> move right to mid - 1
//l/r/m -> it won't consider to move before 1 -> move left++
//r/m l -> return left index = 1

searchInsertPosition([1,3,5,6], 7); //4
//[1, 3, 5, 6], target = 7
// l  m     r
//mid=3 < target=7 -> move left to mid + 1
//      l/m r
//mid=5 < target=7 -> move left to mid + 1
//         l/r/m
//it won't consider to move before 6 -> move left++
//          r/m l -> return left index = 4
