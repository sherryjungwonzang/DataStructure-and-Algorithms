//399. Evaluate Division
//given an array of variable paris 'equations' and an array of real numbers 'values'
//where equations[i] = [A_i, B_i] represent the equation A-I / B_i = values[i]
//each A_i or B_i is a string that represents a single variable

//also given some queries - where queries[j] = [C_j, D_j] represents the j_th query where you must find the answer for C_j / D_j = ?
//return the answers to all queries - if a single answer cannot be determined, return -1.0

//Approach:
//using DFS
var evaluateDivision = (equations, values, queries) => {
    //building the graph - to store variable pairs and their neighbors
    let graph = {};

    for (let i = 0; i < equations.length; i++) {
        let [val1, val2] = equations[i];
        let currVal = values[i];

        if (!graph[val1]) graph[val1] = {};
        if (!graph[val2]) graph[val2] = {};

        graph[val1][val2] = currVal;
        graph[val2][val1] = 1 / currVal;
    }

    //evaluate queries using DFS - evaluate each query by traversing the graph and calculating the result
    function dfs(val1, val2, visited) {
        //base case
        if (!(val1 in graph) || !(val2 in graph)) return -1.0;
        if (val1 === val2) return 1.0;

        visited.add(val1);

        let neighbors = graph[val1];
        for (let neigh in neighbors) {
            if (!visited.has(neigh)) {
                let res = dfs(neigh, val2, visited);

                if (res !== -1.0) return neighbors[neigh] * res;
            }
        }
        return -1.0;
    };

    //process queries
    let result = [];
    
    for (let query of queries) {
        let [val1, val2] = query;
        let visited = new Set();
        let res = dfs(val1, val2, visited);
        
        result.push(res);
    }

    return result;
}
evaluateDivision(equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]); 
//[6.00000,0.50000,-1.00000,1.00000,-1.00000]

evaluateDivision(equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]);
//[3.75000,0.40000,5.00000,0.20000]

evaluateDivision( equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]);
//[0.50000,2.00000,-1.00000,-1.00000]






