//1376. Time Needed To Inform All Employees
//a company has n employees with a unique ID for each employee from 0 to n - 1
//the head of the company is the one with headID
//each employee has one direct manger given in the manager array where manager[i] is the direct manager of the i_th employee, manager[headID] = -1
//also it is guaranteed that the subordination relationships have a tree structure

//the head of the company wants to inform all the company employees of an urgent piece of news
//he will inform his direct subordinates, and they will inform their subordinates and so on until all employees know about ths urgetn news

//the i_th employee needs informTime[i] minutes to inform all of his direct subordinates
//return the num of minutes needed to inform all the employees about the urgent news

//Approach:
//using tree and BFS with queue
var timeInformEmployees = (n, headID, manager, informTime) => {
    let tree = {}; //building the tree

    //{manager: direct employee}
    for (let i = 0; i < manager.length; i++) {
        if (i === headID) continue; //no manager

        let m = manager[i]
        if (!tree[m]) tree[m] = [];
        tree[m].push(i);
    }

    let queue = [[headID, 0]];
    let res = 0;

    //BFS
    while (queue.length) {
        let [emp, currTime] = queue.shift();
        let children = tree[emp] || [];

        for (let child of children) {
            res = Math.max(res, informTime[emp] + currTime);
            //adding children
            queue.push([child, informTime[emp] + currTime]);
        }
    }

    return res;
} 
//TC: O(n)
timeInformEmployees(6, 2, [2,2,-1,2,2,2], [0,0,1,0,0,0]); //1 - the head of the company with id = 2 is direct manager of all the 
//employees in the company and needs 1 minute to inform them all
//          2
//   0  1  3  4  5  

//Tree: { 2: [0, 1, 3, 4, 5] }

//Tree: { 2: [0, 1, 3, 4, 5] }
//        ^
//informTIme: [0, 0, 1, 0, 0, 0]
//                   ^
//queue = [ [2, 0] ]
//[emp, time] = [2, 0]
//res = 0 -> (0, 1+0) 1
//queue = [ [0, 1] ]

//Tree: { 2: [0, 1, 3, 4, 5] }
//            ^
//informTIme: [0, 0, 1, 0, 0, 0]
//             ^
//queue = [ [0, 1] ]
//[emp, time] = [2, 0] [0, 1]
//res = 0 -> (0, 1+0) 1 -> (1, 0+1) 1
//queue = [ [1, 1] ]

//Tree: { 2: [0, 1, 3, 4, 5] }
//               ^
//informTIme: [0, 0, 1, 0, 0, 0]
//                ^
//queue = [ [1, 1] ]
//[emp, time] = [2, 0] [0, 1] [1, 1]
//res = 0 -> (0, 1+0) 1 -> (1, 0+1) 1 -> (1, 0+1) 1
//queue = [ [3, 1] ]

//Tree: { 2: [0, 1, 3, 4, 5] }
//                  ^
//informTIme: [0, 0, 1, 0, 0, 0]
//                      ^
//queue = [ [3, 1] ]
//[emp, time] = [2, 0] [0, 1] [1, 1] [3, 1]
//res = 0 -> (0, 1+0) 1 -> (1, 0+1) 1 -> (1, 0+1) 1 -> (1, 0+1) 1 
//queue = [ [4, 1] ]

//Tree: { 2: [0, 1, 3, 4, 5] }
//                     ^
//informTIme: [0, 0, 1, 0, 0, 0]
//                         ^
//queue = [ [4, 1] ]
//[emp, time] = [2, 0] [0, 1] [1, 1] [3, 1] [4, 1]
//res = 0 -> (0, 1+0) 1 -> (1, 0+1) 1 -> (1, 0+1) 1 -> (1, 0+1) 1 -> (1, 0+1) 1 
//queue = [ [5, 1] ]

//Tree: { 2: [0, 1, 3, 4, 5] }
//                        ^
//informTIme: [0, 0, 1, 0, 0, 0]
//                            ^
//queue = [ [5, 1] ]
//[emp, time] = [2, 0] [0, 1] [1, 1] [3, 1] [4, 1] [5,1]
//res = 0 -> (0, 1+0) 1 -> (1, 0+1) 1 -> (1, 0+1) 1 -> (1, 0+1) 1 -> (1, 0+1) 1 -> (1, 0+1) 1
//queue = [ ]

//1

timeInformEmployees(1, 0, [-1], [0]); //0 - the head of the company is the only employee in the company
