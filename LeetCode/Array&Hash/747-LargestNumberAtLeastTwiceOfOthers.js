//747. Largest Number At Least Twice Of Others
//given an integer array nums where the largest integer is unique
//determine whether the largest element in the array is at least twice as much as every other number in the array
//if it is, return the index of the largest element, or return -1 otherwise
var twiceLargestNum = (nums) => {
    let max = Math.max(...nums);
    let min = max / 2;
    let found = nums.find((n => n !== max && n > min));

    return found ? -1 : nums.indexOf(max);
}
twiceLargestNum([3,6,1,0]); //1 - 6 is the largest integer and twice as big as 3
//max = 6
//min = 6 / 2 = 3

//[3, 6, 1, 0]
// ^
//3 != 6 & 3 = min
//F

//[3, 6, 1, 0]
//    ^
//6 = 6
//F

//[3, 6, 1, 0]
//       ^
//1 != 6 & 1 < min
//F

//[3, 6, 1, 0]
//          ^
//0 != 6 & 0 < min
//F

//indexOf max = [1]

twiceLargestNum([1,2,3,4]); //-1 - 4 is less than teice of 3
//max = 4
//min = 4 / 2 = 2

//[1, 2, 3, 4]
// ^
//1 != 4 & 1 < min
//F

//[1, 2, 3, 4]
//    ^
//2 != 4 & 2 = min
//F

//[1, 2, 3, 4]
//       ^
//3 != 4 & 3 > min
//T

//[1, 2, 3, 4]
//          ^
//4 = 4
//F

//return -1
