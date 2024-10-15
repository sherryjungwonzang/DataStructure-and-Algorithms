//2032. Two Out Of Three
//given three arrays nums1, nums2, and nums3
//return a distinct array containing all the values that are present in at least two out of the three arrays
//you may return the values in any order

//Approach:
//using set
var twoOutOfThree = (nums1, nums2, nums3) => {
    let set1 = new Set(); //for nums1
    let set2 = new Set(); //for nums2
    let res = new Set();

    //setting set1 with nums1 array
    for (let n of nums1) set1.add(n);

    //setting set2 with nums2 array
    for (let n of nums2) {
        set2.add(n);

        //comparing with 1 and 2
        if (set1.has(n)) res.add(n);
    }

    //checking with set1 & set2
    for (let n of nums3) {
        //common values
        if (set1.has(n) || set2.has(n)) res.add(n);
    }

    return [...res];
}
twoOutOfThree(nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]); //[3, 2]
//                     ^ ^ ^ ^            ^ ^
//set1 = {1, 3, 2} || set2 = {2, 3}
//           ^  ^             ^  ^
//res = { 3, 2, }

//nums3 = [3] || set1 = {1, 3, 2} || set2 = {2, 3}
//         ^                ^                   ^
//'3' has as common value -> adding res

//res = [ 3, 2 ]

twoOutOfThree(nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]); //[2,3,1]
//                     ^ ^            ^ ^
//set1 = {1, 3} || set2 = {2, 3}
//           ^                ^
//res = { 3, }

//nums3 = [1, 2] || set1 = {1, 3} || set2 = {2, 3}
//         ^                ^               
//res = { 3, 1, }

//nums3 = [1, 2] || set1 = {1, 3} || set2 = {2, 3}
//            ^                              ^               
//res = { 3, 1, 2 }

//res = [3, 1, 2]

twoOutOfThree(nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]); //[]
