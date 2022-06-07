//Majority Element
//given an array nums of size n
//return the majority element
//majority element: appears more than n/2 times
//may assume the majority element always exists in the array

//Approach 1: Hash Map
var majorityElement = (nums) => {
    const map = new Map();

    for (const n of nums) {
        //newN is the occurence of n
        const newN = map.get(n) | 0; //if the element does not exist, occurence is 0
        map.set(n, newN + 1); //increment the occurence by one
    }

    let max = 0;
    let res;

    for (const [key, value] of map) {
        //iterate through map
        if (value > max) { //it can be changed by [value > (nums.length / 2)]
            max = value;
            res = key;
        }
    }
    return res;
}
