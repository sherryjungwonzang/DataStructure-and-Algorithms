//697. Degree Of An Array
//given a non-empty of non-negative integers nums
//the degree of this array is defined as the max frequency of any one of its elements
//your take is to find the smallest possible length of a contiguous subarray of nums, that has the same degree as nums

//Approach:
//using hash map and sorting
var degreeOfArray = (nums) => {
    let map = new Map();
    let max = -1;
    let maxKeys = [];
    let minDistance = nums.length;

    //frequency mapping
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }

    //sorting by frequency - ascending order
    let sorted = new Map([...map].sort((a, b) => b[1] - a[1]));

    //finding the max
    for (let [key, val] of sorted) {
        if (val >= max) {
            //resetting
            max = val;

            maxKeys.push(key);
        }
    };

    //finding the min distance
    maxKeys.forEach((key) => {
        let firstIndex = nums.indexOf(key);
        let lastIndex = nums.lastIndexOf(key);
        let distance = lastIndex - firstIndex;

        //min distance checking
        if (distance < minDistance) minDistance = distance;
    });

    return minDistance + 1; //for length - 0-indexed
}
degreeOfArray([1,2,2,3,1]); //2 - [2,2]
//map = { 
//    1: 2,              1: 2,
//    2: 2, -> sorting:  2: 2,
//    3: 1,              3: 1
//}

//   key: val                           key: val                        key: val
//    1: 2  <-                            1: 2                            1: 2 
//    2: 2                                2: 2 <-                         2: 2
//    3: 1                                3: 1                            3: 1 <-
//starting from '1' - val is '2'      next to '2' - val is '2'         next to '3' - val is '1'
//max = -1 -> 2                       max = -1 -> 2 -> 2               max = -1 -> 2 -> 2 < 1: not a max
//maxKeys = [ 1, ]                    maxKeys = [ 1, 2, ]              maxKeys = [ 1, 2 ]

//maxKeys = [ 1, 2 ]
//"1"
//[1, 2, 2, 3, 1]
// ^           ^
//firstIndex = 0 || lastIndex = 4 -> distance: 4 - 0 = 4
//minDisnace = 5 > distance = 4 -> reset minDistance = 5 -> 4

//"2"
//[1, 2, 2, 3, 1]
//    ^  ^
//firstIndex = 1 || lastIndex = 2 -> distance: 2 - 1 = 1
//minDisnace = 4 > distance = 1 -> reset minDistance = 5 -> 4 -> 1

//minDistance + 1 = 2

degreeOfArray([1,2,2,3,1,4,2]); //6 - [2,2,3,1,4,2] 
//map = { 
//    1: 2,              2: 3,
//    2: 3, -> sorting:  1: 2,
//    3: 1,              3: 1
//    4: 1,              4: 1
//}

//   key: val                           key: val                        key: val                               key: val
//    2: 3  <-                            2: 3                            2: 3                                   2: 3 
//    1: 2                                1: 2 <-                         1: 2                                   1: 2
//    3: 1                                3: 1                            3: 1 <-                                3: 1
//    4: 1                                4: 1                            4: 1                                   4: 1 <-
//starting from '2' - val is '3'      next to '1' - val is '2'         next to '3' - val is '1'                next to '4' - val is '1'
//max = -1 -> 3                       max = -1 -> 3 -> 3: not a max    max = -1 -> 3 -> 3 -> 3: not a max      max = -1 -> 3 -> 3 -> 3 -> 3: not a max
//maxKeys = [ 2, ]                    maxKeys = [ 2,  ]                maxKeys = [ 2,   ]                      maxKeys = [ 2 ]

//maxKeys = [ 2 ]
//"2"
//[1, 2, 2, 3, 1, 4, 2]
//    ^              ^
//firstIndex = 1 || lastIndex = 6 -> distance: 6 - 1 = 5
//minDisnace = 7 > distance = 5 -> reset minDistance = 7 -> 5

//minDistance + 1 = 6
