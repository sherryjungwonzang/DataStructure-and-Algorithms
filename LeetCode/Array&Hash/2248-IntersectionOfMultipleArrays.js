//2248. Intersection Of Multiple Arrays
//given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers
//return the list of integers that are present in each array of nums sorted in ascending order

//Approach:
//using set
var intersectionMultipleArr = (nums) => {
    //base case
    if (nums.length === 1) return nums[0].sort((a, b) => a - b);

    let set = new Set(nums[0]); //base set

    for (let i = 1; i < nums.length; i++) {
        //only extracting duplicate nums
        set = new Set([...nums[i]].filter(x => set.has(x)));
    }

    return Array.from(set).sort((a, b) => a - b);
}
intersectionMultipleArr([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]); //[3, 4]
//set = { 3, 1, 2, 4, 5 }

//[1, 2, 3, 4], [3, 4, 5, 6]
//      ^
//set = { 3, 1, 2, 4, 5 } -> { 3, 1, 2, 4 }

//[1, 2, 3, 4], [3, 4, 5, 6]
//                    ^
//set = { 3, 1, 2, 4, 5 } -> { 3, 1, 2, 4 } -> { 3, 4 }

//[3, 4]

intersectionMultipleArr([[1,2,3],[4,5,6]]); //[]
//set = { 1, 2, 3 }

//[4, 5, 6]
//    ^
//set = { 1, 2, 3 } -> { }: no duplicates

//[]
