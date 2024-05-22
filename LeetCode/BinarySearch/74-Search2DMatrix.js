//74. Search a 2D Matrix
//given an m x n integer matrix 'matrix' with the following two properties:
//each row is sorted in non-decreasing order
//the first integer of each row is greater than the last integer of the previous row

//given an integer 'target'
//return true if target is in matrix or false otherwise
//you must write a solution in O(log (m * n)) time complexity

//Approach:
//using Binary Search for searching the target in sorted 2D matrix
var search2DMatrix = (matrix, target) => {
    let m = matrix.length;
    let n = matrix[0].length;
    let left = 0;
    let right = m * n  - 1; //same with nums.length - 1 || nums.length is m * n here

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        let midVal = matrix[Math.floor(mid / n)][mid % n]; //representing the matrix of mid

        if (midVal === target) {
            return true;
        } else if (midVal < target) {
            left = mid + 1; //updating left value
        } else {
            right = mid - 1; //updating right value
        }
    }
    return false;
}
//TC: O(log(m * n))
search2DMatrix([[1,3,5,7], [10,11,16,20], [23,30,34,60]], 3); //true
//m = 3
//n = 4
//left = 0
//right = 11
//mid = (0+11)/2 = 5
//midVal = matrix[5/4][5%4] = matrix[1][1] = 11
//11 > target=3 -> update right

//m = 3
//n = 4
//left = 0
//right = 5-1=4
//mid = (0+4)/2 = 2
//midVal = matrix[2/4][2%4] = matrix[0][2] = 5
//5 < target=3 -> update right

//m = 3
//n = 4
//left = 0
//right = 2-1=1
//mid = (0+1)/2=0
//midVal = matrix[0/4][0%4] = matrix[0][0] = 1
//1 > target=3 -> update left

//m = 3
//n = 4
//left = 0+1 = 1
//right = 1
//mid = (1+1)/2 = 1
//midVal = matrix[1/4][1%4] = matrix[0][1] = 3
//3 = target -> true

search2DMatrix([[1,3,5,7], [10,11,16,20], [23,30,34,60]], 13); //false
