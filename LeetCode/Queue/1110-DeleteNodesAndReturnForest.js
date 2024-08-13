//1110. Delete Nodes And Return Forest
//given the 'root' of a binary tree, each node in the tree has a distinct value
//after deleting all nodes with a value in to_delete, we are left with a forest - a disjoint union of trees
//return the roots of the trees in the remaining forest

//Approach:
//using BFS with queue
var deleteNodes = (root, to_delete) => {
    //base case
    if (!root) return [];

    let deleteSet = new Set(to_delete);
    let res = [];
    let queue = [root];

    //BFS
    while (queue.length) {
        let curr = queue.shift();

        //left
        if (curr.left) {
            queue.push(curr.left);

            //to disconnect
            if (deleteSet.has(curr.left.val)) curr.left = null;
        } 

        //right
        if (curr.right) {
            queue.push(curr.right);
        
            //to disconnect
            if (deleteSet.has(curr.right.val)) curr.right = null;
        } 

        //adding to res
        if (deleteSet.has(curr.val)) {
            if (curr.left) res.push(curr.left);
            if (curr.right) res.push(curr.right);
        } else if (res.length === 0) {
            res.push(curr);
        }
    }

    return res;
}
//TC: O(n)
//SC: O(n)
deleteNodes(root = [1,2,3,4,5,6,7], to_delete = [3,5]); //[[1,2,null,4],[6],[7]]

deleteNodes(root = [1,2,4,null,3], to_delete = [3]); //[[1,2,4]]
