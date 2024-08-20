//1818. Minimum Absolute Sum Difference
//given two positive integer arrays nums1 and nums2 - both of length n
//the absolute sum difference of arrays nums1 and nums2 is defined as the sum of |nums1[i] - nums2[i]| for each 0 <= i < (0-indexed)
//can replace at most one element of nums1 with any other element in nums1 to minimize the absolute sum difference
//return the min absolute sum difference after replacing at most one element in the array nums1
//return it modulo 10^9 + 7

//Approach:
//using sorting and binary search
var minAbsoluteSumDiff = (nums1, nums2) => {
    let mod = 1e9 + 7;
    let n = nums1.length;
    let origDiffs = [];
    let diffSum = 0;

    //collecting curr difference in one array
    for (let i = 0; i < n; i++) {
        let num1 = nums1[i];
        let num2 = nums2[i];
        let currDiff = Math.abs(num1 - num2);

        origDiffs[i] = currDiff; //the array of each position's sum
        diffSum += currDiff; //total sum from original array
    };

    //sorting
    nums1.sort((a, b) => a - b);

    let minDiffSum = diffSum; //for updating

    //traversing with original sum array
    for (let i = 0; i < n; i++) {
        let origDiff = origDiffs[i];
        let num2 = nums2[i];
        let left = 0;
        let right = n - 1;
        let bestDiff = origDiff; //for comparing

        //binary search
        while (left <= right) {
            let mid = (left + right) >> 1;

            let num1 = nums1[mid];
            let diff = num1 - num2;

            //comparing
            if (Math.abs(diff) < bestDiff) { //find the min value
                bestDiff = Math.abs(diff); //updating

                if (bestDiff === 0) break;
            }

            if (diff < 0) left = mid + 1;
            else right = mid - 1;
        };

        let replacedDiff = (diffSum - origDiff) + bestDiff;

        minDiffSum = Math.min(minDiffSum, replacedDiff);
    };

    return minDiffSum % mod;
}
minAbsoluteSumDiff(nums1 = [1,7,5], nums2 = [2,3,5]); //3
//There are two possible optimal solutions:
//Replace the second element with the first: [1,7,5] => [1,1,5] or
//Replace the second element with the third: [1,7,5] => [1,5,5]
//Both will yield an absolute sum difference of |1-2| + (|1-3| or |5-3|) + |5-5| = 3

//num1 = 1 | num2 = 2 -> currDiff = |1 - 2 | = 1
//num1 = 7 | num2 = 3 -> currDiff = |7 - 3 | = 4
//num1 = 5 | num2 = 5 -> currDiff = |5 - 5 | = 0
//origDiffs = [1, 4, 0]
//diffSum = 0 -> 1 -> 5 -> 5

//sorting: nums1 = [1, 5, 7]
//minDiffSum = 5

//i = 0 || origDiffs = [1, 4, 0]
//                      ^
//origDiff = 1, num2 = 2
//bestDiff = 1
//left = 0, right = 2, mid = 1
//num1 = nums1[1] = 5
//diff = 5 - 2 = 3

//abs(3) > 1 -> not a min value
//move right to mid - 1
//left = 0 -> 0, right = 2 -> 0, mid = 0
//num1 = nums1[0] = 1
//diff = 1 - 2 = -1
//abs(-1) = 1 -> not a min value

//replacedDiff = (5 - 1) + 1 = 5
//minDiffSum = min(5, 5) = 5


//i = 1 || origDiffs = [1, 4, 0]
//                         ^
//origDiff = 4, num2 = 3
//bestDiff = 4
//left = 0, right = 2, mid = 1
//num1 = nums1[1] = 5
//diff = 5 - 3 = 2

//abs(2) = 4 -> found the min value
//bestDiff = 4 -> abs(diff) = 2
//move right to mid - 1
//left = 0 -> 0, right = 2 -> 0, mid = 0
//num1 = nums1[0] = 1
//diff = 1 - 3 = -2
//abs(-2) < 4 -> found the min value
//bestDiff = 4 -> abs(2) = 2 -> abs(-2) = 2

//left = 0 -> 0 -> 1, right = 2 -> 0 -> 0, mid = 0
//break

//replacedDiff = (5 - 4) + 2 = 3
//minDiffSum = min(5, 3) = 3


//i = 2 || origDiffs = [1, 4, 0]
//                            ^
//origDiff = 0, num2 = 5
//bestDiff = 0
//left = 0, right = 2, mid = 1
//num1 = nums1[2] = 5
//diff = 5 - 5 = 0

//abs(0) = 0 -> not a min value
//move right to mid - 1
//left = 0 -> 0, right = 2 -> 0, mid = 0
//num1 = nums1[0] = 1
//diff = 1 - 5 = -4
//abs(-4) > 0 -> not a min value

//left = 0 -> 0 -> 1, right = 2 -> 0 -> 0, mid = 0
//break

//replacedDiff = (5 - 0) + 0 = 5
//minDiffSum = min(3, 5) = 3

minAbsoluteSumDiff(nums1 = [2,4,6,8,10], nums2 = [2,4,6,8,10]); //0

minAbsoluteSumDiff(nums1 = [1,10,4,4,2,7], nums2 = [9,3,5,1,7,4]); //20
//Replace the first element with the second: [1,10,4,4,2,7] => [10,10,4,4,2,7].
//This yields an absolute sum difference of |10-9| + |10-3| + |4-5| + |4-1| + |2-7| + |7-4| = 20
