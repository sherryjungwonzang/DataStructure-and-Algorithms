//77. Combinations
//given two integers 'n' and 'k' 
//return all possible combinations of 'k' numbers chosen from the range [1, n]
//may return the answer in any order

//Approach:
//using DFS with backtracking
var combinations = (n, k) => {
    let res = []; 

    //DFS
    function dfs(index, curr) {
        //base case
        if (curr.length === k) res.push([...curr]);

        //traversing
        for (let i = index; i <= n; i++) {
            curr.push(i);

            //recursive calls
            dfs(i + 1, curr);

            //backtracking
            curr.pop();
        }
    }

    dfs(1, []); //starting from 1

    return res;
}
combinations(4,2); //[[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]] - there are 4 choose 2 = 6 total combinations
  
combinations(1,1); //[[1]] - there is 1 choose 1 = 1 total combination
