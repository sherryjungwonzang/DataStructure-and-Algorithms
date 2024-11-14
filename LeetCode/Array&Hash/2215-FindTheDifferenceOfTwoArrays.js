//2215. Find The Difference Of Two Arrays
//given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
//answer[0] is a list of all distinct integers in nums1 which are not present in nums2
//answer[1] is a list of all distinct integers in nums2 which are not present in nums1
//Note that the integers in the lists may be returned in any order

//Approach:
//using hash set
var findDifference = (nums1, nums2) => {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let res = [[], []];

    //traversing set1
    for (let num of set1) {
        if (!set2.has(num)) res[0].push(num);
    }

    //traversing set2
    for (let num of set2) {
        if (!set1.has(num)) res[1].push(num);
    }

    return res;
}
//TC: O(n + m)
//SC: O(n + m)
findDifference(nums1 = [1,2,3], nums2 = [2,4,6]); //[[1,3],[4,6]]
//set1 = [1, 2, 3] || set2 = [2, 4, 6]
//        ^
//1 is not in set2
//res = [[ 1, ], []]

//set1 = [1, 2, 3] || set2 = [2, 4, 6]
//           ^
//2 is in set2
//res = [[ 1, ], []]

//set1 = [1, 2, 3] || set2 = [2, 4, 6]
//              ^
//3 is not in set2
//res = [[ 1, 3 ], []]

//set1 = [1, 2, 3] || set2 = [2, 4, 6]
//                            ^
//2 is in set1
//res = [[ 1, 3 ], []]

//set1 = [1, 2, 3] || set2 = [2, 4, 6]
//                               ^
//4 is not in set1
//res = [[ 1, 3 ], [ 4, ]]

//set1 = [1, 2, 3] || set2 = [2, 4, 6]
//                                  ^
//6 is not in set1
//res = [[ 1, 3 ], [ 4, 6 ]]

findDifference(nums1 = [1,2,3,3], nums2 = [1,1,2,2]); //[[3],[]]
//set1 = [1, 2, 3] || set2 = [1, 2]
//        ^
//1 is in set2
//res = [[], []]

//set1 = [1, 2, 3] || set2 = [1, 2]
//           ^
//2 is in set2
//res = [[], []]

//set1 = [1, 2, 3] || set2 = [1, 2]
//              ^
//3 is not in set2
//res = [[3], []]

//set1 = [1, 2, 3] || set2 = [1, 2]
//                            ^
//1 is in set2
//res = [[3], []]

//set1 = [1, 2, 3] || set2 = [1, 2]
//                               ^
//2 is in set2
//res = [[3], []]
