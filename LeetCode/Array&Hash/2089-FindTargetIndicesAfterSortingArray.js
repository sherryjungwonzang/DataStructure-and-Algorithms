//2089. Find Target Indices After Sorting Array
//given 0-indexed integer array nums and a target element target
//a target index is an index i such that nums[i] === target
//return a list of the target indices of nums after sorting nums in non-decresing order
//if there are no target indices, return an empty list
//the returned list must be sorted in increasing order

//Approach:
//using sorting
var findTargetIndices = (nums, target) => {
    let n = nums.length;
    let arr = [];

    //sorting
    nums.sort((a, b) => a - b);

    //searching target
    for (let i = 0; i < n; i++) {
        if (nums[i] === target) arr.push(i);
    }

    return arr;
}
findTargetIndices([1,2,5,2,3], 2); //[1, 2]
//sorting: [1, 2, 2, 3, 5]
//i = 0     ^ -> 1 != 2
//arr = []

//sorting: [1, 2, 2, 3, 5]
//i = 1        ^ -> 2 = 2
//arr = [1, ]

//sorting: [1, 2, 2, 3, 5]
//i = 2           ^ -> 2 = 2
//arr = [1, 2]

//sorting: [1, 2, 2, 3, 5]
//i = 3              ^ -> 3 != 2
//arr = [1, 2]

//sorting: [1, 2, 2, 3, 5]
//i = 4                 ^ -> 5 != 2
//arr = [1, 2]

findTargetIndices([1,2,5,2,3], 3); //[3]
//sorting: [1, 2, 2, 3, 5]
//i = 0     ^ -> 1 != 3
//arr = []

//sorting: [1, 2, 2, 3, 5]
//i = 1        ^ -> 2 != 3
//arr = []

//sorting: [1, 2, 2, 3, 5]
//i = 2           ^ -> 2 != 3
//arr = []

//sorting: [1, 2, 2, 3, 5]
//i = 3              ^ -> 3 = 3
//arr = [3]

//sorting: [1, 2, 2, 3, 5]
//i = 4                 ^ -> 5 != 3
//arr = [3]

findTargetIndices([1,2,5,2,3], 5); //[4]
//sorting: [1, 2, 2, 3, 5]
//i = 0     ^ -> 1 != 5
//arr = []

//sorting: [1, 2, 2, 3, 5]
//i = 1        ^ -> 2 != 5
//arr = []

//sorting: [1, 2, 2, 3, 5]
//i = 2           ^ -> 2 != 5
//arr = []

//sorting: [1, 2, 2, 3, 5]
//i = 3              ^ -> 3 != 5
//arr = []

//sorting: [1, 2, 2, 3, 5]
//i = 4                 ^ -> 5 = 5
//arr = [5]
