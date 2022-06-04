//Merge Sorted Array
//given two integer arrays: nums1, nums2
//sorted in non-decreasing order
//two integers: m and n
//the final sorted array should not be returned by the function 
//be stored inside the array nums1
//nums1 -> has a length of m+n
//m is the first m elements denote the elements that should be merged
//n is the last n elements are set to 9 and should be ignored
//nums2 -> has a length of n


//Approach: Two pointers
const merge = (nums1, m, nums2, n) => {
    let left = m - 1;
    let right = n - 1;

    for (let i = nums1.length - 1; i >= 0; i--) {
        if (right < 0) break;

        if (left >= 0 && nums1[left] > nums2[right]) {
            nums1[i] = nums1[left--];
        } else {
            nums1[i] = nums2[right--];
        }
    }
}
//Time Complexity: O(n+m)
//Space Complexity: O(1)
