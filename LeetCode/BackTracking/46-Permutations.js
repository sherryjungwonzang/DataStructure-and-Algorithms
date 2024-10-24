//46. Permutations
//given an array 'nums' of distinct integers
//return all the possible permutations
//can return the answer in any order

//Approach:
//using backtracking
var permutations = (nums, curr = [], res = []) => {
    //base case
    if (nums.length === 0) res.push([...curr]);

    //looping
    for(let i = 0; i < nums.length; i++) {
        let remainders = nums.filter((n, index) => index !== i);

        curr.push(nums[i]);

        //recursive call
        permutations(remainders, curr, res);

        //backtracking
        curr.pop();
    }

    return res;
}
permutations([1,2,3]); //[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//arr = []
//res = []
//nums = [1, 2, 3]
//        i
//rest = [2, 3]
//arr = [1]

//recursive call - permutations([2,3], [1], [])
//nums = [2, 3]
//        i
//rest = [3]
//arr = [1, 2]

//recursive call - permutations([3], [1, 2], [])
//nums = [3]
//        i
//rest = []
//arr = [1, 2, 3]

//nums = [] -> adding [1,2,3] into res
//res = [ [1,2,3], ]
//....

permutations([0,1]); //[[0,1],[1,0]]
//arr = []
//res = []
//nums = [0, 1]
//        i
//rest = [1]
//arr = [0]

//recursive call - permutations([1], [0], [])
//nums = [1]
//        i
//rest = []
//arr = [0, 1]
//...
