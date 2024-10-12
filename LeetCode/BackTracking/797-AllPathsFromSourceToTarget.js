//797. All paths from source to target
//given a directed acyclis graph (DAG) of 'n' nodes labeled from 0 to n - 1
//find all possible paths from node 0 to node n - 1 and return them in any order

//the graph is given as follows:
//graph[i] is a list of all nodes you can visit from node i - if there is a directed edge from node i to node graph[i][j]

//Approach:
//using backtracking
var allPathsSourceTarget = (graph) => {
    let res = [];

    //backtracking
    function backtrack(currNode, currArr) {
        let neighbors = graph[currNode];

        currArr.push(currNode);

        if (currNode === graph.length - 1) res.push([...currArr]);

        //looping
        for (let neighbor of neighbors) backtrack(neighbor, currArr);

        //backtracking
        currArr.pop();
    }

    backtrack(0, []);

    return res;
}
allPathsSourceTarget([[1,2], [3], [3], []]); //[[0,1,3], [0,2,3]]
//there are two paths: 9 -> 1 -> 3 and 0 -> 2 -> 3

allPathsSourceTarget()
