//Word Search (79)
//given an m x n grid of characters 'board' and a string 'word'
//return true if word exists in the gird
//the word can be constructed from letters of sequentially adjacent cells
//where adjacent cells are horizontally or vertically neighboring
//the same letter cell may not be used more than once
var wordSearch = (board, word) => {
  //loop through the board
  //check to see whether we have the initial letter that is in word
  for (let r = 0; r < board.length; r++) { //row
    for (let c = 0; c < board[0].length; c++) { //column
      if (board[r][c] === word[0] && dfs(r, c, 0)) { return true; //dfs(r, c, 0) - 0 is for the index 
      }
    }
    return false;
  }

  //DFS recursive call
  function dfs(r, c, i) {
    //we have reached the end of the word 
    //and found all of the letters within the board 
    if (word.length === i) return true; 

    //need to carry out the inbound check
    if (r >= board.length || r < 0 || c < 0 || c >= board[0].length || board[r][c] !== word[i]) return false;

    //set visited as changing the value as '#'
    board[r][c] = '#';

    //DFS recursive call
    //to check all 4 directions and after the initial, to check all three directions
    if (dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1)) {
      return true;
    }

    //need to reset board[r][c]
    board[r][c] = word[i];
  }
} 
wordSearch([["A", "B", "C", "E"], ["S", "F", "C", "S"],["A", "D", "E", "E"]], "ABCCED"); //true
//word = "ABCCED"
//  "A"  "B"  "C"  "E"
//  "S"  "F"  "C"  "S"
//  "A"  "D"  "E"  "E"

wordSearch([["A", "B", "C", "E"], ["S", "F", "C", "S"],["A", "D", "E", "E"]], "SEE"); //true

wordSearch([["A", "B", "C", "E"], ["S", "F", "C", "S"],["A", "D", "E", "E"]], "ABCB"); //false




