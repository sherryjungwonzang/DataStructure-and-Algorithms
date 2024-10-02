//2965. Find Missing And Repeated Values
//given a 0-indexed 2D integer matrix 'grid' of size n * n with values in the range [1, n^2]
//each integer appears exactly once except a which appears twice and b which is missing
//the task is to find the repeating and missing numbers a and b
//return o-indexed integer array ans of size 2 where ans[0] equals to 0 and ans[1] equals to b
var findMissingRepeated = (grid) => {
    let m = grid.length;
    let freq = new Array(m * m + 1).fill(0); //to collect frequenct of values
    let repeated = 0;
    let missing = 0;

    //collecting frequency
    for (let row of grid) {
        for (let num of row) {
            freq[num]++;
        }
    }

    //traversing to find repeated and missing
    for (let i = 1; i < freq.length; i++) {
        //missing value
        if (freq[i] === 0) missing = i;

        //repeated value
        if (freq[i] === 2) repeated = i;
    }

    return [repeated, missing];
}
//TC: O(n^2) - the size of the grid
//SC: O(n) - the size of the grid
findMissingRepeated([[1,3],[2,2]]); //[2, 4] - Number 2 is repeated and number 4 is missing
//  1  3
//  2  2

//m = 2
//freq = [0, 0, 0, 0, 0]
//  1  3
//  2  2
//starting with (0, 0) = 1  || (0, 1) = 3       || (1, 0) = 2        || (1, 1) = 2
//freq = [0, 1, 0, 0, 0]    -> [0, 1, 0, 1, 0]   -> [0, 1, 1, 1, 0]   -> [0, 1, 2, 1, 0]

//[0, 1, 2, 1, 0]
//       ^     ^
//repeated = 0 -> 2
//missing = 0 -> 4
//[2, 4]

findMissingRepeated([[9,1,7],[8,9,2],[3,4,6]]); //[9, 5] - Number 9 is repeated and number 5 is missing 
//  9  1  7
//  8  9  2
//  3  4  6

//m = 3
//freq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//  9  1  7
//  8  9  2
//  3  4  6
//starting with (0, 0) = 9                 || (0, 1) = 1                        || (0, 2) = 7     
//freq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]    -> [0, 1, 0, 0, 0, 0, 0, 0, 0, 1]    -> [0, 1, 0, 0, 0, 0, 0, 1, 0, 1]

//second row  (1, 0) = 8                   || (1, 1) = 9                        || (1, 2) = 2     
//freq = [0, 1, 0, 0, 0, 0, 0, 1, 1, 1]    -> [0, 1, 0, 0, 0, 0, 0, 1, 1, 2]    -> [0, 1, 1, 0, 0, 0, 0, 1, 1, 2] 

//third row  (1, 0) = 3                    || (1, 1) = 4                        || (1, 2) = 6     
//freq = [0, 1, 1, 1, 0, 0, 0, 1, 1, 2]    -> [0, 1, 1, 1, 1, 0, 0, 1, 1, 2]     -> [0, 1, 1, 1, 1, 0, 1, 1, 1, 2] 

//[0, 1, 1, 1, 1, 0, 1, 1, 1, 2] 
//                ^           ^
//repeated = 0 -> 9
//missing = 0 -> 5
//[9, 5]
