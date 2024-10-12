//51. N-Queens
//the n-queens puzzle is the problem of placing 'n' queens on an n x n chessboard such that no two queens attack each other
//given an integer 'n'
//return all distinct solutions to the n-queens puzzle
//may return the answer in any order

//each solution contains a distinct board configuration of the n-queens' placement
//where 'Q' and '.' both indicate a queen and an empty space, respectively

//Approach:
//using recursion and backtracking
var nQueens = (n) => {
    //base case
    if (n.length === 1) return [["Q"]];

    let col = new Set(); 
    let posDiag = new Set();
    let negDiag = new Set();
    let res = [];
    let board = Array.from(Array(n), () => new Array(n).fill(".")); //2 x 2 board

    //checking validation - posDiag: r + c, negDiag: r - c
    const isValid = (r, c) => !(col.has(c) || posDiag.has(r + c) || negDiag.has(r - c));

    //adding queen
    function addQueen(r, c) {
        col.add(c);
        posDiag.add(r + c);
        negDiag.add(r - c);

        board[r][c] = "Q"; //adding
    };

    //removing queen
    function removeQueen(r, c) {
        col.delete(c);
        posDiag.delete(r + c);
        negDiag.delete(r - c);

        board[r][c] = "."; //removing
    };

    //recursive backtracking
    function recurse(row) {
        //base case
        if (row === n) res.push([...board].map((row) => row.join(""))); //create a copy of board

        //recursive calls
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                addQueen(row, col);

                recurse(row + 1);

                removeQueen(row, col);
            }
        }
    };

    recurse(0);

    return res;
}
nQueens(4); //[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]] - There exist two distinct solutions to the 4-queens puzzle

nQueens(1); //[["Q"]]
