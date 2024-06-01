//863. All nodes distance K in binary tree
//given the 'root' of a binary tree, the value of target node 'target' and an integer 'k'
//return an array of the valus of all nodes that have a distance k from the target node

//Approach:
//using BFS qith queue
//convert the binary tree to undirected graph and do BFS starting from the target node
var allNodesDistanceK = (root, target, k) => {
    let adjList = {};
    let visited = new Set();
    let queue = [ [target.val, 0] ];
    let res = [];

    //creating undirected graph
    function createGraph(node, parent) {
        //base case
        if (!node) return;

        let neighbor = [];

        //left
        if (node.left) {
            neighbor.push(node.left.val);
            createGraph(node.left, node.val);
        }

        //right
        if (node.right) {
            neighbor.push(node.right.val);
            createGraph(node.right, node.val);
        }

        if (parent !== null) neighbor.push(parent);

        adjList[node.val] = neighbor;
    };

    //converting binary tree to undirected graph
    createGraph(root, null);

    //BFS
    while (queue.length) {
        let [node, distance] = queue.shift();

        if (visited.has(node)) continue;
        if (distance === k) res.push(node);
        if (distance > k) return res;

        for (let adj of adjList[node]) {
            queue.push([adj, distance + 1]);
        }

        visited.add(node);
    }

    return res;
}
allNodesDistanceK(root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2); //[7,4,1]
//         3
//     5       1
//   6   2    0   8
//     7   4

allNodesDistanceK(root = [1], target = 1, k = 3); //[]
