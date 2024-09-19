//2970. Count The Number Of Incremovable Subarrays
//given a 0-indexed array of positive integers nums
//a subarray of nums is called incremovale if nums becomes strictly increasing on removing the subarray
//for example, the subarray [3, 4] is an incremovable subarray of [5,3,4,6,7]
//because removing this subarray changes the array [5,3,4,6,7] to [5,6,7] which is strictly increasing
//return the total number of incremovable subarrays of nums
//a subarray is a contiguous non-empty sequence of elements within an array

//Approach:
//using brute-force approach
var incremovableSubarrays = (nums) => {
    let count = 0;

    //checking all subarrays
    for (let i = 0; i < nums.length; i++) {
        for (j = i + 1; j <= nums.length; j++) {
            let first = nums.slice(0, i);
            let second = nums.slice(j, nums.length);

            //concating
            if (check(first.concat(second))) count++;
        }
    }

    //check array is incremovable or not
    function check(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= arr[i - 1]) return false; //not incremovable
        }

        return true;
    }

    return count;
}
incremovableSubarrays([1,2,3,4]); //10 - The 10 incremovable subarrays are: [1], [2], [3], [4], [1,2], [2,3], [3,4], [1,2,3], [2,3,4], and [1,2,3,4]
//[1, 2, 3, 4]
// i  j
//first = (0, 0) = []
//second = (1, 4) = [2, 3, 4]
//concating & checking -> [2, 3, 4]
//3 > 2 || 4 > 3 -> True
//count = 0 -> 1

//[1, 2, 3, 4]
// i     j
//first = (0, 0) = []
//second = (2, 4) = [3, 4]
//concating & checking -> [3, 4]
//4 > 3 -> True
//count = 0 -> 1 -> 2

//[1, 2, 3, 4]
// i        j
//first = (0, 0) = []
//second = (3, 4) = [4]
//concating & checking -> [4]
//count = 0 -> 1 -> 2 -> 3

//[1, 2, 3, 4]
// i          j
//first = (0, 0) = []
//second = (4, 4) = []
//concating & checking -> []
//count = 0 -> 1 -> 2 -> 3 -> 4

//[1, 2, 3, 4]
//    i  j
//first = (0, 1) = [1]
//second = (2, 4) = [3, 4]
//concating & checking -> [1, 3, 4]
//3 > 1 || 4 > 3 -> True
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5

//[1, 2, 3, 4]
//    i     j
//first = (0, 1) = [1]
//second = (3, 4) = [4]
//concating & checking -> [1, 4]
//4 > 1 -> True
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6

//[1, 2, 3, 4]
//    i        j
//first = (0, 1) = [1]
//second = (4, 4) = []
//concating & checking -> [1]
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

//[1, 2, 3, 4]
//       i  j
//first = (0, 2) = [1, 2]
//second = (3, 4) = [4]
//concating & checking -> [1, 2, 4]
//2 > 1 || 4 > 2 -> True
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8

//[1, 2, 3, 4]
//       i     j
//first = (0, 2) = [1, 2]
//second = (4, 4) = []
//concating & checking -> [1, 2]
//2 > 1 -> True
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

//[1, 2, 3, 4]
//          i   j
//first = (0, 3) = [1, 2, 3]
//second = (4, 4) = []
//concating & checking -> [1, 2, 3]
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10

incremovableSubarrays([6,5,7,8]); //7 - The 7 incremovable subarrays are: [5], [6], [5,7], [6,5], [5,7,8], [6,5,7] and [6,5,7,8]
//[6, 5, 7, 8]
// i  j
//first = (0, 0) = []
//second = (1, 4) = [5, 7, 8]
//concating & checking -> [5, 7, 8]
//7 > 5 || 8 > 7 -> True
//count = 0 -> 1

//[6, 5, 7, 8]
// i     j
//first = (0, 0) = []
//second = (2, 4) = [7, 8]
//concating & checking -> [7, 8]
//8 > 7 -> True
//count = 0 -> 1 -> 2

//[6, 5, 7, 8]
// i        j
//first = (0, 0) = []
//second = (3, 4) = [8]
//concating & checking -> [8]
//count = 0 -> 1 -> 2 -> 3

//[6, 5, 7, 8]
// i           j
//first = (0, 0) = []
//second = (4, 4) = []
//concating & checking -> []
//count = 0 -> 1 -> 2 -> 3 -> 4

//[6, 5, 7, 8]
//    i  j
//first = (0, 1) = [6]
//second = (1, 4) = [7, 8]
//concating & checking -> [6, 7, 8]
//7 > 6 || 8 > 7 -> True
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5

//[6, 5, 7, 8]
//    i     j
//first = (0, 1) = [6]
//second = (2, 4) = [8]
//concating & checking -> [6, 8]
//8 > 6 -> True
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6

//[6, 5, 7, 8]
//    i        j
//first = (0, 1) = [6]
//second = (4, 4) = []
//concating & checking -> [6]
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

//[6, 5, 7, 8]
//       i  j
//first = (0, 2) = [6, 5]
//second = (3, 4) = [8]
//concating & checking -> [6, 5, 8]
//5 < 6 -> False
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 7

//[6, 5, 7, 8]
//       i     j
//first = (0, 2) = [6, 5]
//second = (3, 4) = []
//concating & checking -> [6, 5]
//5 < 6 -> False
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 7 -> 7

//[6, 5, 7, 8]
//          i  j
//first = (0, 3) = [6, 5, 7]
//second = (4, 4) = []
//concating & checking -> [6, 5, 7]
//5 < 6 -> False 
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 7 -> 7 -> 7

incremovableSubarrays([8,7,6,6]); //3 - The 3 incremovable subarrays are: [8,7,6], [7,6,6], and [8,7,6,6]
