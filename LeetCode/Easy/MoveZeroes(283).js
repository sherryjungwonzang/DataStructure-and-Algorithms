//283. Move Zeroes
//given an integer array 'nums'
//move all 0's to the end of it while maintaining the relative order of the non-zero elements
var moveZeroes = (nums) => {
  //setting two pointers
  let left = 0;
  let right = 0;

  while(right < nums.length) {
    if (nums[right] !== 0) {
      //flip with left and right
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
}
//TC: O(n)
//SC: O(1)
moveZeroes([0,1,0,3,12]); //[1,3,12,0,0]
//[0, 1, 0, 3, 12]
// l
// r

// l
//    r
//r !== 0 -> flip with left

//[1, 0, 0, 3, 12]
//    l
//       r
//move right since r is 0
//    l
//          r
//r !== 0 -> flip with left

//[1, 3, 0, 0, 12]
//       l
//              r
//r !== 0 -> flip with left

//[1, 3, 12, 0, 0]

moveZeroes([0]); //[0]
