//45. Jump Game2
//given a 0-indexed array of integers 'nums' of length 'n'
//initially positioned at nums[0]

//each element nums[i] represents the max length of a forward jump from index i
//if you are at nums[i], can jump any nums[i + j]
//0 <= j <= nums[i]
//i + j < n

//return the min number of jumps to reach nums[n - 1]
//the test cases are generated such that you can reach nums[n - 1]

//Approach:
//using two pointers
var jumpGame2 = (nums) => {
  //setting n
  let n = nums.length;
  let jumps = 0;
  //setting two pointers
  let left = 0;
  let right = 0;

  //looping through given nums array
  while(right < n - 1) {
    //setting max as 0
    let max = 0;

    for (let i = 0; i <= right; i++) {
      //updating max value
      max = Math.max(max, i + nums[i]);
    }

    //move left and right pointer
    left = right + 1;
    right = max;
    //update jumps count
    jumps++;
  }
  return jumps;
}
jumpGame2([2,3,1,1,4]); //2 - the min number of jumps to reach the last index is 2
//Jump1 step from index 0 to 1, then 3 steps to the last index

//[2, 3, 1, 1, 4]
// 0  1  2  3  4 - length: 5 = n
//jumps = 0

// l
// r
//max = 0
// i
//updating max - max(0, 0 + 2) = 2
//max = 2 -> right pointer position
//jumps = 1

//     l
//         r
//max = 2
//     i
//updating max - max(2, 1 + 3) = 4
//max = 4 -> right pointer position
//jumps = 2

//         l
//             r
//right = 4 < n - 1 = 4 -> false

//jumps = 2

jumpGame2([2,3,0,1,4]); //2
//[2, 3, 0, 1, 4]
// 0  1  2  3  4 - length: 5 = n
//jumps = 0

// l
// r
//max = 0
// i
//updating max - max(0, 0 + 2) = 2
//max = 2 -> right pointer position
//jumps = 1

//     l
//         r
//max = 2
//     i
//updating max - max(2, 1 + 3) = 4
//max = 4 -> right pointer position
//jumps = 2

//         l
//             r
//right = 4 < n - 1 = 4 -> false

//jumps = 2
