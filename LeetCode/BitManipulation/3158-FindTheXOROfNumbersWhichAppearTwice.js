//3158. Find The XOR Of Numbers Which Appear Twice
//given an array nums, where each number in the array appears either once or twice
//return the bitwise XOR of all the numbers that appear twice in the array, or 0 if no number appears twice

//Approach:
//using hash map
var duplicateNumXOR = (nums) => {
    let map = new Map();
    let res = 0;

    //frequency checking
    for (let num of nums) map.set(num, (map.get(num) || 0) + 1);

    //appear twice
    for (let [num, count] of map.entries()) {
        //XOR
        if (count === 2) res ^= num;
    }

    return res;
}
//TC: O(n)
//SC: O(n)
duplicateNumXOR([1,2,1,3]); //1
//map = {
//  1: 2,
//  2: 1,
//  3: 1
//}

//1: 2 -> 1 ^ 0 = 1

duplicateNumXOR([1,2,3]); //0
//map = {
//  1: 1,
//  2: 1,
//  3: 1
//}

//no duplicate nums

duplicateNumXOR([1,2,2,1]); //3
//map = {
//  1: 2,
//  2: 2,
//}

//1: 2 -> 1 ^ 0 = 1
//2: 2 -> 2 ^ 1  = 3
