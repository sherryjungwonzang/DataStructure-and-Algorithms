//47. Permutations II
//given a collection of numbers 'nums' - that might contain duplicates
//return all possible unique permutations in any order

//Approach:
//using DFS with backtracking
var permutations2 = (nums) => {
    let res = [];
    let visited = new Array(nums.length).fill(0);

    //sorting
    nums.sort((a, b) => a - b);

    //DFS
    function dfs(idx, nums, arr, res) {
        //base case
        if (idx === nums.length) {
            res.push([...arr]);

            return;
        }

        //recursive calls
        for (let i = 0; i < nums.length; i++) {
            if (visited[i] === 0) {
                arr.push(nums[i]);
                visited[i] = 1;

                //recursive call
                dfs(idx + 1, nums, arr, res);

                //backtracking
                arr.pop();

                visited[i] = 0;

                //avoid duplicates
                while (nums[i] === nums[i + 1]) i++;
            }
        }
    }

    dfs(0, nums, [], res);

    return res;
}
permutations2([1,1,2]); //[[1,1,2], [1,2,1], [2,1,1]]
