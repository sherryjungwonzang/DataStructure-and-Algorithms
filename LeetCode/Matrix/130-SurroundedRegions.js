//130. Surrounded Regions
//given an m x n matrix 'board' - containing 'X' and 'O'
//capture all regions that are 4-directionally surrounded by 'X'
//a region is captured by flipping all 'O's into 'X's in that surrounded region

//Approach:
//using DFS
//find "O"s and do the DFS on Os
//only Os on the border - marked as "#"
//flip those elements to "X"
var surroundedRegions = (board) => {
    let m = board.length;
    let n = board[0].length;

    //grabbing all "O" position and do DFS
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "O" && i === 0 || j === 0 || i === m - 1 || j === n - 1) {
                dfs(i, j);
            }
        }
    }

    //DFS - only markng "O" on the border as "#"
     function dfs(r, c) {
        //checking all not "O"
        if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== "O") return;

        board[r][c] = "#"; //marking as visited

        //recursive calls
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);

        return;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "#") {
                board[i][j] = "O"; //restoring "#" to "O"
            } else {
                board[i][j] = "X"; //flipping "O" to "X"
            }
        }
    }
}
//TC: O(m * n) - m is the num of rows and n is the num of cols
//SC: O(1)
surroundedRegions([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]); 
//Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]])
//Notice that an 'O' should not be flipped if:
//- It is on the border, or
//- It is adjacent to an 'O' that should not be flipped.
//The bottom 'O' is on the border, so it is not flipped.
//The other three 'O' form a surrounded region, so they are flipped.

surroundedRegions([["X"]]); //[["X"]]
