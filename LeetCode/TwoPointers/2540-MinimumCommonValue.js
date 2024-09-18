//2540. Minimum Common Value
//given two integer arrays nums1 and nums2, sorted in non-decreasing order
//return the min integer common to both arrays
//if there is no common integer amongst nums1 and nums2, return -1

//Approach:
//using two pointers
var minCommonValue = (nums1, nums2) => {
    let i = 0; //nums1
    let j = 0; //nums2
    let common = 0;

    while (i < nums1.length && j < nums2.length) {
        //common
        if (nums1[i] === nums2[j]) {
            common = nums1[i];
            break;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return common !== 0 ? common : -1;
}
minCommonValue(nums1 = [1,2,3], nums2 = [2,4]); //2
//nums1 = [1, 2, 3], nums2 = [2, 4]
//         i                  j
//nums1 < nums2 -> i++

//nums1 = [1, 2, 3], nums2 = [2, 4]
//            i               j
//nums1 = nums2 -> common = 0 -> 2

minCommonValue(nums1 = [1,2,3,6], nums2 = [2,3,4,5]); //2 - There are two common elements in the array 2 and 3 out of which 2 is the smallest
//nums1 = [1, 2, 3, 6], nums2 = [2, 3, 4, 5]
//         i                     j
//nums1 < nums2 -> i++

//nums1 = [1, 2, 3, 6], nums2 = [2, 3, 4, 5]
//            i                  j
//nums1 = nums2 -> common = 0 -> 2
