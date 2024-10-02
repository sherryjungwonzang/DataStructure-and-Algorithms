//2946. Matrix Similarity After Cyclic Shifts
//given an m x n integer matrix 'mat' and an integer 'k'
//the matrix rows are 0-indexed

//the following process happens k times:
//even-indexed rows (0, 2, 4, ...) are cyclically shifted to the left
//odd-indexed rows (1, 3, 5, ...) are cyclically shifted to the right

//return true if the final modified matrix after k steps is identical to the original matrix, and false otherwise
var cyclicShift = (mat, k) => {
    let m = mat.length;
    let n = mat[0].length;

    //target column for cycling
    k = k % n;

    for (let i = 0; i < m; i++) {
        let cycle = [...mat[i].slice(k), ...mat[i].slice(0, k)].join('');
        let original = mat[i].join('');

        //check similarity
        if (cycle !== original) return false;
    }

    return true;
}
//TC: O(1)
//SC: O(1)
cyclicShift([[1,2,3],[4,5,6],[7,8,9]], k = 4); //false
//  1  2  3     2  3  1     3  1  2     1  2  3     2  3  1
//  4  5  6 ->  6  4  5 ->  5  6  4 ->  4  5  6 ->  6  4  5
//  7  8  9     8  9  7     9  7  8     7  8  9     8  9  7

//m = 3, n = 3
//k = 4 % 3 = 1

//i = 0
//[1, 2, 3] -> slice based on index 1
//2, 3 and 1 -> join(): cycle: 231
//                      original: 123
//false

cyclicShift([[1,2,1,2],[5,5,5,5],[6,3,6,3]], k = 2); //true
//  1  2  1  2       2  1  2  1      1  2  1  2
//  5  5  5  5   ->  5  5  5  5  ->  5  5  5  5 
//  6  3  6  3       3  6  3  6      6  3  6  3

//m = 3, n = 4
//k = 2 % 4 = 2

//i = 0
//[1, 2, 1, 2] -> slice based on index 2
//1, 2 and 1, 2 -> join(): cycle: 1212
//                      original: 1212
//true

//i = 1
//[5, 5, 5, 5] -> slice based on index 2
//5, 5 and 5, 5 -> join(): cycle: 5555
//                      original: 5555
//true

//i = 2
//[6, 3, 6, 3] -> slice based on index 2
//6, 3 and 6, 3 -> join(): cycle: 6363
//                      original: 6363
//true

cyclicShift([[2,2],[2,2]], k = 3); //true
