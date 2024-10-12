//216. Combination Sum III
//find all valid combinations 'k' numbers that sum up to 'n' such that the following conditions are true:
//only numbers 1 through 9 are used
//each number is used at most once
//return a list of all possible valud combinations
//the list must not contain the same combination twice, and the combinations maybe returned in any order

//Approach:
//using DFS with backtracking
var combinationSum2 = (candidates, target) => {
    let res = [];

    //DFS
    function dfs(index, curr, total) {
        //we cannot find
        if (total < 0 || curr.length > k) return;

        //we can find
        if (total === 0 && curr.length === k) res.push([...curr]);

        //looping
        for (let i = index; i <= 9; i++) {
            curr.push(i);

            //recursiva call
            dfs(i + 1, curr, total - i);

            //backtracking
            curr.pop();
        }
    }

    dfs(1, [], n);

    return res;
}
combinationSum3(3, 7); //[[1,2,4]] - 1+2+4=7 : there are no other valid combinations

combinationSum3(3, 9); //[[1,2,6], [1,3,5], [2,3,4]]; //1+2+6=9, 1+3+5=9, 2+3+4=9 : there are no other valid combinations

combinationSum3(4, 1); //[] - there are no valid combinations : using 4 different numbers in the range [1,9]- the smallest sum we can get is 1+2+3+4=10 and since 10 > 1, there are no valid combination

