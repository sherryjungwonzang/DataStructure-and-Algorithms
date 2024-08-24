//623. Add one row to tree
//given the root of a binary tree and two integers val and depth
//add a row of nodes with value val at the given depth 'depth'

//note that the root node is at depth 1
//the adding rule is:
//given the integer depth, for each not null tree node 'cur' at the depth depth - 1
//create two tree nodes with value 'val' as cur's left subtree root and right subtree root
//cur's original left subtree should be the left subtree of the new right subtree root
//cur's original right subtrr should be the right subtree of the new right subtre root
//if depth = 1 that means there is no depth depth - 1 at all
// then create a tree node with value val as the new root of the whole original tree, and the original tree is the new root's left subtree

//Approach:
//using BFS with queue and level order traversal
var addOneRow = (root, val, depth) => {
    //base case
    if (depth === 1) return new TreeNode(val, root); //just need to insert a new root

    let queue = [[root, 1]];

    //BFS
    while (queue.length) {
        let [node, nodeDepth] = queue.shift(); //curr
 
        //the depth to add val
        if (nodeDepth === depth - 1) {
            //adding a new node - left
            let newLeft = new TreeNode(val, node.left, null);
            node.left = newLeft;

            //adding a new node - right
            let newRight = new TreeNode(val, null, node.right);
            node.right = newRight;
        } else { //curr node is not at the depth
            if (node.left) queue.push([node.left, nodeDepth + 1]);
            if (node.right) queue.push([node.right, nodeDepth + 1]);
        }
    }

    return root;
}
addOneRow([4,2,6,3,1,5], 1, 2); //[4,1,1,2,null,null,6,3,1,5]
//       4               4
//    2     6   ->     1    1
//  3  1  5          2        6
//                 3   1    5

//queue = [ [[4,2,6,3,1,5], 1] ]
//curr = [[4,2,6,3,1,5], 1] 
//nodeDepth = 1  = depth - 1 = 1 -> need to add val
//newLeft = [1, 2, null, 3, 1]
//newRight = [1, null, 6, 5]

addOneRow([4,2,null,3,1], 1,3); //[4,2,null,1,1,3,null,null,1]
//       4               4
//    2       ->     2    
//  3  1           1   1
//               3       1    

//queue = [ [4,2,null,3,1], 1] ]
//curr = [4,2,null,3,1], 1]
//nodeDepth = 1 != depth - 1 = 2

//adding left and right to queue
//left = [2,3,1]
//right = null
//queue = [ [2,3,1], 2] ]

//queue = [ [2,3,1], 2] ]
//curr = [4,2,null,3,1], 1], [2,3,1], 2]
//nodeDepth = 2 != depth - 1 = 2 -> need to add val
//newLeft = [1, 3]
//newRight = [1, null, 1]
