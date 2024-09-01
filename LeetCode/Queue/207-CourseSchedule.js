//207. Course Schedule
//total of numCourses - have to take
//labeled from 0 to numCourses - 1
//given an array 'prerequisites' - where prerequisites[i] = [ai, bi] indicating that you must take course bi first if you want to take course ai
//ex: [0,1] - to take course 0 - have to first take course 1
//return true if you can finish all courses - otherwise return false

//Approach:
//using BFS with queue
var courseSchedule = (numCourses, prerequisites) => {
    let preqNum = new Array(numCourses).fill(0); //the num of prerequisites each course has
    let adjList = {};
    let visited = new Set();
    let queue = [];

    for (let [course, prereq] of prerequisites) {
        if (!adjList[prereq]) adjList[prereq] = [];

        adjList[prereq].push(course);

        preqNum[course]++;
    }

    //find the course has no prerequisites
    for (let i = 0; i < numCourses; i++) {
        if (preqNum[i] === 0) queue.push(i);
    }

    //BFS
    while (queue.length) {
        let curr = queue.shift();

        visited.add(curr);

        if (adjList[curr]) {
            for (let neighbor of adjList[curr]) {
                preqNum[neighbor]--;

                if (preqNum[neighbor] === 0) queue.push(neighbor); //no prerequisites course 
            }
        }
    }

    return visited.size === numCourses;
}
//TC: O(v + e)
//SC: O(v + e)
courseSchedule(3, [[0,1], [0,2], [1,2]]); //true
//[[0,1], [0,2], [1,2]]
//   ^
//preqNum = [0, 0, 0] -> [1, 0, 0]  
//adjList = { 1: [0], }

//[[0,1], [0,2], [1,2]]
//          ^
//preqNum = [1, 0, 0] -> [2, 0, 0]  
//adjList = { 1: [0], 2: [0, ] }

//[[0,1], [0,2], [1,2]]
//          ^
//preqNum = [2, 0, 0]  -> [2, 1, 0]  
//adjList = { 1: [0], 2: [0, 1] }


//preqNum = [2, 1, 0]  
//adjList = { 1: [0], 2: [0, 1] }
//queue = [2 ]
//curr = 2
//visited = { 2 }
//neighbor = 0 -> preqNum[0]--
//preqNum = [1, 1, 0]  
//           1 -> preqNum[1]--
//preqNum = [1, 0, 0]
//queue = [ 1 ]  

//queue = [ 1 ]  
//curr = 2 1
//visited = { 2 1 }
//neighbor = 0 -> preqNum[0]--
//preqNum = [0, 0, 0]
//queue = [ 0 ]

//queue = [ 0 ]
//curr = 2 1 0
//visited = { 2 1 0 } = numCourses -> True
//meaning there is a cycle and can finish all courses

courseSchedule(2, [[1,0], [0,1]]); //false
//[[1,0], [0,1]]
//   ^
//preqNum = [0, 0] -> [0, 1]  
//adjList = { 0: [1], }

//[[1,0], [0,1]]
//           ^
//preqNum = [0, 1] -> [1, 1]  
//adjList = { 0: [1], 1: [0] }
//there ius no nn required prerequisities course -> False
