//Contains Duplicate (127)
//given an integer array nums 
//return true if any value appears at least twice in the array and false if every elements is distinct

//Approach
//Set - when initiate it with nums array, only pass in unique values
//and compare with set.size and nums.length -> if it is not same, then return true
var containsDuplicate = (nums) => {
  let set = Set(nums);

  return set.size !== nums.length;
}
//TC: O(n) - n is the value of nums
//SC: O(n) - need to store the values in this set
containsDuplicate([1,2,3,1]); //true
//Set: {  1 2 3 }
//set.size=3 !== nums.length=4

containsDuplicate([1,2,3,4]); //false
//Set: { 1 2 3 4 }
//set.size=4 === nums.length=4

containsDuplicate([1,1,1,3,3,4,3,2,4,2]); //true
