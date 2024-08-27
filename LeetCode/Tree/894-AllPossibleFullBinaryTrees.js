//894. All possible full binary trees
//given an integer n, return a list of all possible full binary tree iwth n nodes
//each node of each tree in the answer must have Node.val == 0

//each element of the answer is the root node of one possible tree
//you may return the final list of trees in any order
//a full binary tree is a binary tree where each node has exactly 0 or 2 children

//Approach:
//using recursion
var possibleFullBinaryTree = (n) => {
    //base case
    if (n % 2 === 0) return []; //not a full binary tree

    let memo = {}; //to store results

    function recurse(n) {
        //base case
        if (n === 1) return [new TreeNode(0)];
        if (memo[n]) return memo[n];

        let tree = []; //to store all possible full binary trees
        for (let left = 1; left < n; left += 2) {
            let leftSubtree = recurse(left);
            let rightSubtree = recurse(n - left - 1); //the num of right subtree: n - left - 1

            //combination of left and right subtrees
            for (let l of leftSubtree) {
                for (let r of rightSubtree) {
                    //build a tree
                    let root = new TreeNode(0, l, r);
                    
                    tree.push(root);
                }
            }
        }

        memo[n] = tree;

        return tree;
    }

    return recurse(n);
}
possibleFullBinaryTree(3); //[[0,0,0]]
//memo = {}
//trees = []

//recurse(3)
//left: 1 -> recurse(1) = [0]
//right -> recurse(3 - 1 - 1) = recurse(1) = [0]
//l: [0], r: [0]
//root = new TreeNode(0, [0], [0]) = [0, 0, 0]
//trees = [ [0, 0, 0] ]
//memo = { 3: [0, 0, 0] }

possibleFullBinaryTree(5); //[[0,0,0,null,null,0,0],[0,0,0,0,0]]
//memo = {}
//trees = []

//recurse(5)
//left: 1 -> recurse(1) = [0]                             -> l: [0]
//right -> recurse(5 - 1 - 1) = recurse(3) = [0,0,0]         r: [0,0,0]
//                                                           root: new TreeNode(0, [0], [0,0,0]) = [0,0,0,null,null,0,0]
//                                                           -> tree = [ [0,0,0,null,null,0,0] ]
//-> recurse(3) for 5's right
//left: 1 -> recurse(1) = [0]                             -> l: [0]
//right -> recurse(3 - 1 - 1) = recurse(1) = [0]             r: [0]
//l: [0], r: [0]                                             root: new TreeNode(0, [0], [0]) = [0, 0, 0]
//                                                           -> trees = [ [0, 0, 0] ]
//memo = { 3: [0, 0, 0] }

//continue with 5
//left: 3 -> recurse(3) = [0,0,0]                         -> l: [0,0,0]
//right: recurse(5 - 3 - 1) = recurse(1) = [0]               r: [0] 
//                                                           root: new TreeNode(0, [0,0,0], [0]) = [0,0,0,0,0]
//                                                           -> tree = [ [0,0,0,null,null,0,0], [0,0,0,0,0] ]
//memo = { 3: [0, 0, 0], 5: [ [0,0,0,null,null,0,0], [0,0,0,0,0] ] }

possibleFullBinaryTree(7); //[[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
