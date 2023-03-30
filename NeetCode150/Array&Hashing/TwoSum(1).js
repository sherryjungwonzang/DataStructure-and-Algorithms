//Two Sum (1)
//given an array of integers 'nums' and integer 'target'
//returns indices of the two numbers such that they add up to target

//Approach:
//using map
//iterate over every single items in the array and find the difference between target and current number
//keep the processed items and their index in a map (nums[i], i)
//so that every time we calculate the new difference, we can check whether that map has item or not
function twoSum(nums, target) {
  //using HashTable
  var map = new Map;
 
  for (var i = 0; i < nums.length; i++) {
    let current = target - nums[i];

    if (map.has(current)) {
      return [i, map.get(current)]; //map.get(): only returns the value in the map
    } else{
      map.set(nums[i], i);
    }
  }
}
//Time Complexity: O(n)
//soace complexity: O(n)
twoSum([2, 7, 11, 15], 9); //[0,1]
//      i
//target = 9, current = 9 - nums[0] = 9-2=7
//check 7 is in the map -> NO
//map.set(nums[0], 0) = (2, 0)
//map = [[2,0], ]

//         i
//target=9, current=9-nums[1] = 9-7=2
//check 2 is in the map -> YES
//return [ map.get(2), 1 ] = [0, 1]

twoSum([3, 2, 4], 6); //[1,2]
//      i
//target=6, current=6-nums[0] = 6-3=3
//check 3 is in the map -> NO
//map.set(nums[0], 0) = (3,0)
//map = [[3,0], ]

//         i
//target=6, current=6-nums[1] = 6-2=4
//check 4 is in the map -> NO
//map.set(nums[1], 1) = (2, 1)
//map = [[3,0], [2,1], ]

//             i
//target=6, current=6-nums[2] = 6-4=2
//check 2 is in the map -> YES
//return [ map.get(2), 2] = [1,2]

twoSum([3,3], 6); //[0,1]
