//162.Find Peak Element
//a peak element is an element that is strictly greater than its neighbors
//given a 0-indexed integer array 'nums', find a peak element and return its index
//if the array contains multiple peaks, return the index to any of the peaks

//you may imagine that nums[-1] = nums[n] = -∞
//in other words, an element is always considered to be strictly greater than a neighbor that is outside the array
//you must write an algorithm that runs in O(log n) time

//Approach:
//usiing Binary search with two pointers
var findPeak = (nums) => {
    //two pointers
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = Math.floor((right + left) / 2);

        //setting prev and next element for comparing
        let prev = nums[mid - 1] || -Infinity;
        let next = nums[mid + 1] || -Infinity;

        //finding the peak
        if (prev < nums[mid] && nums[mid] > next) {
            return mid;
        } else if (next > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}
//TC: O(log n)
//SC: O(1)
findPeak([1,2,3,1]); //2 - 3 is a peak element and your function should return the index number2
//        L M   R
//mid = (3+0)/2 = 1
//prev = 1
//next = 3

//prev=1 < mid=2 mid=2<next -> move left to mid+1

//            L R
//            M
//prev = 2
//next = 1
//prev=1 < mid=3 & mid=3 > next=1 -> return mid

findPeak([1,2,1,3,5,6,4]); //5
//your function can return either index number 1 where the peak element is 2
//or index number 5 where the peak element is 6
