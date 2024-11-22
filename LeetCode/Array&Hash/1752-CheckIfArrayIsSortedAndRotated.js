//1752. Check If Array Is Sorted And Rotated
//given an array nums, return true if the array was originally sorted in non-decreasing order, 
//then rotated some number of positions (including zero) - otherwise, return false
//there may be duplicates in the original array
//note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation
var checkSortedRotated = (nums) => {
    let count = 0; //count for non-sorted and non-rotated
    let end = nums.length - 1;

    for (let i = 0; i < end; i++) {
        //checking non-sorted and non-rotated
        if (nums[i] > nums[i + 1]) count++;
    }

    //not valid
    if (count > 1 || (count === 1 && nums[0] < nums[end])) return false;

    return true;
}
checkSortedRotated([3,4,5,1,2]); //true
//[3, 4, 5, 1, 2]
// ^
//3 < 4: valid

//[3, 4, 5, 1, 2]
//    ^
//4 < 5: valid

//[3, 4, 5, 1, 2]
//       ^
//5 > 1: need checking
//count = 0 -> 1

//[3, 4, 5, 1, 2]
//          ^
//1 < 2: valid 

//count = 1, so need to check [0] and [end]
//[0] = 3 > [end] = 2 -> valid
//true

checkSortedRotated([2,1,3,4]); //false
//[2, 1, 3, 4]
// ^
//2 > 1: need checking
//count = 0 -> 1

//[2, 1, 3, 4]
//    ^
//1 < 3: valid 

//[2, 1, 3, 4]
//       ^
//3 < 4: valid 

//count = 1, so need to check [0] and [end]
//[0] = 2 < [end] = 4 -> invalid
//false

checkSortedRotated([1,2,3]); //true
