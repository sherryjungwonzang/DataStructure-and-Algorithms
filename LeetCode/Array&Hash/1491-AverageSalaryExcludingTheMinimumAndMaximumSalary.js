//1491. Average Salary Excluding The Minimum And Maximum Salary
//given an array of unique integers 'salary' where salary[i] is the salary of the ith employee
//return the average salary of employees excluding the min and max salary

//Approach:
//using sorting(not in this solution)
var avgSalary = (salary) => {
    let sum = salary.reduce((a, b) => a + b);
    let max = Math.max(...salary); //max value
    let min = Math.min(...salary); //min value

    //excluding max and min
    sum -= max;
    sum -= min;

    return sum / (salary.length - 2);
}
avgSalary([4000,3000,1000,2000]); //2500.00000
//sum = 4000 + 3000 + 1000 + 2000 = 100000
//max = 4000
//min = 1000

//sum = 100000 -> 6000 -> 5000
//5000 / 2 = 2500.00000

avgSalary([1000,2000,3000]); //2000.00000
//sum = 3000 + 1000 + 2000 = 6000
//max = 3000
//min = 1000

//sum = 6000 -> 3000 -> 2000
//2000 / 1 = 2000.00000
