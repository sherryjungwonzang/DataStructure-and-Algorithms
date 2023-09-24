//18. 4Sum
//Given an array nums of n integers
//return an array of all the unique quadruplets - nums[a], nums[b], nums[c], nums[d]
//0 <= a, b, c, d < n
//a, b, c and d are distinct
//nums[a] + nums[b] + nums[c] + nums[d] === target

//Approach:
//using four pointers with checking duplicates of i, j, k and l
var fourSum = (nums, target) => {
  //sorting the array
  nums.sort((a, b) => a - b);

  //setting the res array
  let res = [];

  //edge case
  if (nums.length < 4) return [];

  //setting four pointers
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let k = j + 1;
      let l = nums.length - 1;

      while (k < l) {
        //setting sum
        let sum = nums[i] + nums[j] + nums[k] + nums[l];

        if (sum === target) {
          res.push([nums[i], nums[j], nums[k], nums[l]]);

          //check duplicates of k and l
          while(nums[k] === nums[k + 1]);
          while(nums[l] === nums[l - 1]);
          k++;
          l--;


        } else if (sum < target) {
          k++;
        } else {
          l--;
        }
      }
      //checking duplicates of j
      while(nums[j] === nums[j + 1]) j++;
    }
    //checking duplicates of i
    while(nums[i] === nums[i + 1]) i++;
  }
  return res;
}
fourSum([1, 0, -1, 0, -2, 2], 0); //[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

fourSum([2, 2, 2, 2, 2], 8); //[[2,2,2,2]]
