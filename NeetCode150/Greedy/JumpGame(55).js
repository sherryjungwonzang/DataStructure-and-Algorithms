//Jump Game (55)
//given an integer array 'nums'
//initially positioned at the array's first index, and each element in the array represents max jump length at that position
//return true - if can reach the last index
//otherwise false

//Approach:
//Greedy Algorithm - makes locally optimal choices at each steps
//loop through backwards
var jumpGame = (nums) => {
  //declare target
  let target = nums.length - 1;

  //loop through array backwards
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= target) {
      target = i;
    }
  }
  return target === 0;
}
//TC: O(N) - loop through nums array
//SC: O(1)
jumpGame([2, 3, 1, 1, 4]); //true - jump 1 step from index 0 to 1, then 3 steps to the last index
//                    i  | target = 4
//staring index[4] & move to [3]  
//check index[3] can reach to index[4] -> YES
//using greedy algorithm -> update to target = 3

//                  i    | target = 3
//staring [3] & move to [2] 
//check index[2] can reach to index[3] -> YES
//using greedy algorithm -> update to target = 2

//               i       | target = 2
//staring [2] & move to [1] 
//check index[1] can reach to index[2] -> YES
//using greedy algorithm -> update to target = 1

//            i          | target = 1
//staring [1] & move to [0] 
//check index[0] can reach to index[1] -> YES
//using greedy algorithm -> update to target = 0

//if target gets to 0 -> return true

jumpGame([3, 2, 1, 0, 4]); //false - always arrvie at index 3 | it's max jump length is 0, which makes it impossible to reach the last index
//                    i  | target = 4
//staring index[4] & move to [3]  
//check index[3] can reach to index[4] -> NO, 0 cannot go anywhere

//                 i     | target = 4
//staring index[3] & move to [2]  
//check index[2] can reach to index[4] -> NO, only can go index[3]

//              i        | target = 4
//staring index[2] & move to [1]  
//check index[1] can reach to index[4] -> NO, only can go index[2] and index[3]

//           i           | target = 4
//staring index[1] & move to [0]  
//check index[0] can reach to index[4] -> NO, only can go index[1], index[2] and index[3]

//target is not equal to 0 -> return false
