//449. Serialize and deserialize BST
//serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer
//or transmitted across a network connection link to be reconstructed later in the same or another computer environment

//design an algorithm to serialize and deserialize a BST
//there is no restriction on how your serialization/deserialization algorithm should work
//you need to ensure that a binary search tree can be serialized to a string, and this string can de deserialized to the original tree structure

//Serialization
var serializeBST = (root) => {
    let res = [];

    function dfs(node) {
        if (!node) return;

        //preorder: root - left - right
        res.push(node.val); //get root value
        dfs(node.left); //get all left values
        dfs(node.right); //get all right values
    }

    dfs(root);
    return res.join('.'); //turn into string
}


//Deserialization
var deserializeBST = (data) => {
    //base case
    if (data === "") return null;

    let preorder = data.split('.').map(Number); //get numbers array from a string

    function traverse(lower = -Infinity, upper = Infinity) { //setting as placeholder checking
        //base case
        if (preorder[0] < lower || preorder[0] > upper) return null;
        if (preorder.length === 0) return null;

        //creating a root node
        let root = new TreeNode(preorder.shift());
        root.left = traverse(lower, root.val); //left side
        root.right = traverse(root.val, upper); //right side

        return root;
    }

    return traverse();
}
serializeBST([2, 1, 3]); //[2,1,3]
//    2
//  1   3 

serializeBST([]); //[]
