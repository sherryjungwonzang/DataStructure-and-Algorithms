//27. Remove Element
//given an integer array 'nums' and an integer 'val'
//remove all occurences of val in nums in-place

//the order of the elements may be changed
//then return the number of elements in nums which are not equal to val
//consider the number of elements in nums which are not equal to val be k
//to get accepted, need to do the following things:

//change the array nums such that the first k elements of nums contain the elements which are not equal to val
//the remaining elements of nums are not important as well as the size of nums
//return k
var removeElement = (nums, val) => {
    let count = 0;

    //looping through
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) { //not equal to val
            nums[count++] = nums[i]; 
        }
    }
    return count; //only not equal count is calculated
}
removeElement([3,2,2,3], 3); //2 - [2,2,_,_]
//[3, 2, 2, 3]
// ^

//count = 0
//i = 0) equal to val
//i = 1) nums[1] = 2
//count = 0 -> 1
//i = 2) nums[2] = 2
//count = 0 -> 2
//i = 3) equal to val

removeElement([0,1,2,2,3,0,4,2], 2); //5 - [0,1,4,0,3,_,_,_]
//[0, 1, 2, 2, 3, 0, 4, 2]
// ^

//count = 0
//i = 0) nums[1] = 0
//count = 0 -> 1
//i = 1) nums[2] = 1
//count = 0 -> 1 -> 2
//i = 2) equal to val
//i = 3) equal to val
//i = 4) nums[3] = 3
//count = 0 -> 1 -> 2 -> 3
//i = 5) nums[4] = 0
//count = 0 -> 1 -> 2 -> 3 -> 4
//i = 6) nums[5] = 4
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5
//i = 7) equal to val

