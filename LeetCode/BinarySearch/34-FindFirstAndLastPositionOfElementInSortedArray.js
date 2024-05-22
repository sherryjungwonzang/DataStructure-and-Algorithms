//34. Find First and Last position of element in sorted array
//given an array of integers 'nums' sorted in non-decreasing order
//find the starting and ending position of a given 'target' value

//if target is not found in the array, return [-1, -1]
//must write an algorithm with O(log(n)) runtime complexity

//Approach:
//using Binary Search - for O(log(n))
var findFirstAndLast = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    //setting leftBound and rightBound as -1
    let leftBound = -1;
    let rightBound = -1;

    //look for leftbound element
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        //checking leftBound is equal to target or not
        if (nums[mid] === target && nums[mid - 1] !== target) leftBound = mid;

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    //look for rightBound element
    left = 0;
    right = nums.length - 1;

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        //checking rightBound is equal to target or not
        if (nums[mid] === target && nums[mid + 1] !== target) rightBound = mid;

        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return [leftBound, rightBound];
}
findFirstAndLast([5,7,7,8,8,10], 8); //[3, 4]
//[5, 7, 7, 8, 8, 10], target = 8
// l     m         r
//leftBound = -1
//rightBound = -1

//           l  m  r
//mid=target but m-1=target
//         l/m/r
//leftBound = 3

//reset for rightBound
// l     m         r
//           l  m  r
//mid=target && m+1 !== target
//rightBound = 4
//[3, 4]

findFirstAndLast([5,7,7,8,8,10], 6); //[-1, -1]

findFirstAndLast([], 0); //[-1, -1]
