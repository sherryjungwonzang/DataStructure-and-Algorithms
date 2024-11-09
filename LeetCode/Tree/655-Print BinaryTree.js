//655. Print Binary Tree
//given the root of a binary tree, 
//construct a 0-indexed m x n string matrix res that represents a formatted layout of the tree

//the formatted layout matrix should be constructed using the following rules:
//the height of the tree is height and the number of rows m should be equal to height + 1
//the number of columns n should be equal to 2height+1 - 1
//place the root node in the middle of the top row (more formally, at location res[0][(n-1)/2])
//for each node that has been placed in the matrix at position res[r][c], place its left child at res[r+1][c-2height-r-1] and its right child at res[r+1][c+2height-r-1]
//continue this process until all the nodes in the tree have been placed
//any empty cells should contain the empty string ""

//return the constructed matrix res

//Approach:
//using DFS with stack
var printBinaryTree = (root) => {
    let height = findHeight(root);
    let width = 2 ** height - 1;
    let tree = Array.from(Array(height), () => new Array(width).fill("")); //2D array

    //to find height
    function findHeight(root) {
        //base case
        if (root === null) return 0;

        return Math.max(findHeight(root.left), findHeight(root.right)) + 1;
    }

    //DFS
    function dfs(root, tree, width) {
        //using stack
        let stack = [[root, 0, width - 1, 0]];
        let curr, left, right, depth;

        while (stack.length) {
            let [curr, left, right, depth] = stack.pop();
            let mid = left + Math.floor((right - left) / 2);

            tree[depth][mid] = curr.val.toString();

            //recursive calls
            if (curr.left !== null) stack.push([curr.left, left, mid - 1, depth + 1]);
            if (curr.right !== null) stack.push([curr.right, mid + 1, right, depth + 1]);
        }
    }

    dfs(root, tree, width);

    return tree;
}
printBinaryTree([1, 2]); // [["","1",""],
//                           ["2","",""]]
//    1
//  2

printBinaryTree([1,2,3,null,4]); //[["","","","1","","",""],
//                                  ["","2","","","","3",""],
//                                  ["","","4","","","",""]]  
//       1
//    2     3
//      4

//first check height
//findHeight([1,2,3,null,4]) -> L: findHeight([2, null, 4]) = 2
//                              R: findHeight([3]) = 1                  -> height = max(2, 1) + 1 = 3

//findHeight([2, null, 4]) -> L: findHeight(null) = 0                                       ||  findHeight([3]) -> L: findHeight(null) = 0
//                            R: findHeight([4]) = 1 -> height = max(0, 1) + 1 = 2                                 R: findHeight(null) = 0 -> height = max(0, 0) + 1 = 1

//findHeight([4]) -> L: findHeight(null) = 0
//                   R: findHeight(null) = 0 -> height = max(0, 0) + 1 = 1

//height = 2 || width = 2 ** 3 - 1 = 7 || tree = [["","","","","","",""],["","","","","","",""],["","","","","","",""]]
//starting dfs([1, 2, 3, null, 4], [ [" "," "," "," "," "," "," "],[" "," "," "," "," "," "," "],[" "," "," "," "," "," "," "] ], 7)

//dfs([1, 2, 3, null, 4], [ [" "," "," "," "," "," "," "],[" "," "," "," "," "," "," "],[" "," "," "," "," "," "," "] ], 7) 
//stack = [ [1, 2, 3, null, 4], 0, 7 - 1, 0 ]
//[curr, left, right, depth] = [[1, 2, 3, null, 4], 0, 6, 0]
//mid = 0 + (6 - 0) / 2 = 3 -> tree[0][3] = 1.toString() = 3
//tree = [[" "," "," ","1"," "," "," "],
//        [" "," "," "," "," "," "," "],
//        [" "," "," "," "," "," "," "]]
//adding child nodes
//stack -> L: [ [2, null, 4], 0, 2, 1 ]
//         R: [ [3], 4, 6, 1]


//stack = [ [2, null, 4], 0, 2, 1 ]                                         [ [3], 4, 6, 1]
//[curr, left, right, depth] = [ [2, null, 4], 0, 2, 1 ]                    [curr, left, right, depth] = [ [3], 4, 6, 1]
//mid = 0 + (2 - 0) / 2 = 1 -> tree[1][1] = 2.toString() = 2                mid = 4 + (6 - 4) / 2 = 5 -> tree[1][5] = 3.toString() = 3
//tree = [[" "," "," ","1"," "," "," "],                                    tree = [[" "," "," ","1"," "," "," "],
//        [" ","2"," "," "," "," "," "],                                            [" ","2"," "," "," ","3"," "],
//        [" "," "," "," "," "," "," "]]                                            [" "," "," "," "," "," "," "]]
//adding child nodes                                                        adding child nodes
//stack -> L: [null]                                                        stack -> L: [null]
//         R: [ [4], 2, 2, 2]                                                        R: [null]

//stack = [ [4], 2, 2, 2] 
//[curr, left, right, depth] = [ [4], 2, 2, 2] 
//mid = 2 + (2 - 2) / 2 = 2 -> tree[2][2] = 4.toString() = 4
//tree = [[" "," "," ","1"," "," "," "], 
//        [" ","2"," "," "," "," "," "],
//        [" "," ","4"," "," "," "," "]]  
//adding child nodes   
//stack -> L: [null]    
//         R: [null]  

//tree = [[" "," "," ","1"," "," "," "], 
//        [" ","2"," "," "," "," "," "],
//        [" "," ","4"," "," "," "," "]] 
