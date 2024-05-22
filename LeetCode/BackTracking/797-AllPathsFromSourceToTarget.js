//797. All paths from source to target
//given a directed acyclis graph (DAG) of 'n' nodes labeled from 0 to n - 1
//find all possible paths from node 0 to node n - 1 and return them in any order

//the graph is given as follows:
//graph[i] is a list of all nodes you can visit from node i - if there is a directed edge from node i to node graph[i][j]
var allPathsSourceTarget = (graph) => {
  let res = [];

  //backtracking function
  function backtrack(currNode, currArr) {
      //add currnode immediately
      currArr.push(currNode);

      //check 0 to n-1
      if (currNode === graph.length - 1) {
          res.push([...currArr]);
      }

      //setting neighbors - graph was neighbor list
      let neighbors = graph[currNode];

      //loop through neighbors
      for (let n of neighbors) {
          backtrack(n, currArr);
      }
      //backtracking
      currArr.pop();
  }
  backtrack(0, []);

  return res;
}
allPathsSourceTarget([[1,2], [3], [3], []]); //[[0,1,3], [0,2,3]]
//there are two paths: 9 -> 1 -> 3 and 0 -> 2 -> 3

allPathsSourceTarget()
