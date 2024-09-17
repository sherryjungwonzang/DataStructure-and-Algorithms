//1608. Special Array With X Elements Greater Than Or Equal X
//given an array nums of non-negative integers
//nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x
//notice that x does not have to be an element in nums
//return x if the array is special,
//otherwise, return -1
//it can be proven that if nums is special, the value for x is unique

//Approach:
//using brute force
var specialArray = (nums) => {
    //traversing
    for (let i = 0; i <= nums.length; i++) {
        if (count(nums, i) === i) return i;
    }

    //counting greater than or equal to X
    function count(nums, target) {
        let count = 0;

        for (let num of nums) {
            if (target <= num) count++;
        }

        return count;
    }

    return -1;
}
specialArray([3, 5]); //2 -There are 2 values (3 and 5) that are greater than or equal to 2
//i = 0 -> count([3, 5], 0)
//count([3, 5], 0)
//       ^
//3 >= target = 0   || 5 >= target = 0
//count = 0 -> 1       -> 2
//count([3, 5], 0) = 2 != 0

//i = 1 -> count([3, 5], 1)
//count([3, 5], 1)
//       ^
//3 >= target = 1   || 5 >= target = 1
//count = 0 -> 1       -> 2
//count([3, 5], 1) = 2 != 1

//i = 2 -> count([3, 5], 2)
//count([3, 5], 2)
//       ^
//3 >= target = 2   || 5 >= target = 2
//count = 0 -> 1       -> 2
//count([3, 5], 2) = 2 = 2

specialArray([0,4,3,0,4]); //3  - There are 3 values that are greater than or equal to 3
//i = 0 -> count([0, 4, 3, 0, 4], 0)
//count([0, 4, 3, 0, 4], 0)
//       ^
//0 = target = 0   || 4 >= target = 0   || 3 >= target = 0  || 0 = target = 0   || 4 >= target = 0
//count = 0 -> 1       -> 2               -> 3                -> 4                 -> 5
//count([0, 4, 3, 0, 4], 0) != 5

//i = 1 -> count([0, 4, 3, 0, 4], 1)
//count([0, 4, 3, 0, 4], 1)
//       ^
//0 < target = 1   || 4 >= target = 1   || 3 >= target = 1  || 0 < target = 1   || 4 >= target = 1
//count = 0 -> 0       -> 1               -> 2                -> 2                 -> 3
//count([0, 4, 3, 0, 4], 1) != 3

//i = 2 -> count([0, 4, 3, 0, 4], 2)
//count([0, 4, 3, 0, 4], 2)
//       ^
//0 < target = 2   || 4 >= target = 2   || 3 >= target = 2  || 0 < target = 2   || 4 >= target = 2
//count = 0 -> 0       -> 1               -> 2                -> 2                 -> 3
//count([0, 4, 3, 0, 4], 2) != 3

//i = 3 -> count([0, 4, 3, 0, 4], 3)
//count([0, 4, 3, 0, 4], 3)
//       ^
//0 < target = 3   || 4 >= target = 3   || 3 = target = 3  || 0 < target = 3   || 4 >= target = 3
//count = 0 -> 0       -> 1               -> 2                -> 2                 -> 3
//count([0, 4, 3, 0, 4], 3) = 3

specialArray([0, 0]); //-1
