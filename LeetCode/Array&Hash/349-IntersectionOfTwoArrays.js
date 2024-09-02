//349. Intersection Of Two Arrays
//given two integer arrays nums1 and nums2
//return an array of their intersection
//each element in the result must be unique and may return the result in any order

//Approach:
//using set
var intersectionTwoArrays = (nums1, nums2) => {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    return Array.from(new Set([...set1].filter(x => set2.has(x))));
}
intersectionTwoArrays([1, 2, 2, 1], [2, 2]); //[2]
//set1 = [1, 2]
//set2 = [2]
//common element between two sets are [2]

intersectionTwoArrays([4, 9, 5], [9, 4, 9, 8, 4]); //[9, 4] or [4, 9]
//set1 = [4, 9, 5]
//set2 = [9, 4, 8]
//common element between two sets are [9, 4]
