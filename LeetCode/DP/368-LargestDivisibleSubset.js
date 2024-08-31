//368. Largest Divisible Subset
//given a set of distinct positive integers nums
//return the largest subset answer such that every pair (answer[i], amswer[j]) of elements in this subset satisfies:
//answer[i] % answer[j] == 0 or
//answer[j] % answer[i] == 0 
//if there are multiple solutions, return any of them

//Approach:
//using DP
var largestDivisibleSubset = (nums) => {
    //sorting
    nums.sort((a, b) => a - b); //ascending order

    let n = nums.length;
    let maxSize = 1; //max subset length
    let maxIndex = 0;
    let res = [];
    let dp = new Array(n).fill(1); //the length of largest divisible subset

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) { //comparing with previous element
            if (nums[i] % nums[j] === 0) { //divisible 
                dp[i] = Math.max(dp[i], dp[j] + 1);

                //updating size of largest divisible subset
                if (dp[i] > maxSize) {
                    maxSize = dp[i];

                    maxIndex = i;
                }
            }
        }
    }

    let num = nums[maxIndex];

    //backtracking to reconstruct
    for (let i = maxIndex; i >= 0; i--) {
        //check whether each element divides the next element in subset
        if (num % nums[i] === 0 && dp[i] === maxSize) {
            res.push(nums[i]); 

            num = nums[i]; //updating

            maxSize--;
        }
    }

    return res;
}
//TC: O(n^2)
//SC: O(n)
largestDivisibleSubset([1, 2, 3]); //[2, 1] - [1, 3] also acceptable
//sorting: [1, 2, 3]
//maxSize = 1
//maxIndex = 0
//res = [ ]

//dp = [1, 1, 1]
//i = 1, j = 0
//nums[1] = 2 % nums[0] = 1 === 0 -> dp[1] = max(dp[1], dp[0] + 1) = (1, 1 + 1) = 2
//dp = [1, 2, 1]
//dp[1] > maxSize -> maxSize = 1 -> 2
//                   maxIndex = 0 -> 1

//dp = [1, 2, 1]
//i = 2, j = 0
//nums[2] = 3 % nums[0] = 1 === 0 -> dp[2] = max(dp[2], dp[0] + 1) = (1, 1 + 1) = 2
//dp = [1, 2, 2]
//dp[2] = maxSize -> continue

//i = 2, j = 1
//nums[2] = 3 % nums[1] = 2 != 0 

//maxSize = 2
//maxIndex = 1
//num = nums[maxIndex] = nums[1] = 2
//i = 1
//num % nums[1] = 2 % 1 === 0 && dp[1] === maxSize = 2 -> T
//             T                            T
//res = [ 2 ]
//num = 2 -> nums[1] = 2
//maxSize = 2 -> 1
//maxIndex = 1

//maxSize = 2 -> 1
//maxIndex = 1
//num = 2 -> nums[1] = 2
//i = 0
//num % nums[0] = 2 % 1 === 0 && dp[0] === maxSize = 1 -> T
//             T                            T
//res = [ 2, 1 ]

largestDivisibleSubset([1, 2, 4, 8]); //[1, 2, 4, 8]
