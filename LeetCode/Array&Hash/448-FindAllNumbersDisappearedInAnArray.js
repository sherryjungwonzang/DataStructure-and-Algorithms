//448. Find All Numbers Disappeared In An Array
//given an array nums of n integers where nums[i] is in the range [i, n]
//return an array of all the integers in the range [1, n] that do not appear in nums

//Approach:
//using map
var numbersDisappeared = (nums) => {
    let map = new Map();
    let res = [];

    nums.forEach((num, i) => map.set(num, i));

    //finding the missing numbers
    for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) res.push(i);
    }

    return res;
}
numbersDisappeared([4,3,2,7,8,2,3,1]); //[5, 6]
//[4, 3, 2, 7, 8, 2, 3, 1]
//map = [4, 3, 2, 7, 8, 2, 3, 1]
//       ^
//starting from i = 1 to 8 -> putting the missing numbers in res
//[5, 6]

numbersDisappeared([1, 1]); //[2]
