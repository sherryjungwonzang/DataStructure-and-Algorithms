//2869. Minimum Operations To Collect Elements
//given an array nums of positive integers and an integer k
//in one operation, you can remove the last element of the array and add it to your collection
//return the minimum number of operations needed to collect elements 1, 2, ..., k

//Approach:
//using hash set
var minOperations = (nums, k) => {
    let collection = new Set();
    let count = 0;

    //traversing
    while (collection.size !== k) {
        //extracting from the end
        let curr = nums.pop();

        //collecting elements in the range
        if (curr <= k) collection.add(curr);

        //operations
        count++;
    }

    return count;
}
minOperations(nums = [3,1,5,4,2], k = 2); //4
//[3, 1, 5, 4, 2]
//             ^
//curr = 2 <= 2 -> collection = { 2, }
//count = 0 -> 1

//[3, 1, 5, 4, 2]
//          ^
//curr = 4 <= 2 -> no
//count = 0 -> 1 -> 2

//[3, 1, 5, 4, 2]
//       ^
//curr = 5 <= 2 -> no
//count = 0 -> 1 -> 2 -> 3

//[3, 1, 5, 4, 2]
//    ^
//curr = 2 <= 2 -> collection = { 2, 1 }
//count = 0 -> 1 -> 2 -> 3 -> 4

minOperations(nums = [3,1,5,4,2], k = 5); //5
//[3, 1, 5, 4, 2]
//             ^
//curr = 2 <= 5 -> collection = { 2, }
//count = 0 -> 1

//[3, 1, 5, 4, 2]
//          ^
//curr = 4 <= 5 -> collection = { 2, 4, }
//count = 0 -> 1 -> 2

//[3, 1, 5, 4, 2]
//       ^
//curr = 5 <= 5 -> collection = { 2, 4, 5, }
//count = 0 -> 1 -> 2 -> 3

//[3, 1, 5, 4, 2]
//    ^
//curr = 1 <= 5 -> collection = { 2, 4, 5, 1, }
//count = 0 -> 1 -> 2 -> 3 -> 4

//[3, 1, 5, 4, 2]
// ^
//curr = 3 <= 5 -> collection = { 2, 4, 5, 1, 3 }
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5

minOperations(nums = [3,2,5,3,1], k = 3); //4
