//2154. Keep Multiplyinh Found Values By Two
//given an array of integers nums
//also given an integer original which is the first number that needs to be searched for in nums
//you then do the following steps:
//1. if original is found in nums, multiply it by two: original = 2 * original
//2. otherwise, stop the process
//3. repeat this process with the new number as long as you keep finding the number
//return the final value of original
var keepMultiplying = (nums, original) => {
    while (nums.includes(original)) {
        original *= 2;
    }

    return original; //if there is no multiply value anymore
}
keepMultiplying(nums = [5,3,6,1,12], original = 3); //24
//3 * 1 = 3
//[5, 3, 6, 1, 12]
//    ^

//3 * 2 = 6
//[5, 3, 6, 1, 12]
//       ^

//6 * 2 = 12
//[5, 3, 6, 1, 12]
//              ^

//12 * 2 = 24
//[5, 3, 6, 1, 12]
//no 24 in the array

keepMultiplying(nums = [2,7,9], original = 4); //4
//4 * 1 = 4
//[2, 7, 9]
//no 4 in the array
