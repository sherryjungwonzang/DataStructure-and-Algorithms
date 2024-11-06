//1389. Create Target Array In The Given Order
//given two arrays of integers nums and index

//your task is to create target array under the following rules:
//initially target array is empty
//from left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array
//repeat the previous step until there are no elements to read in nums and index

//return the target array
//it is guaranteed that the insertion operations will be valid

//Approach:
//using splice()
var createTargetArray = (nums, index) => {
    let res = [];

    for (let num of nums) {
        //removing the first value as position
        let idx = index.shift(); 

        //creating a target array
        res.splice(idx, 0, num);
    }

    return res;
}
createTargetArray(nums = [0,1,2,3,4], index = [0,1,2,2,1]); //[0,4,1,3,2]
//nums       index     target
//0            0        [0]
//1            1        [0,1]
//2            2        [0,1,2]
//3            2        [0,1,3,2]
//4            1        [0,4,1,3,2]

//nums = [0,1,2,3,4], index = [0,1,2,2,1]
//        ^                    ^
//num = 0 | idx = 0 -> res.splice(0, 0, 0)
//res = [ 0 ]

//nums = [0,1,2,3,4], index = [0,1,2,2,1]
//          ^                    ^
//num = 1 | idx = 1 -> res.splice(1, 0, 1)
//res = [ 0, 1 ]

//nums = [0,1,2,3,4], index = [0,1,2,2,1]
//            ^                    ^
//num = 2 | idx = 2 -> res.splice(2, 0, 2)
//res = [ 0, 1, 2 ]

//nums = [0,1,2,3,4], index = [0,1,2,2,1]
//              ^                    ^
//num = 3 | idx = 2 -> res.splice(3, 0, 2)
//res = [ 0, 1, 3, 2 ]

//nums = [0,1,2,3,4], index = [0,1,2,2,1]
//                ^                    ^
//num = 4 | idx = 1 -> res.splice(4, 0, 1)
//res = [ 0, 4, 1, 3, 2 ]

createTargetArray(nums = [1,2,3,4,0], index = [0,1,2,3,0]); //[0,1,2,3,4]
//nums       index     target
//1            0        [1]
//2            1        [1,2]
//3            2        [1,2,3]
//4            3        [1,2,3,4]
//0            0        [0,1,2,3,4]

createTargetArray(nums = [1], index = [0]); //[1]
