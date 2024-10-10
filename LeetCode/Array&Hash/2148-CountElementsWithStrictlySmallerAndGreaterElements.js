//2148. Count Elements With Strictly Smaller And Greater Elements
//given an integer array nums
//return the number of elements that have both a strictly smaller and a strictly greater element appear in nums
var strictlySmallerGreaterCount = (nums) => {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let count = 0;

    nums.forEach(num => {
        //checking smaller and greater elements
        if (num < max && num > min) count++;
    });

    return count;
}
strictlySmallerGreaterCount([11,7,2,15]); //2 - 7, 15
//min =  2 || max = 15

//[11, 7, 2, 15]
// ^
//11 < 15 && 11 > 2
//count = 0 -> 1

//[11, 7, 2, 15]
//     ^
//7 < 15 && 7 > 2
//count = 0 -> 1 -> 2

//[11, 7, 2, 15]
//        ^
//2 < 15 && 2 = 2
//count = 0 -> 1 -> 2 -> 2

//[11, 7, 2, 15]
//            ^
//15 = 15 && 15 > 2
//count = 0 -> 1 -> 2 -> 2 -> 2

strictlySmallerGreaterCount([-3,3,3,90]); //2 - 3, -3
