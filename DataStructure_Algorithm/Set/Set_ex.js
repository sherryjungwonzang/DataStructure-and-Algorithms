//ex1.Check for duplicates in an array
//check whether there are any duplicates in an array of integers using sets
//by converting an array into a set
//the size of the set can be compared with the length of the array to check for duplicates easily
function checkDuplicates(arr) {
    var mySet = new Set(arr);
    return mySet.size < arr.length;
}
console.log(checkDuplicates([1,2,3,4,5])); //false
console.log(checkDuplicates([1,1,2,3,4,5])); //true
//Time Complexity: O(n)
//Space Complexity: O(n)
//in an array of length n, has to iterate trhough the entire array in the worst case and store all those elements in the set


//ex2. Return all unique values from separate arrays
//given two integer arrays with some of the same values
//return one array that has all the unique elements from both of the original arrays
//using sets, unique elements can be stored easily
//by concatenating two arrays and converting them to a set, only unique items are stored
//converting the set to an array results in an array with unique items only
function uniqueList(arr1, arr2) {
    var mySet = new Set(arr1.concat(arr2)); //joins two or more arrays
    return Array.from(mySet);
}
console.log(uniqueList([1,1,2,2], [2,3,4,5])); //[ 1, 2, 3, 4, 5 ]
console.log(uniqueList([1,2], [3,4,5])); //[ 1, 2, 3, 4, 5 ]
console.log(uniqueList([], [2,2,3,4,5])); //[ 2, 3, 4, 5 ]
//Time Complexity: O(n + m)
//Space Complexity: O(n + m)
//n is the length of arr1 and m is the length of arr2
