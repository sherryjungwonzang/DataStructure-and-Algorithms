//724. Find Pivot Index
//given an array of integers nums
//calculate the pivot index of this array
//the pivot index is the index where the sum of all the numbers strictly to the left of the index is
//equal to the sum of all the numbers strictly to the index's right
//if the index is on the left edge of the array, then the left sum is 0 
//because there are no elements to the left
//this is also applies to the right edge of the array
//return the leftmost pivot index - if no such index exists, return -1

//Approach:
//using prefix sum
var pivotIndex = (nums) => {
    let leftWeight = 0; //leave as empty
    let rightWeight = sum(nums); //starting with sum

    //collecting sum of given array
    function sum(arr) {
        return arr.reduce((a, b) => a + b);
    };

    //balancing
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];

        //reducing from right side
        rightWeight -= curr;

        //balance is met on both sides
        if (leftWeight === rightWeight) return i;

        leftWeight += curr;
    }

    return -1;
}
pivotIndex([1,7,3,6,5,6]); //3 - Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 || Right sum = nums[4] + nums[5] = 5 + 6 = 11
//leftWeight = 0
//rightWeight = 1 + 7 + 3 + 6 + 5 + 6 = 28

//[1, 7, 3, 6, 5, 6]
// ^
//rightWeight = 28 -> 27
//27 != 0
//leftWeight = 0 -> 1

//[1, 7, 3, 6, 5, 6]
//    ^
//rightWeight = 28 -> 27 -> 20
//20 != 1
//leftWeight = 0 -> 1 -> 8

//[1, 7, 3, 6, 5, 6]
//       ^
//rightWeight = 28 -> 27 -> 20 -> 17
//17 != 8
//leftWeight = 0 -> 1 -> 8 -> 11

//[1, 7, 3, 6, 5, 6]
//          ^
//rightWeight = 28 -> 27 -> 20 -> 17 -> 11
//11 = 11
//leftWeight = 0 -> 1 -> 8 -> 11
//return 3

pivotIndex([1,2,3]); //-1 - there is no index satisfies the conditions
//leftWeight = 0
//rightWeight = 1 + 2 + 3 = 6

//[1, 2, 3]
// ^
//rightWeight = 6 -> 5
//5 != 0
//leftWeight = 0 -> 1

//[1, 2, 3]
//    ^
//rightWeight = 6 -> 5 -> 3
//3 != 1
//leftWeight = 0 -> 1 -> 3

//[1, 2, 3]
//       ^
//rightWeight = 6 -> 5 -> 3 -> 0
//0 != 3
//leftWeight = 0 -> 1 -> 3
//return -1

pivotIndex([2,1,-1]); //0 - Left sum = 0 (no elements to the left of index 0) || Right sum = nums[1] + nums[2] = 1 + -1 = 0
//leftWeight = 0
//rightWeight = 2 + 1 - 1 = 0

//[2, 1, -1]
// ^
//rightWeight = 0
//0 = 0
//leftWeight = 0
//return 0
