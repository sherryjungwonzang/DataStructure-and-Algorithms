//2099. Find Subsequence Of Length K With The Largest Sum
//given an integer array nums and an integer k
//want to find a subsequence of nums of length k that has the largest sum
//return any such subsequence as an integer array of length k
//a subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements

//Approach:
//using clone of array
var maxSubsequence = (nums, k) => {
    //clone array
    let arr = [...nums];
    arr.sort((a, b) => b - a);
    arr = arr.slice(0, k); //to find k subsequence

    let res = [];

    //calculating the sum
    for (let i = 0; i < nums.length && arr.length > 0; i++) {
        let index = arr.lastIndexOf(nums[i]);

        if (index >= 0) {
            res.push(nums[i]);

            arr.splice(index, 1);
        }
    }

    return res;
}
maxSubsequence([2,1,3,3], 2); //[3,3] - 3 + 3 = 6
//nums = [2, 1, 3, 3]
//arr = [3, 3, 2, 1] -> [3, 3]
//res = [ ]

//i = 0
//index = -1 -> 2's last index is not in arr

//i = 1
//index = -1 -> 1's last index is not in arr

//i = 2
//index = 1 -> 3's last index in arr is 1
//splice(1, 1) -> arr = [3]
//res = [ 3 ]

//i = 3
//index = 0 -> 3's last index in arr is 0
//splice(0, 1) -> arr = []
//res = [ 3, 3 ]

maxSubsequence([-1,-2,3,4], 3); //[-1,3,4] = -1 + 3 + 4 = 6
//nums = [-1, -2, 3, 4]
//arr = [4, 3, -1, -2] -> [4, 3, -1]
//res = [ ]

//i = 0
//index = 2 -> -1's last index in arr is 2
//splice(2, 1) -> arr = [4, 3]
//res = [ -1,  ]

//i = 1
//index = -1 -> -2's last index is not in arr

//i = 2
//index = 1 -> 3's last index in arr is 1
//splice(1, 1) -> arr = [4]
//res = [ -1, 3,  ]

//i = 3
//index = 0 -> 4's last index in arr is 0
//splice(0, 1) -> arr = []
//res = [ -1, 3, 4 ]

maxSubsequence([3,4,3,3], 2); //[3,4] - 7
