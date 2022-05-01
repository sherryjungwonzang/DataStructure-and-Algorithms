//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let map = new Map;
    
    for (var i = 0; i < nums.length; i++) {
        let  current = target - nums[i];
        if (map.has(current)) {
            return [map.get(current), i]
        }
        map.set(nums[i], i);
    }
};
