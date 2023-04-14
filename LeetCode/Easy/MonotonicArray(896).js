//896. Monotonic Array
//an array is monotonic if it is either monotone increasing or monotone decreasing
//an array 'nums' is monotone increasing if for all i <= j, nums[i] <= nums[j]
//anarray nums is monotone decreasing if for all i <= j and nums[i] >= nums[j]

//given an integer array 'nums'
//return true if the given array is monotonic or false otherwise

//Approach 1)
//using two pointers & checking left and right whether it is increasing or decreasing
var monotonicArray_TwoPointers = (nums) => {
  return increase(nums) || decrease(nums);
}

//helper function
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

function decrease(nums) {
  //setting two pointers
  let left = 0;
  let right = 1;

  while(right < nums.length) {
    if (nums[left] < nums[right]) { //inherently increasing
      return false;
    }
    left++;
    right++;
  }
  return true;
}
monotonicArray_TwoPointers([1,2,2,3]); //true
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


//Approach 2)
//using one pass solution
//setting two flags: increasing and decreasing flags as true
var monotonicArray_OnePass = (nums) => {
  //setting two flags
  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < nums.length - 1; i++) { //to avoid being out of bounds
    if (nums[i] > nums[i + 1]) {
      increasing = false;
    }

    if (nums[i] < nums[i + 1]) {
      decreasing = false;
    }
  }
  return increasing || decreasing
}
monotonicArray_OnePass([1,3,2]); //false
//increasing = true
//decreasing = true

//[1, 3, 2]
// i
//1 < 3 -> decreasing false
//increasing = true
//decreasing = false

//    i
//3 > 2 -> increasing false
//increasing = false
//decreasing = false

//false || false = false

monotonicArray_OnePass([6,5,4,4]); //true
//increasing = true
//decreasing = true

//[6, 5, 4, 4]
// i
//6 > 5 -> increasing -> false
//increasing = false
//decreasing = true

//    i
//5 > 4 -> increasing -> false
//increasing = false
//decreasing = true

//       i
//4 = 4 -> increasing -> false
//increasing = false
//decreasing = true

//true || false -> true
