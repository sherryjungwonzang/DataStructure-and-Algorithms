//79. Word Search
//given an m x n grid of characters 'board' and a string 'word'
//return true if word exists in the gird
//the word can be constructed from letters of sequentially adjacent cells
//where adjacent cells are horizontally or vertically neighboring
//the same letter cell may not be used more than once

//Approach:
//using DFS recursive call - to check all possible solutions within this board
//starting from the [0][0] - to check whether it is equal to word[0] or not
var wordSearch = (board, word) => {
    for (let r = 0; r < board.length; r++) { //row
        for (let c = 0; c < board[0].length; c++) { //column
            if (board[r][c] === word[0] && dfs(r, c, 0)) return true;
        }
    }
    return false;

    //DFS function
    function dfs(r, c, i) { //i is index
        //meaning that we reached out the end of word
        if (word.length === i) return true;

        //inbound checking
        if (r >= board.length || r < 0 || c < 0 || c >= board[0].length || board[r][c] !== word[i]) return false;

        //visited position
        board[r][c] = '#';

        //DFS recursive call
        if (dfs(r + 1, c, i+ 1) || dfs(r - 1, c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1)) return true;

        //reset each position to its original value - backtracking
        board[r][c] = word[i];
    }
} 
//TC: O(n * 3^l) - l is the length of word, 3 is the possible directions
wordSearch([["A", "B", "C", "E"], ["S", "F", "C", "S"],["A", "D", "E", "E"]], "ABCCED"); //true
//word = "ABCCED"
//  "A"  "B"  "C"  "E"
//  "S"  "F"  "C"  "S"
//  "A"  "D"  "E"  "E"

wordSearch([["A", "B", "C", "E"], ["S", "F", "C", "S"],["A", "D", "E", "E"]], "SEE"); //true
//word = "SEE"
//  "A"  "B"  "C"  "E"
//  "S"  "F"  "C"  "S"
//  "A"  "D"  "E"  "E"

wordSearch([["A", "B", "C", "E"], ["S", "F", "C", "S"],["A", "D", "E", "E"]], "ABCB"); //false
//word = "ABCB"
//  "A"  "B"  "C"  "E"
//  "S"  "F"  "C"  "S"
//  "A"  "D"  "E"  "E"
