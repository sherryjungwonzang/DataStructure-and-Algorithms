//Word Search II (212)
//given an m x n 'board' of characters and a list of strings 'words'
//return all words on the board

//each word must be constructed from letters of sequentially adjacent cells,
//where adjacen cells are horizontally or vertically neighboring
//the same letter cell may not be used more than once in a word
var wordSearch2 = (board, words) => {
  let res = [];
  let root = buildTrie(words);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      //DFS
      dfs(root, i, j, res, board);
    }
   }
   return res;
}

function dfs(node, i, j, res, board) {
  //check whether position or the node has the word property attached to it
  if (node.word) {
    res.push(node.word);
    node.word = null; //to avoid the duplicates
  }

  //to check whether the value is inbound
  if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) return;
  //if the position in the board is not found within the trie - return
  //because the is not a potential path
  if (!node[board[i][j]]) return;

  //to stop infinite loop from occuring
  let c = board[i][j];
  board[i][j] = '#'; //to avoid to go back to visited node
  //DFS in four directions
  dfs(node[c], i + 1, j, res, board);
  dfs(node[c], i - 1, j, res, board);
  dfs(node[c], i, j + 1, res, board);
  dfs(node[c], i, j - 1, res, board);

  //need to reset border of i and j - # to char again
  board[i][j] = c;
}

function buildTrie(words) {
  let root = {};

  for (let word of words) {
    let currNode = root;

    for (let char of word) {
      if (!currNode[char]) currNode[char] = {};
      currNode = currNode[char]; //otherwise
    }
    currNode.word = word;
  }
  return root;
}

wordSearch2([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"]); //["eat","oath"]
//DFS                         Trie
//o   a   a   n                 {}
//e   t   a   e          * o   p   e   r
//i   h   k   r            |   |   |   |
//i   f   l   v            a   e   a   a
//                         |   |   |   |
//                         t   a   t   i
//                         |           |
//                         h           n


//starting from 'o' -> check if 'o' is in the * -> YES -> set 'o' as #
//(need to find 'oath')
//move to 'a' and check 'a's four directions and  move to 't' -> move to 'h'
//at 'h', put res the 'oath'
//reset # to char

//starting from 'a', 'a', 'n' again in the first row -> not in *
//move to 'e' and check 'e' is in * -> YES -> no 'a' around 'e'
//move to 't', 'a' and 'e' -> check 'e' is in * -> YES
//check 'e's four directions and move to 'a' -> move to 't'
//at 't', put res the 'eat'
//reset # to char
//...
//res = ["oath", "eat"]



wordSearch2([["a","b"],["c","d"]], ["abcb"]); //[]
//DFS             Trie
//a   b            {}
//c   d            a
//                 |
//                 b
//                 |
//                 c
//                 |
//                 b
