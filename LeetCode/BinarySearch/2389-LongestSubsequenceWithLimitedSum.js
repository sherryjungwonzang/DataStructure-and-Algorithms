//2389. Longest Subsequence With Limited Sum
//given an integer array nums of length n
//and an integer array queries of length m
//return array answer of length m where answer[i] is the max size of a subsequence that you can take from
//nums such that the sum of its element is less than or equal to queries[i]
//a subsequence is an array that can be derived from another array by deleting some or no elements without
//changing the order of the remaining elements

//Approach:
//using sorting, prefixSum and binary search
var longestSubsequnceLimitedSum = (nums, queries) => {
    let res = [];

    //sorting
    nums.sort((a, b) => a - b);

    //prefix sum
    let prefixSum = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        //adding curr with prev
        prefixSum.push(prefixSum[i - 1] + nums[i]);
    }

    //binary search
    function binarySearch(arr, left, right, query) {
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            if (arr[mid] === query) return mid;
            else if (arr[mid] > query) return binarySearch(arr, left, mid - 1, query); //right side
            else return binarySearch(arr, mid + 1, right, query); //left side
        }

        return left; //oldMid
    };

    //looping query arr
    for (let j = 0; j < queries.length; j++) {
        res.push(binarySearch(prefixSum, 0, prefixSum.length - 1, queries[j] + 1));
    }

    return res;
} 
longestSubsequnceLimitedSum(nums = [4,5,2,1], queries = [3,10,21]); //[2,3,4]
//The subsequence [2,1] has a sum less than or equal to 3. It can be proven that 2 is the maximum size of such a subsequence, so answer[0] = 2
//The subsequence [4,5,1] has a sum less than or equal to 10. It can be proven that 3 is the maximum size of such a subsequence, so answer[1] = 3
//The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be proven that 4 is the maximum size of such a subsequence, so answer[2] = 4

//sorting: [1, 2, 4, 5]
//             ^
//prefixSum: [1, 2+1 = 3, ]

//                ^
//prefixSum: [1, 2+1 = 3, 4 + 3 = 7,  ]

//                   ^
//prefixSum: [1, 2+1 = 3, 4 + 3 = 7, 5 + 7 = 12 ]
//prefixSum = [1, 3, 7, 12]

//binary search
//j = 0
//starting with binarySearch([1,3,7,12], 0, 3, 4)
//mid = 0 + (3 - 1) / 2 = 1
//prefixSum[1] = 3 < query = 4 -> leaving left side

//binarySearch([1,3,7,12], 2, 3, 4)
//mid = 2 + (3 - 2) / 2 = 2
//prefixSum[2] = 7 > query = 4 -> leaving right side

//binarySearch([1,3,7,12], 2, 1, 4)
//left >= right -> not valid for binary search
//res = [2, ]

//j = 1
//starting with binarySearch([1,3,7,12], 0, 3, 11)
//mid = 0 + (3 - 1) / 2 = 1
//prefixSum[1] = 3 < query = 11 -> leaving left side

//binarySearch([1,3,7,12], 2, 3, 11)
//mid = 2 + (3 - 2) / 2 = 2
//prefixSum[2] = 7 < query = 11 -> leaving left side

//binarySearch([1,3,7,12], 3, 3, 11)
//mid = 3 + (3 - 3) / 2 = 3
//prefixSum[3] = 12 > query = 11 -> leaving right side

//binarySearch([1,3,7,12], 3, 2, 11)
//left >= right -> not valid for binary search
//res = [2, 3, ]

//j = 2
//starting with binarySearch([1,3,7,12], 0, 3, 22)
//mid = 0 + (3 - 1) / 2 = 1
//prefixSum[1] = 3 < query = 22 -> leaving left side

//binarySearch([1,3,7,12], 2, 3, 22)
//mid = 2 + (3 - 2) / 2 = 2
//prefixSum[2] = 7 < query = 22 -> leaving left side

//binarySearch([1,3,7,12], 3, 3, 22)
//mid = 3 + (3 - 3) / 2 = 3
//prefixSum[3] = 12 < query = 22 -> leaving left side

//binarySearch([1,3,7,12], 4, 3, 22)
//left >= right -> not valid for binary search
//res = [2, 3, 4 ]

longestSubsequnceLimitedSum(nums = [2,3,4,5], queries = [1]); //[0]
//The empty subsequence is the only subsequence that has a sum less than or equal to 1
