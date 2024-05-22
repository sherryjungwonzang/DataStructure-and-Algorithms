//207. Course Schedule
//total of numCourses - have to take
//labeled from 0 to numCourses - 1
//given an array 'prerequisites' - where prerequisites[i] = [ai, bi] indicating that you must take course bi first if you want to take course ai
//ex: [0,1] - to take course 0 - have to first take course 1
//return true if you can finish all courses - otherwise return false

//Approach:
//setting adjacencyList - to store neighbors
//Set() - for visiting
//using DFS recursive call - loop through the keys with adjacency list and run DFS for those keys
var courseSchedule = (numsCourses, prerequisites) => {
    //to store neighbors
    let adjList = {};
    //create a set
    let visited = new Set();

    //populating the adjList = mapping b to a
    for (let [a, b] of prerequisites) {
        if (!adjList[a]) { //create being an array containing b
            adjList[a] = [b];
        } else { //need to push in at position within the adjList
            adjList[a].push(b);
        }
    }

    //loop through keys with adjList
    //DFS - for checking cycles
    function dfs(curr) {
        if (visited.has(curr)) return false; //meaning it has a cycle
        if (adjList[curr] === []) return true; //meaning is has no cycle

        visited.add(curr);

        //checking its neighbors
        if (adjList[curr]) {
            //loop through the neighbor
            for (let neighbor of adjList[curr]) {
                if (!dfs(neighbor)) return false;
            }
        }
        
        visited.delete(curr);

        //empty adjList[curr] since all visited
        adjList[curr] = [];

        return true;
    }

    //dfs for keys
    for (let key in adjList) {
        if (!dfs(key)) {
            return false;
        }
        return true;
    }
}
courseSchedule(3, [[0,1], [0,2], [1,2]]); //true
//adjacencyList: 0: [1,2], 1: [2], 2: [] -> key: 0 1 2

//starting from 0
//dfs(0)
//visited = { 0 }
//0's neighbor: 1 and 2
//dfs() to each neighbors: dfs(1) and dfs(2)
//dfs(1) -> visited.add(1) -> dfs(2) -> visited.add(2) 
//visited = { 0 1 2 }

//2 has no adjacenyList anymore = no cycle
//delete 2 from visited & set empty array & return true & go back to 1
//adjacencyList: 0: [1,2], 1: [2], 2: []
//visited = { 0 1 }
//delete 1 from visited  & set empty array & return true & go back to 0
//adjacencyList: 0: [1,2], 1: [], 2: []
//visited = { 0 }

//0 has one more adjacencyList = 2 -> dfs(2)
//visited.add(2)
//visited = { 0 2 }
//2 has no cycle & delete 2 from visited  & set empty array & return true & go back to 0
//adjacencyList: 0: [], 1: [], 2: []
//delete 0 from visited
//visited = { } - return true

courseSchedule(2, [[1,0]]); //true - total 2 courses to take: to take course 1 - should take course 0
//adjacencyList: 1: [0]
//visited: Set{ 1, 0 } || stopped at 0 because 0 has no neighbor
//delete 1 in visited and going back to 1 | return true
//visited: Set{ 1, } 
//we checked 1's neighbor is 0 which is we have already seen it, so remove 1 from visited | return true
//visited: Set{ } | adjacencyList: 1: [] 
//finally return true

courseSchedule(2, [[1,0], [0,1]]); //false - total 2 courses to take: to take course 1 - should finish course 0 | to take course 0 - should take course 1
//adjacencyList: 1: [0], 0: [1]
//visited: { 1, 0, 1 } .. it has a cycle so when we visited its neighbor keep adding its in visited Set
//return false
