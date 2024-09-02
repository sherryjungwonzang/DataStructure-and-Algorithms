//690. Employee Importance
//you have a data structure of employee information, including the employee's unique ID, importance value and direct subordinates' IDs
//you are given an array of employees 'employees' where:
//employees[i].id: the id of the i_th employee
//employees[i].importance: the importance value of the i_th employee
//employees[i].subordinates: a list of the IDs of the direct subordinates of the i_th employee

//given an integer id that represents an employee's ID
//return the total importance value of this employee and all their direct and indirect subordinates

//Approach:
//using BFS with queue
var employeeImportance = (employees, id) => {
    let res = 0;
    let employeeInfo = {};

    //collecting information based on ID
    employees.forEach(({ id, importance, subordinates }) => {
        employeeInfo[id] = { importance, subordinates };
    });

    let queue = [ id ];

    //BFS
    while (queue.length) {
        let curr = employeeInfo[queue.shift()];

        res += curr.importance;

        queue.push(...curr.subordinates);
    }

    return res;
}
employeeImportance(employees = [ [1, 5, [2, 3]], [2, 3,[ ]], [3, 3, [ ]] ], id = 1); //11
//The total importance value of employee 1 is 5 + 3 + 3 = 11

//employeeID = {
//    1: {5, [2, 3]}
//    2: {3, [ ]}
//    3: {3, [ ]}
//}

//queue = [ 1 ]
//curr = employeeInfo[1] = {5, [2, 3] }
//res = 0 -> 5
//queue = [ [2, 3] ]

//queue = [ [2, 3] ]
//curr = employeeInfo[1] = {5, [2, 3] } || employeeInfo[2] = {3, []}
//res = 0 -> 5 -> 8

//curr = employeeInfo[1] = {5, [2, 3] } || employeeInfo[2] = {3, []} || employeeInfo[3] = {3, []}
//res = 0 -> 5 -> 8 -> 11
//queue = [ ]

employeeImportance(employees = [ [1, 2, [5] ], [5, -3, [ ]] ], id = 5); //-3
//Employee 5 has an importance value of -3 and has no direct subordinates
//Thus, the total importance value of employee 5 is -3

//employeeID = {
//    1: {2, [5]}
//    5: {-3, [ ]}
//}

//queue = [ 5 ]
//curr = employeeInfo[5] = {-3, [ ] }
//res = 0 -> -3
//queue = [ ]

