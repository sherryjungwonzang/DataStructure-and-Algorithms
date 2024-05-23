//496. Next Greater Element
//the next greater element of some element x in an array is the first greater element that is to the right of x in the same array
//given two distinct 0-indexed integer arrays nums1 and nums2 - where nums1 is a subset of nums2
//for each 0 <= i < nums.length, firnd the index j such that nums1[i] == nums2[j]
//and determine the next greater element of nums[j] in nums2
//if there is no next greater element, then the answer for this query is -1
//return an array 'res' of length num1.length such that res[i] is the next greater element as described above

//Approach:
//using map and stack
var nextGreaterElement = (nums1, nums2) => {
    let map = {};
    let stack = [];
    let res = [];

    //finding the next greater element from nums2 array
    for (let i = 0; i < nums2.length; i++) {
        let curr = nums2[i];

        while (curr > stack[stack.length - 1]) {
            let prev = stack.pop();
            map[prev] = curr; //mapping previous value and the next greater element
        }

        stack.push(curr); //later only elements that does not have next greater value will left
    }

    //checking with nums1
    for (let num of nums1) {
        map[num] ? res.push(map[num]) : res.push(-1);
    }

    return res;
}
nextGreaterElement([4,1,2], [1,3,4,2]); //[-1, 3, -1]
//4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
//1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
//2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1

nextGreaterElement([2,4], [1,2,3,4]); //[3, -1]
//2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
//4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1
