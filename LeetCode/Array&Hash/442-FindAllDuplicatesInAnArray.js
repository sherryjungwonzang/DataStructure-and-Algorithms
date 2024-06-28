//442. Find all duplicates in an array
//given an integer array 'nums' of length 'n'
//where all the integers of nums are in the range [1, n] and each integer appears once or twice
//return an array of all the integers that appears twice

//Approach:
//using set
var findAllDuplicates = (nums) => {
    let visited = new Set(); //to store visited elements
    let res = [];

    for (let num of nums) {
        if (visited.has(num)) res.push(num); //duplicates
        else visited.add(num); //adding to set
    }

    return res;
}
//TC: O(n)
//SC: O(n)
findAllDuplicates([4,3,2,7,8,2,3,1]); //[2,3]
//[4, 3, 2, 7, 8, 2, 3, 1]
// ^

//visited = [ 4, 3, 2, 7, 8, 1 ]
//res = [ 2, 3 ]

findAllDuplicates([1,1,2]); //[1]

findAllDuplicates([1]); //[]
