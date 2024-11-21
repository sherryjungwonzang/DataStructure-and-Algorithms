//2733. Neither Minimum Nor Maximum
//given an integer array nums containing distinct positive integers
//find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number
//return the selected integer
var neitherMinMax = (nums) => {
    //base case
    if (nums.length < 3) return -1;

    let min = Math.min(...nums);
    let max = Math.max(...nums);

    for (let num of nums) {
        //neither min or max
        if (num !== min && num !== max) return num;
    }

    return -1;
}
neitherMinMax(nums = [3,2,1,4]); //2 or 3
//min = 1 || max = 3

//[3, 2, 1, 4]
// ^
//3 != min && 3 != max
//also, 2 != min && 2 != max

neitherMinMax(nums = [1,2]); //-1
//min = 1 || max = 2

//[1, 2]
// ^
//1 != min && 1 != max

//[1, 2]
//    ^
//2 != min && 2 != max
//-1

neitherMinMax(nums = [2,1,3]); //2
