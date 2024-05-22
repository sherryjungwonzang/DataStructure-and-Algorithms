//896. Monotonic Array
//an array is monotonic if it is either monotone increasing or monotone decreasing
//an array 'nums' is monotone increasing if for all i <= j, nums[i] <= nums[j]
//anarray nums is monotone decreasing if for all i <= j and nums[i] >= nums[j]

//given an integer array 'nums'
//return true if the given array is monotonic or false otherwise

//Approach
//using two pointers
var monotonicArray = (nums) => {
    return increase(nums) || decrease(nums);
}

//helper functions
//Increase function
function increase(nums) {
    //setting two pointers
    let left = 0;
    let right = 1;

    while(right < nums.length) {
        if (nums[left] > nums[right]) {
            return false;
        }
        left++;
        right++;
    }
    return true;
}

//Decrease function
function decrease(nums) {
    //setting two pointers
    let left = 0;
    let right = 1;

    while(right < nums.length) {
        if (nums[left] < nums[right]) {
            return false;
        }
        left++;
        right++;
    }
    return true;
}
monotonicArray([1,2,2,3]); //true
//increase function first
//[1, 2, 2, 3]
// l
//    r
//1 < 2 -> true
//    l
//       r
//2 = 2 -> true
//       l
//          r
//2 < 3 -> true
//TRUE

//decrease function
//[1, 2, 2, 3]
// l
//    r
// 1 < 2 -> false
//    l
//       r
//2 = 2 -> false
//       l
//          r
//2 < 3 -> false
//FALSE

//TRUE || FALSE -> TRUE
