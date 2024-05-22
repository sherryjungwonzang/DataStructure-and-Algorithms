//153. Find minimum in rotated sorted array
//given the sorted rotated array 'nums' of unique elements
//return the minimum element of this array

//suppose an array of length 'n' sorted in ascending order is rotated between 1 and n times
//ex) that array nums = [0,1,2,4,5,6,7] might become: 
//[4,5,6,7,0,1,2] if it was rotated 4 times
//[0,1,2,4,5,6,7] if it was rotated 7 times

//rotating an array [a[0], a[1], a[2] ... a[n-1]] results [a[n-1], a[0], a[1], a[2] ... a[n-2]]

//Approach:
//using two pointers for binary search
//compare between pointers and then discard the range 
var minRotatedSortedArr = (nums) => {
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let mid = Math.floor((right + left) / 2);

        if (nums[right] < nums[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
}
minRotatedSortedArr([3, 4, 5, 1, 2]); //1 - original array was [1,2,3,4,5] rotated 3 times
//                   l           r
//mid = (0+4)/2 = index[2] -> 5
//2 < 5 -> YES
//left is moving to index[mid=2]+1

//                             l  r
//return nums[left] = 1

minRotatedSortedArr([4, 5, 6, 7, 0, 1, 2]); //0 - original array was [0,1,2,4,5,6,7] and it was rotated 4 times
//                   l                 r
//mid = (0+6)/2 = index[3] -> 7
//2 < 7 -> YES
//left is moving to index[mid=3]+1

//                               l      r
//mid = (4+6)/2 = index[5] -> 1
//2 < 1 -> NO
//right is moving to index[mid=1]

//                                l   r
//return nums[left] = 0

minRotatedSortedArr([11, 13, 15, 17]); //11 - original was [11,13,15,17] and it was rotated 4 times
//                   l            r
//mid = (0+3)/2 = index[1] -> 13
//17 < 1 -> NO
//right is moving to index[mid=1]

//                   l     r
//return nums[left] = 11
