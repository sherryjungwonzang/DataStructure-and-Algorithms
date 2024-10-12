//52. N-Queens2
//the n-queens puzzle is the problem of placing 'n' queens on an n x n chessboard such that no two queens attack each other
//given an integer 'n'
//return the number of distinct solutions to the n-queens puzzle

//Approach:
//using recursion and backtracking
var nQueens2 = (n) => {
    let col = new Set(); 
    let posDiag = new Set();
    let negDiag = new Set();
    let count = 0;

    //checking validation - posDiag: r + c, negDiag: r - c
    const isValid = (r, c) => !(col.has(c) || posDiag.has(r + c) || negDiag.has(r - c));

    //adding queen
    function addQueen(r, c) {
        col.add(c);
        posDiag.add(r + c);
        negDiag.add(r - c);
    };

    //removing queen
    function removeQueen(r, c) {
        col.delete(c);
        posDiag.delete(r + c);
        negDiag.delete(r - c);
    };

    //recursive backtracking
    function recurse(row) {
        //base case
        if (row === n) count++;

        //recursive calls
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                addQueen(row, col);

                count = recurse(row + 1, count);

                removeQueen(row, col);
            }
        }

        return count;
    };

    return recurse(0);
}
nQueens2(4); //2 - there are two distinct solutions to the 4-queens puzzle as shown

nQueens2(1); //1
