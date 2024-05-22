//740. Delete and Earn
//given an integer array 'nums'
//want to maximize the number of points you get by performing the following operation any number of times:

//pick any nums[i] and delete it to earn nums[i] points
//afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1

//return the max number of points you can earn by applying the above operation some number of times

//Approach:
//using DP array and two separate arrays to store the value of points and earned
//'points' Array: 
var deleteAndEarn = (nums) => {
  //base case
  if (nums.length === 1) return nums[0];

  var points = new Array(Math.max(...nums) + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    points[nums[i]] += nums[i];
  }

  var earned = new Array(...points).fill(0);
  earned[1] = points[1];
  for (let i = 2; i < points.length; i++) {
    //storing at the current position (current + earned 2 positions before, earned 1 position before)
    earned[i] = Math.max(earned[i - 1], earned[i - 2] + points[i]); 
  }

  return Math.max(earned[earned.length - 1], earned[earned.length - 2]);
}
//TC: O(n)
//SC: O(n)
deleteAndEarn([3,4,2]); //6 
//Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2]
//Delete 2 to earn 2 points. nums = []
//You earn a total of 6 points

deleteAndEarn([2,2,3,3,3,4]); //9
//Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3]
//Delete a 3 again to earn 3 points. nums = [3]
//Delete a 3 once more to earn 3 points. nums = []
//You earn a total of 9 points
