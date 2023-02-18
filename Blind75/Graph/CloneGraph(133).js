//Clone Graph (133)
//given a reference of a node in a connected undirected graph
//return a deep copy of the graph

//Approach: traverse and keep adding node to the visited map
//using DFS
function Node (val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

//recursive approach
function cloneGraph(node) {
  let visited = {}; //mapping between the node and its copy
  
  function dfs(node) {
    //base cases
    if (!node) return node; //if node === null
    if (visited[node.val] !== null) return visited[node.val]; //!!visited[node.val]

    let copy = new Node(node).val;
    visited[node.val] = copy;

    //recurrence relation
    for (let neighbor of node.neighbors) {
      //from starting - it should be an empty array
      //create a connection between each node
      copy.neighbors.push(dfs(neighbor)); //pushing into neighbors of our copy of this recursive
    }
    return copy;
  }
  return dfs(node);
}
//Time complexity: O(n+e)
//Space complexity: O(v) - v is the value of visited


cloneGraph([[2,4], [1,3], [2,4], [1,3]]); //[[2,4], [1,3], [2,4], [1,3]]
// 1 --- 2
// |     |
// 4 --- 3
//1 - copy: 1*, neighbor: 2*, 4*
//2 - copy: 2*, neighbor: 3*, 1*
//3 - copy: 3*, neighbor: 2*, 4*
//4 - copy: 4*, neighbor: 1*, 3*

//there are 4 nodes in the graph
//1st node: (val==1)'s neighbors are 2nd node (val==2) and 4th node (val==4)
//2nd node: (val==2)'s neighbors are 1st node (val==1) and 3rd node (val==3)
//3rd node: (val==3)'s neighbors are 2nd node (val==2) and 4th node (val==4)
//4th node: (val==4)'s neighbors are 1st node (val==1) and 3rd node (val==3)

cloneGraph([[]]); //[[]]
cloneGraph([]); //[] 

