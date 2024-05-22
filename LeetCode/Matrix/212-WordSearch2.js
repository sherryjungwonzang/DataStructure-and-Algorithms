//212. Word Search II
//given an m x n 'board' of characters and a list of strings 'words'
//return all words on the board

//each word must be constructed from letters of sequentially adjacent cells,
//where adjacent cells are horizontally or vertically neighboring
//the same letter cell may not be used more than once in a word

//Approach:
//using Trie data structure and DFS for traverse
//cf) Word Search1 -> using matrix method
//one different thing from Trie - we set word = "___" at the end of trie not isWord()
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

//DFS function
function dfs(node, i, j, res, board) {
    if (node.word) {
        res.push(node.word); //find the result
        node.word = null; //make it as null after traversing
    }

    //inbound checking
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) return;

    //check with the first column 
    if (!node[board[i][j]]) return;

    let c = board[i][j];
    board[i][j] = '#'; //changing after visited

    //4 directions on DFS
    dfs(node[c], i + 1, j, res, board);
    dfs(node[c], i - 1, j, res, board);
    dfs(node[c], i, j + 1, res, board);
    dfs(node[c], i, j - 1, res, board);

    //backtracking - reset to char
    board[i][j] = c;
}

//Trie
function buildTrie(words) {
    let root = {};

    //looping through each word
    for (let word of words) {
        let currNode = root;

        //looping through each alphabet from word
        for (let char of word) {
            if (!currNode[char]) currNode[char] = {};
            currNode = currNode[char];
        }
        currNode.word = word;
    }
    return root;
}
//TC: O(m * 4 * 3^(l - 1)) 
//m is the num of characters within the board | 4 is the directions | 3 is the max num of positions | l is the length of the words within trie
//SC: O(n) - n is the amount of characters within the trie
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
