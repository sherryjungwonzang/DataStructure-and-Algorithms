//3Sum (15)
//given an integer array nums
//return all the triplets [nums[i], nums[j], nums[k]]
//such that i != j, j != k and nums[i] + nums[j] + nums[k] == 0

//solution set must not containe duplicate triplets

//Approach:
//using Brute Force approach - sorting and using two pointers
//looping through array 3 times
//compare the values -> equal: push into the array and remove duplicates
var threeSum = (nums) => {
  //edge case
  if(nums.length === 0) return [];

  //sorting
  nums = nums.sort((a,b) => a - b);

  let res = [];

  for (let i = 0; i < nums.length - 2; i++) { //in the array there are j and k at the end -> so nums.length - 2
    //stop duplicates from occuring
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    //two pointers technique
    //j and k move across depending on whether the total summation of the current numbers add up to less than or greater than zero
    let j = i + 1;
    let k = nums.length - 1;

    //loop with two pointers
    while(j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        res.push(nums[i], nums[j], nums[k]);

        //stop duplicates
        while(nums[j] === nums[j + 1]) j++;
        while(nums[k] === nums[k + 1]) k--;

        //if not equal
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
}
//TC: O(nlog(n)): for sorting * O(n^2): two pointers loop through = O(nlog(n) * n^2) = O(n^2)
//SC: O(1) - only using sorted nums array
threeSum([-1,0,1,2,-1,-4]); //[[-1,-1,2], [-1,0,1]]
//sorted -> [-4, -1, -1, 0, 1, 2]
//           i    j            k
//-4+-1+2 < 0 -> j++ 
//           i       j         k
//-4+-1+2 < 0 -> j++ 
//           i           j     k
//-4+0+2 < 0 -> j++
//           i              j  k
//-4+1+2 < 0 -> j++ -> out of bound

//moving i
//                i    j       k
//-1+-1+2 = 0 -> res
//res = [[-1, -1, 2], ]
//                i       j    k
//-1+0+2 > 0 -> k--
//                i       j  k
//-1+0+1 = 0 -> res
//res = [[-1, -1, 2], [-1, 0, 1]]
//...

threeSum([0,1,1]); //[] - the only possible triplet does not sum up to 0
//sorted = [0, 1, 1]
//          i  j  k
//0+1+1 > 0 -> k--
//j = k -> the end

threeSum([0,0,0]); //[[0,0,0]] - the only possible triplet sums up to 0
//sorted = [0, 0, 0]
//          i  j  k
//0+0+0 = 0 === 0 -> res
