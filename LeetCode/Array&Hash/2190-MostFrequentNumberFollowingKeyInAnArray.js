//2190. Most Frequent Number Following Key In An Array
//given a 0-indexed integer array nums. You are also given an integer key, which is present in nums
//for every unique integer target in nums, count the number of times target immediately follows an occurrence of key in nums
//in other words, count the number of indices i such that:
//0 <= i <= nums.length - 2
//nums[i] == key and nums[i + 1] == target
//return the target with the maximum count
//the test cases will be generated such that the target with maximum count is unique

//Approach:
//using hash map
var frequentNumFollowingKey = (nums, key) => {
    let map = {};
    let res = 0;

    //checking with key
    for (let i = 0, max = 0; i < nums.length - 1; i++) {
        if (nums[i] !== key) continue;

        //setting target
        let target = nums[i + 1];

        //setting frequency
        map[target] = (map[target] || 0) + 1;

        //checking target frequency with max
        if (map[target] > max) {
            //updating
            max = map[target];

            res = target;
        }
    }

    return res;
}
frequentNumFollowingKey(nums = [1,100,200,1,100], key = 1); //100
//[1, 100, 200, 1, 100]
// ^
//i = 1 = key
//target = 100 -> map = { 100: 1 }
//max = 0 -> 1
//res = 0 -> 100

//[1, 100, 200, 1, 100]
//     ^
//i = 100 != key

//[1, 100, 200, 1, 100]
//          ^
//i = 200 != key

//[1, 100, 200, 1, 100]
//              ^
//i = 1 = key
//target = 100 -> map = { 100: 1 -> 2 }
//max = 0 -> 1 -> 2
//res = 0 -> 100 -> 100

frequentNumFollowingKey(nums = [2,2,2,2,3], key = 2); //2
//[2, 2, 2, 2, 3]
// ^
//i = 2 = key
//target = 2 -> map = { 2: 1 }
//max = 0 -> 1
//res = 0 -> 2

//[2, 2, 2, 2, 3]
//    ^
//i = 2 = key
//target = 2 -> map = { 2: 1 -> 2 } 
//max = 0 -> 1 -> 2
//res = 0 -> 2 -> 2

//[2, 2, 2, 2, 3]
//       ^
//i = 2 = key
//target = 2 -> map = { 2: 1 -> 2 -> 3 } 
//max = 0 -> 1 -> 2 -> 3
//res = 0 -> 2 -> 2 -> 2

//[2, 2, 2, 2, 3]
//          ^
//i = 2 = key
//target = 3 -> map = { 2: 1 -> 2 -> 3,
//                      3: 1
//                    } 
//map[3] = 1 < map[2] = 3 -> no updating
//res = 0 -> 2 -> 2 -> 2
