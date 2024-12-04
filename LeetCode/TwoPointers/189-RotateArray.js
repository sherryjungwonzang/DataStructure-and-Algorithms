//189. Rotate Array
//Given an integer array nums, 
//rotate the array to the right by k steps, where k is non-negative

//Approach:
//using two pointers
var rotateArray = (nums, k) => {
    k %= nums.length;

    //reverse - two pointers
    function reverse (left, right) {
        while (left < right) {
            let temp = nums[left];
            
            //reversing
            nums[left] = nums[right];
            nums[right] = temp;

            //move
            left++;
            right--;
        }
    }

    //reversing the whole array
    reverse(0, nums.length - 1);

    //reversing the first part until k
    reverse(0, k - 1);

    //reversing the second part after k
    reverse(k, nums.length - 1);
}
rotateArray(nums = [1,2,3,4,5,6,7], k = 3); //[5,6,7,1,2,3,4]
//k = 3 % 7 = 3

//reverse the whole array                                               reverse first part until k                                      reverse second part from k to the end
//[1, 2, 3, 4, 5, 6, 7]                                                 [7, 6, 5, 4, 3, 2, 1]                                           [5, 6, 7, 4, 3, 2, 1]
// L                 R   -> temp = 1                                     L     R   -> temp = 1                                                    L        R     -> temp = 4          
//                          L = 7                                                     L = 5                                                                         L = 1
//                          R = 1       [7, 2, 3, 4, 5, 6, 1]                         R = 7       [5, 6, 7, 4, 3, 2, 1]                                             R = 4       [5, 6, 7, 1, 3, 2, 4]

//[1, 2, 3, 4, 5, 6, 7]                                                 [7, 6, 5, 4, 3, 2, 1]                                            [5, 6, 7, 4, 3, 2, 1]
//    L           R      -> temp = 2                                        LR     -> temp = 6                                                        L  R       -> temp = 3
//                          L = 6                                                     L = 6                                                                         L = 2
//                          R = 2       [7, 6, 3, 4, 5, 2, 1]                         R = 6       [5, 6, 7, 4, 3, 2, 1]                                             R = 3       [5, 6, 7, 1, 2, 3, 4]

//[1, 2, 3, 4, 5, 6, 7]
//       L     R        -> temp = 3
//                          L = 5
//                          R = 3       [7, 6, 5, 4, 3, 2, 1]

//[1, 2, 3, 4, 5, 6, 7]
//          LR          -> temp = 4
//                          L = 4
//                          R = 4       [7, 6, 5, 4, 3, 2, 1]

//[5, 6, 7, 1, 2, 3, 4]


rotateArray(nums = [-1,-100,3,99], k = 2); //[3,99,-1,-100]
