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
