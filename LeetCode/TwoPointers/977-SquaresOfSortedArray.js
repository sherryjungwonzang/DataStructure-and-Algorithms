//977. Squares Of Sorted Array
//given an integer array 'nums' sorted in non-decreasing order
//return an array of the squares of each number sorted in non-decreasing order

//Approach:
//using two pointers
var squaresSortedArray = (nums) => {
    let n = nums.length;
    let res = new Array(n); //creating an array as res
    let left = 0;
    let right = n - 1;

    //two pointers - starting from backward to check which is bigger
    for (let i = n - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) >= Math.abs(nums[right])) { //if left square is bigger put left value
            res[i] = nums[left] * nums[left];
            left++;
        } else { //Math.abs(nums[left]) < Math.abs(nums[right]
            res[i] = nums[right] * nums[right];
            right--;
        }
    }
    return res;
}
//TC: O(n)
//SC: O(n)
squaresSortedArray([-4, -1, 0, 3, 10]); //[0, 1, 9, 16, 100] 
//res = [                  ]
//         0  1  2  3  4 

//[-4, -1, 0, 3, 10]
// L              R
//L: 16 < R: 100
//res = [              100  ]
//         0  1  2  3  4 

//[-4, -1, 0, 3, 10]
// L          R
//L: 16 >= R: 9
//res = [           16  100 ]
//         0  1  2  3  4 

//[-4, -1, 0, 3, 10]
//     L      R
//L: 1 < R: 9
//res = [        9  16 100 ]
//         0  1  2  3  4 

//[-4, -1, 0, 3, 10]
//     L   R
//L: 1 >= R: 0
//res = [     1  9  16 100 ]
//         0  1  2  3  4 


//res = [ 0 1  9  16 100 ]

squaresSortedArray([-7, -3, 2, 3, 11]); //[4, 9, 9, 49, 121]
