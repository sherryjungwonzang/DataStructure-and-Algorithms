//993. Cousins In Binary Tree
//given the root of a binary tree with unieuq values and the values of two different nodes of the tree x and y
//return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise
//two nodes of a binary tree are cousins if they have the same depth with different parents
//note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1

//Approach:
//using BFS with queue
var cousinsBinaryTree = (root, x, y) => {
    //base case
    if (!root) return false;

    let queue = [root];

    //BFS
    while (queue.length) {
        let levelSize = queue.length;
        let level = [];

        while (levelSize) {
            let curr = queue.shift();

            //not under same parent
            if (curr.left && curr.right) {
                if ((curr.left.val === x && curr.right.val === y) || (curr.left.val === y && curr.right.val === x)) return false;
            }

            //child
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);

            level.push(curr.val);

            levelSize--;
        }

        //checking same level or not
        if (level.includes(x) && level.includes(y)) return true;
    }

    return false;
}
cousinsBinaryTree([1,2,3,4], 4, 3); //false
//     1
//   2   3
// 4 

//queue = [ [1,2,3,4] ]
//curr = [1,2,3,4]
//1's left & right != x & y
//level = [ 1 ]
//levelSize = 1 -> 0 ||
//queue = [ [2,4], [3] ]

//queue = [ [2,4], [3] ]
//curr = [1,2,3,4], [2,4]
//2 only has right
//level = [ 1 | 2, ]
//levelSize = 1 -> 0 || 2 -> 1
//queue = [ [3] || [4] ]

//queue = [ [3] || [4] ]
//curr = [1,2,3,4], [2,4], [3]
//3 has no child
//level = [ 1 | 2, 3 ]
//levelSize = 1 -> 0 || 2 -> 1 -> 0

//queue = [ [4] ]
//curr = [1,2,3,4], [2,4], [3], [4]
//4 has no child
//level = [ 1 | 2, 3 | 4 ]
//levelSize = 1 -> 0 || 2 -> 1 -> 0 || 1 -> 0
//3 and 4 are in the different level -> false

cousinsBinaryTree(root = [1,2,3,null,4,null,5], x = 5, y = 4); //true
//     1
//   2     3
//     4     5

//queue = [ [1,2,3,null,4,null,5] ]
//curr = [1,2,3,null,4,null,5]
//1's left & right != x & y
//level = [ 1 ]
//levelSize = 1 -> 0 ||
//queue = [ [2,null,4], [3,null,5] ]

//queue = [ [2,null,4], [3,null,5] ]
//curr = [1,2,3,null,4,null,5], [2,null,4]
//2 only has right
//level = [ 1 || 2 
//levelSize = 1 -> 0 ||2 -> 1
//queue = [ [3,null,5] || [4] ]

//queue = [ [3,null,5] || [4] ]
//curr = [1,2,3,null,4,null,5], [2,null,4], [3,null,5] 
//3 only has right
//level = [ 1 || 2, 3
//levelSize = 1 -> 0 ||2 -> 1 -> 0
//queue = [ [4], [5] ]

//queue = [ [4], [5] ]
//curr = [1,2,3,null,4,null,5], [2,null,4], [3,null,5], [4]
//4 has no child
//level = [ 1 || 2, 3 || 4, 
//levelSize = 1 -> 0 ||2 -> 1 -> 0 || 2 -> 1

//queue = [ [5] ]
//curr = [1,2,3,null,4,null,5], [2,null,4], [3,null,5], [4], [5]
//5 has no child
//level = [ 1 || 2, 3 || 4, 5
//levelSize = 1 -> 0 ||2 -> 1 -> 0 || 2 -> 1 -> 0
//4 and 5 are in the same level -> true

cousinsBinaryTree(root = [1,2,3,null,4], x = 2, y = 3); //false
//     1
//   2     3
//     4
