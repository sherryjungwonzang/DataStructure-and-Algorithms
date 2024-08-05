//915. Partition Array Into Disjoint Intervals
//given an integer array 'nums'
//partition it into two contiguous subarrays left and right so that:
//every eleemnt in left is less than or equal to every element in right
//left and right are non-empty
//left has the smallest possible size
//return the length of left after such a partitioning\

//Approach:
//using two pointers
var partitionDisjoint = (nums) => {
    let left = 0;
    let right = 1;
    let maxLeft = 0; //greatest in left array

    while (right < nums.length) {
        //tracking the highest number in left side
        maxLeft = Math.max(maxLeft, nums[left]);

        //two pointers
        if (maxLeft > nums[right]) {
            left++;
            right = left;
        }
        right++;
    }

    return left + 1; //the length of left array
}
//TC: O(n)
//SC: O(1)
partitionDisjoint([5, 0, 3, 8, 6]); //3 - left: [5,0,3], right: [8,6]
//left = 0
//right = 1

//[5, 0, 3, 8, 6]
// L  R
//maxLeft = 0 -> (0, 5) = 5
//5 > 0
//left = 0 -> 1
//right = 1 -> 1
//[5, 0, 3, 8, 6]
//    L  R
//right = 2

//[5, 0, 3, 8, 6]
//    L  R
//maxLeft = 0 -> (0, 5) = 5 -> (5, 0) = 5
//5 > 3
//left = 0 -> 1 -> 2
//right = 1 -> 2
//[5, 0, 3, 8, 6]
//       L  R
//right = 3

//[5, 0, 3, 8, 6]
//       L  R
//maxLeft = 0 -> (0, 5) = 5 -> (5, 0) = 5 -> (5, 3) = 5
//5 < 8
//left = 0 -> 1 -> 2 -> 2
//[5, 0, 3, 8, 6]
//       L     R
//right = 4

//[5, 0, 3, 8, 6]
//       L     R
//maxLeft = 0 -> (0, 5) = 5 -> (5, 0) = 5 -> (5, 3) = 5 -> (5, 3) = 5
//5 < 6
//left = 0 -> 1 -> 2 -> 2
//[5, 0, 3, 8, 6]
//       L        R
//right = 5

//left = 2 + 1  = 3

partitionDisjoint([1, 1, 1, 0, 6, 12]); //4 - left: [1,1,1,0], right: [6, 12]

