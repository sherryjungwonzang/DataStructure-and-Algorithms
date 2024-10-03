//2367. Number Of Arithmetic Triplets
//given a 0-indexed, strictly increasing integer array 'nums' and a positive integer 'diff'
//a triplet (i, j, k) is an arithmetic triplet if the following conditions are met:
//i < j < k
//nums[j] - nums[i] == diff and nums[k] - nums[j] == diff
//return the number of unique arithmetic triplets

//Approach:
//using different approach about 'diff' as '+'
var arithmeticTriplets = (nums, diff) => {
    let count = 0;

    for (let num of nums) {
        //to check two values
        if (nums.includes(num + diff) && nums.includes(num + diff * 2)) count++;
    }

    return count;
}
arithmeticTriplets(nums = [0,1,4,6,7,10], diff = 3); //2 - (1,4,7) and (4,7,10)
//[0, 1, 4, 6, 7, 10]
// ^
//0 + 3 = 3 -> not in array

//[0, 1, 4, 6, 7, 10]
//    ^
//1 + 3 = 4 -> in array
//1 + 3 * 2 = 7 -> in array
//count = 0 -> 1

//[0, 1, 4, 6, 7, 10]
//       ^
//4 + 3 = 7 -> in array
//4 + 3 * 2 = 10 -> in array
//count = 0 -> 1 -> 2

//[0, 1, 4, 6, 7, 10]
//          ^
//6 + 3 = 9 -> not in array

//[0, 1, 4, 6, 7, 10]
//             ^
//7 + 3 = 10 -> in array
//7 + 3 * 2 = 13 -> not in array

//[0, 1, 4, 6, 7, 10]
//                 ^
//10 + 3 = 13 -> not in array

arithmeticTriplets(nums = [4,5,6,7,8,9], diff = 2); //2 - (4,6,8) and (5,7,9)
//[4, 5, 6, 7, 8, 9]
// ^
//4 + 2 = 6 -> in array
//4 + 2 * 2 = 8 -> in array
//count = 0 -> 1

//[4, 5, 6, 7, 8, 9]
//    ^
//5 + 2 = 7 -> in array
//5 + 2 * 2 = 9 -> in array
//count = 0 -> 1 -> 2

//[4, 5, 6, 7, 8, 9]
//       ^
//6 + 2 = 8 -> in array
//6 + 2 * 2 = 10 -> not in array

//[4, 5, 6, 7, 8, 9]
//          ^
//7 + 2 = 9 -> in array
//7 + 2 * 2 = 11 -> not in array

//[4, 5, 6, 7, 8, 9]
//             ^
//8 + 2 = 10 -> not in array

//[4, 5, 6, 7, 8, 9]
//                ^
//9 + 2 = 11 -> not in array
