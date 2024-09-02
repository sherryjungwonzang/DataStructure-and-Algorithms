//350. Intersection Of Two Arrays2
//given two integer arrays nums1 and nums2
//return an array of their intersection
//each element in the result must appear as many times as it shows in both arrays and may return the result in any order

//Approach:
//using two pointers
var intersectionTwoArrays2 = (nums1, nums2) => {
    let m = nums1.length;
    let n = nums2.length;
    let left = 0;
    let right = 0;
    let res = [];

    //sorting
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    //two pointers
    while (left < m && right < n) {
        if (nums1[left] === nums2[right]) {
            res.push(nums1[left]);
            left++;
            right++;
        } else if (nums1[left] < nums2[right]) left++;
        else right++;
    }
    
    return res;
}
intersectionTwoArrays([1, 2, 2, 1], [2, 2]); //[2, 2]
//res = []
//nums1 = [1, 1, 2, 2] || nums2 = [2, 2]
//         L                       R
//L != R || nums2 > nums1 -> left++

//nums1 = [1, 1, 2, 2] || nums2 = [2, 2]
//            L                    R
//L != R || nums2 > nums1 -> left++

//nums1 = [1, 1, 2, 2] || nums2 = [2, 2]
//               L                 R
//L = R || res = [2, ] & left++ right++

//nums1 = [1, 1, 2, 2] || nums2 = [2, 2]
//                  L                 R
//L = R || res = [2, 2 ] & left++ right++

intersectionTwoArrays([4, 9, 5], [9, 4, 9, 8, 4]); //[9, 4] or [4, 9]
//res = []
//nums1 = [4, 5, 9] || nums2 = [4, 4, 8, 9, 9]
//         L                    R
//L = R || res = [4,  ] & left++ right++

//nums1 = [4, 5, 9] || nums2 = [4, 4, 8, 9, 9]
//            L                    R
//L != R || nums2 < nums1 -> right++

//nums1 = [4, 5, 9] || nums2 = [4, 4, 8, 9, 9]
//            L                       R
//L != R || nums2 > nums1 -> left++

//nums1 = [4, 5, 9] || nums2 = [4, 4, 8, 9, 9]
//               L                    R
//L != R || nums2 < nums1 -> right++

//nums1 = [4, 5, 9] || nums2 = [4, 4, 8, 9, 9]
//               L                       R
//L = R || res = [4, 9 ] & left++ right++

//nums1 = [4, 5, 9] || nums2 = [4, 4, 8, 9, 9]
//                  L                       R


