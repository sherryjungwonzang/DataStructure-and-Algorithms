//872. Leaf-Similar Trees
//consider all the leaves of a bunary tree - from left to right
//the values of those leaves form a leaf value sequence

//two binary trees are considered leaf-similar if their leaf value sequence is the same
//return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar

//Approach:
//using recursive call on children and JSON.stringify()
//JSON.stringify(): converts a JavaScript value to JSON string
var leafSimilarTrees = (root1, root2) => {
    //to collect the leaf values of two trees
    let leafCollect1 = [];
    let leafCollect2 = [];

    //function - list the leaf values
    function leafCollecting(root, leaf) {
        //base case
        if (!root) return;

        //leaf value
        if (!root.left && !root.right) leaf.push(root.val);

        //recursive call on child
        leafCollecting(root.left, leaf); //left
        leafCollecting(root.right, leaf); //right
    };

    leafCollecting(root1, leafCollect1);
    leafCollecting(root2, leafCollect2);

    return JSON.stringify(leafCollect1) === JSON.stringify(leafCollect2);
}
leafSimilarTrees(root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]); //true
//        3                   3
//    5       1           5       1
//  6   2   9   8       6   7   4   2
//    7   4                       9   8 

leafSimilarTrees(root1 = [1,2,3], root2 = [1,3,2]); //false
//        1                   1
//    2       3           3      2
