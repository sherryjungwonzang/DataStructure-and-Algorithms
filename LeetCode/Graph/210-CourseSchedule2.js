//210. Course Schedule 2
//there are a total of 'numCourse' courses you have to take - labeled from 0 to numCourses - 1
//givenan array prerequisited - where prerequisites[i] = [a_i, b_i] indicates that you must take course b_i first if you want to take course a_i
//for example, the pair [0,1] - indicates that to take course 0 you have to first take course 1
//return the ordering of courses you should take to finish all courses
//if there are many valid answers, return any of them
//if it is impossilbe to finish all courses, return an empty array

//Approach:
//using DFS with recursive call
var courseSchedule2 = (numCourses, prerequisites) => {
    let visited = new Array(numCourses).fill(0);
    let adjList = {};
    let res = [];

    //populating adjList
    for (let [a, b] of prerequisites) {
        if (!adjList[a]) adjList[a] = [];
        adjList[a].push(b);
    }

    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === 0 && !dfs(i)) return [];
    }

    //DFS
    function dfs(curr) {
        //base setting
        visited[curr] = 1;

        if (adjList[curr]) {
            for (let neighbor of adjList[curr]) {
                if (visited[neighbor] === 1) return false; //meaning has cycle
                if (visited[neighbor] === 0 && !dfs(neighbor)) return false; //meaning has cycle  
            }
        }

        visited[curr] = '#'; //to avoid duplicates

        res.push(curr);

        return true; //meaning has no cycle
    };

    return res;
}
courseSchedule2(2, [[1,0]]); //[0,1] - There are a total of 2 courses to take
//To take course 1 you should have finished course 0

//adjList: {
//      1: 0
//}
//visited = [0, 0]

//i = 0 || dfs(0)
//visited = [1, 0]
//neighbor: N/A
//visited = [1, 0] -> [#, 0]
//res = [ 0 ] || True

//i = 1 || dfs(1)
//visited = [#, 1]
//neighbor: 0 & dfs(0) != null
//visited = [#, 1] -> [#, #]
//res = [ 0, 1 ] || True

courseSchedule2(4, [[1,0],[2,0],[3,1],[3,2]]); //[0,2,1,3]
//There are a total of 4 courses to take
//To take course 3 you should have finished both courses 1 and 2
//Both courses 1 and 2 should be taken after you finished course 0
//So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3]

//adjList: {
//      1: [0]
//      2: [0]
//      3: [1, 2]
//}
//visited = [0, 0, 0, 0]

//i = 0 || dfs(0)
//visited = [0, 0, 0, 0]
//neighbor: N/A
//visited = [0, 0, 0, 0] -> [#, 0, 0, 0]
//res = [ 0 ] || True

//i = 1 || dfs(1)
//visited = [#, 1, 0, 0]
//neighbor: 0 - already visited
//visited = [#, 1, 0, 0] -> [#, #, 0, 0]
//res = [ 0, 1 ] || True

//i = 2 || dfs(2)
//visited = [#, #, 1, 0]
//neighbor: 0 - already visited
//visited = [#, #, 1, 0] -> [#, #, #, 0]
//res = [ 0, 1, 2 ] || True

//i = 3 || dfs(3)
//visited = [#, #, #, 1]
//neighbor: 1, 2 - already visited
//visited = [#, #, #, 1] -> [#, #, #, #]
//res = [ 0, 1, 2, 3 ] || True
