//Contains Duplicates II
//given an array: nums and an integerL k
//return true if there are two distinct indices i and j in the array
//nums[i] == nums[j] and abs(i - j) <= k

//Approach: Hash Map
var containsNearbyDuplicate = (nums, k) => {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        if (map.has(current) && Math.abs(map.get(current) - i) <= k) {
            return true;
        } else {
            map.set(current, i);
        }
    }
    return false;
};

//Approach: Two pointers approach
var containsNearbyDuplicate = (nums, k) => {
    if (nums.length === 1) return false;

    let left = 0;
    let right = 1;

    while(left < right && left <= nums.length) {
        if (right - left > k || right >= nums.length) {
            left++;
            right = left + 1;
            continue;
        }

        if (nums[left] === nums[right]) return true;
        right++;
    }
    return false;
};
