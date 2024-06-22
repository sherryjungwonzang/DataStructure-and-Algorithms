//690. Employee Importance
//you have a data structure of employee information, including the employee's unique ID, importance value and direct subordinates' IDs
//you are given an array of employees 'employees' where:
//employees[i].id: the id of the i_th employee
//employees[i].importance: the importance value of the i_th employee
//employees[i].subordinates: a list of the IDs of the direct subordinates of the i_th employee

//given an integer id that represents an employee's ID
//return the total importance value of this employee and all their direct and indirect subordinates

//Approach:
//using DFS
var employeeImportance = (employees, id) => {
    let map = new Map();
    let visited = new Set();

    for (let i = 0; i < employees.length; i++) {
        map.set(employees[i].id, employees[i]);
    }

    //DFS
    function dfs(i, visited) {
        //base case
        if (visited.has(i)) return 0;

        let info = map.get(i);
        let total = info.importance;
        visited.add(i);

        for (let neighbor of info.subordinates) {
            total += dfs(neighbor, visited);
        }

        return total;
    }

    return dfs(id, visited);
}
employeeImportance(employees = [[1,5,[2,3]],[2,3,[]],[3,3,[]]], id = 1); //11
//Employee 1 has an importance value of 5 and has two direct subordinates: employee 2 and employee 3.
//They both have an importance value of 3.
//Thus, the total importance value of employee 1 is 5 + 3 + 3 = 11

employeeImportance(employees = [[1,2,[5]],[5,-3,[]]], id = 5); //-3
//Employee 5 has an importance value of -3 and has no direct subordinates.
//Thus, the total importance value of employee 5 is -3
