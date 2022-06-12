//Contains Duplicates
//given an integer array: nums
//return true if any value appears at least twice in the array

//Approach: Hash Table
//use map to store every value when I encounter in the array
//in the loop, checking if the value exists in the map or not
var containsDuplicate = (nums) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i])) return true;
        map.set(nums[i], 1);
    }
    return false;
};

//another solution
const containsDuplicate = (nums) => {
    const hash = new Map();

    for (const n of nums) {
        if (hash.has(n)) return true;
        hash.set(n, true);
    }
    return false;
};
