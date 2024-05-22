//217. Contains Duplicate
//given an integer array nums 
//return true if any value appears at least twice in the array and false if every elements is distinct

//Approach
//using Set - when initiate it with nums array | since Set only pass in unique values
//and compare with set.size and nums.length 
//if it is not same, then return true
var containsDuplicate = (nums) => {
    let set = new Set(nums);

    return set.size !== nums.length; //not equal means having a duplicate -> true
}
//TC: O(n) - n is the value of nums
//SC: O(n) - need to store the values in this set
containsDuplicate([1,2,3,1]); //true
//Set: { 1 2 3 }
//set.size = 3 !== nums.length = 4
//not equal meaning having a duplicates -> True

containsDuplicate([1,2,3,4]); //false
//Set: { 1 2 3 4 }
//set.size = 4 === nums.length = 4
//equal meaning not having a duplicates -> False

containsDuplicate([1,1,1,3,3,4,3,2,4,2]); //true
//Set: { 1 2 3 4 }
//set.size = 4 !== nums.length = 10
//not equal meaning having a duplicates -> True

