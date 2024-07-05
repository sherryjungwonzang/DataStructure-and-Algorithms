//287. Find The Duplicate Number
//given an array of integers 'nums' - containing n + 1 integers
//where each integer is in the range [1, n] inclusive
//there is only one repeated number in nums
//return this repeated number

//Approach:
//using Set and hash to check duplicates
var findDuplicate = (nums) => {
    let visited = new Set();

    for (let num of nums) {
        if (visited.has(num)) return num; //duplicates
        visited.add(num); //non-duplicates adding to visited Set()
    }
    return -1;
}
//TC: O(n)
//SC: O(n)
findDuplicate([1,3,4,2,2]); //2
//visited = []

//[1, 3, 4, 2, 2]
// ^        ^
//visited = [1, 3, 4, 2]

//[1, 3, 4, 2, 2]
//             ^
//return 2

findDuplicate([3,1,3,4,2]); //3
//visited = []

//[3, 1, 3, 4, 2]
// ^  ^
//visited = [3, 1]

//[3, 1, 3, 4, 2]
//       ^
//return 3

findDuplicate([3,3,3,3,3]); //3
