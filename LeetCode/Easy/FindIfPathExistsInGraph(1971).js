//1971. Find if Path exists in graph
//there is a bidirectional graph with 'n' vertices - where each vertex is labeled from 0 to n-1(inclusive)
//the edges in the graph are represented as a 2D integer arry 'edges' - where eadh edges[i] = [u_i, v_i] denotes a bi-directional edge between u_i and v_i
//every vertex pair is connected by at most one edge, and no vertex has an edge to itself

//want to determine if there is a valid path that exists from vertex 'source' to vertex 'destination'

//given 'edges' and the integers 'n' 'source' and 'destination'
//return true if there is a valid path from source to destination 
//otherwise false
var validPath = (n, edges, source, destination) => {
  //creating a Map for adjacencyList
  let graph = new Map();
  //initializing Set() - to store every vertex we visit
  let visited = new Set();

  //creating a adjacencyList and adding
  for (let [v, e] of edges) {
    //setting for 'v'
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]); //[e] - containing array and to populate the map data structure
    }

    //setting for 'e'
    if (graph.has(e)) {
      graph.get(e).push(v);
    } else {
      graph.set(e, [v]);
    }
  }


  //DFS function
  function dfs(vertex) {
    //set the vertex to visited
    visited.add(vertex);

    //need to get a neighbor of the vertex
    let neighbors = graph.get(vertex);

    //checking neighbors are available
    if (neighbors && neighbors.length > 0) {
      for (let i = 0; i < neighbors.length; i++) {
        if (!visited.has(neighbors[i])) {
          //recursive call - on neighbors
          dfs(neighbors[i]); //populate the visited set 
        }
      }
    }
  }
  dfs(source); //we want to check whether we get from source to destination

  return visited.has(destination);
}
validPath(3, [[0,1],[1,2],[2,0]], 0, 2); //true - there are two paths from vertex 0 to vertex2: 0-1-2 and 0-2
// 0 -- 1
//  \  /
//   2

//graph = { 0: [1,2] | 1: []1,2} | 2: [0,1] }
//source is 0 and destination is 2

//DFS - starting from 0
//visited = ( 0 )
//checking 0's neighbors - 1 and 2
//add 1 to visited
//visited = ( 0 1 )
//checking 1's neighbors - 0 and 2
//0 is already in visited & add 2 in visited

//when set contains the value of destination(2) -> return true

validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5); //false - there is no path from vertex 0 to vertex5
//    1       3 
//   /        | \
// 0          |  5
//   \        | /
//    2       4

//graph = { 0: [1,2] | 1: [0] | 2: [0] | 3: [4,5] | 4: [3,5] | 5: [3,4] }
//source is 0 and destination is 5

//DFS - starting from 0
//visited = ( 0 )
//checking 0's neighbors - 1 and 2
//add 1 to visited
//visited = ( 0 1 )
//checking 1's neighbors - 0
//0 is already in visited

//checking 2's neighbors - 0
//0 is already in visited
//visited = ( 0 1 2 )
//end
