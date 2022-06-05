//Single Number
//given a non-empty array of integers 'nums'
//every element appears twice except for one


//Approach 1: Map
var singleNumber = (nums) => {
    let map = new Map();
    let singleNumber;

    nums.map(number => {
        if (map.has(number)) {
            map.set(number, 2);
        } else {
            map.set(number, 1);
        }
    });

    nums.map(number => {
        if (map.get(number) == 1) {
            {singleNumber = number};
        }
    });
    return singleNumber;
};


//Approach 2: Hash Table
var singleNumber = (nums) => {
    let hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        if (hashTable[nums[i]] === undefined) {
            hashTable[nums[i]] = 1;
        } else {
            hashTable[nums[i]] = hashTable[nums[i]] + 1;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (hashTable[nums[i]] === 1) {
            return nums[i];
        } else {
            continue;
        }
    }
};
