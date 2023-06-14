//27. Remove Element
//given an integer array 'nums' and an integer 'val'
//remove all occurences of 'val' in 'nums' in-place
//the order of the elements may be changed
//then return the num of elements in nums - which are not equal to val

//consider the num of elements in nums - which are not equal to val be 'k'
//to get accepted, need to follow things:

//change the array nums such that the first k elements of nums contain the elements which are not equal to val
//the remaining elements of nums are not important as well as the size of nums
//return k
var removeElement = (nums, val) => {
  //setting k as 0 to update the total number 
  let k = 0;

  //looping through given nums array
  for (let i = 0; i < nums.length; i++) {
    //checking the element which is equal to val
    if (nums[i] !== val) { //not equal
      //updating the nums[k] position value to nums[i] value
      nums[k] = nums[i];
      //move k
      k++;
    }
  }
  return k;
}
removeElement([3,2,2,3], 3); //2, nums = [2,2,_,_]
//[3, 2, 2, 3]
// i
//k = 0 | val = 3

//nums[0] = 3 === val
//nums[1] = 2 !== val -> update nums[0] with 2
//nums = [2, ]
//nums[2] = 2 !== val -> update nums[1] with 2
//nums = [2, 2, ]
//nums[3] = 3 === val

//nums = [2, 2]
//k = 2

removeElement([0,1,2,2,3,0,4,2], 2); //5, nums = [0,1,4,0,3,_,_,_]
//[0, 1, 2, 2, 3, 0, 4, 2]
//                   i
//k = 0 | val = 2

//nums[0] = 0 !== val -> update nums[0] with 0
//nums = [0, ]
//nums[1] = 1 !== val -> update nums[1] with 1
//nums = [0, 1, ]
//nums[2] = 2 === val
//nums[3] = 2 === val
//nums[4] = 3 !== val -> update nums[2] with 3
//nums = [0, 1, 3, ]
//nums[5] = 0 !== val -> update nums[3] with 0
//nums = [0, 1, 3, 0, ]
//nums[6] = 4 !== val -> update nums[4] with 0
//nums = [0, 1, 3, 0, 4, ]
//nums[7] = 2 === val

//nums = [0, 1, 3, 0, 4]
//k = 5
