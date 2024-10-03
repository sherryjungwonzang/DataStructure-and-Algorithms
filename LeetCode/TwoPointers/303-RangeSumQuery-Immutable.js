//303. Range Sum Query - Immutable
//given an integer array 'nums'
//handle multiqle queries of the following type:
//calculate the sum of the elements of nums between indices left and right inclusive where left <= right
//Implement the NumArray class:
//NumArray(int[] nums) Initializes the object with the integer array nums
//int sumRange(int left, int right) 
//returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right])

//Approach:
//using two pointers
var NumArray = function(nums) {
    let total = 0;
    this.accumulatedSum = [];

    for (let i = 0; i < nums.length; i++) {
        //calculating accumulated sum
        total += nums[i];

        this.accumulatedSum.push(total);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    
    return this.accumulatedSum[right] - (left > 0 ? this.accumulatedSum[left - 1] : 0);
};

NumArray([[-2, 0, 3, -5, 2, -1]]) //(left: 0, right: 2)
//[-2, 0, 3, -5, 2, -1]
// ^
//accumulatedSum = [ -2,  ]

//[-2, 0, 3, -5, 2, -1]
//     ^
//-2 + 0 = -2
//accumulatedSum = [ -2, -2,  ]

//[-2, 0, 3, -5, 2, -1]
//        ^
//-2 + 0 + 3 = 1
//accumulatedSum = [ -2, -2, 1,  ]

//[-2, 0, 3, -5, 2, -1]
//            ^
//-2 + 0 + 3 -5 = -4
//accumulatedSum = [ -2, -2, 1, -4,  ]

//[-2, 0, 3, -5, 2, -1]
//               ^
//-2 + 0 + 3 -5 + 2 = -2
//accumulatedSum = [ -2, -2, 1, -4, -2, ]

//[-2, 0, 3, -5, 2, -1]
//                   ^
//-2 + 0 + 3 -5 + 2 - 1 = -3
//accumulatedSum = [ -2, -2, 1, -4, -2, -3 ]

//(0, 2)
//sum[right] = [2] = 1
//left = 0 < 0 -> 0

//1 - 0 = 1

NumArray([[-2, 0, 3, -5, 2, -1]]) //(left: 2, right: 5)
//[-2, 0, 3, -5, 2, -1]
// ^
//accumulatedSum = [ -2,  ]

//[-2, 0, 3, -5, 2, -1]
//     ^
//-2 + 0 = -2
//accumulatedSum = [ -2, -2,  ]

//[-2, 0, 3, -5, 2, -1]
//        ^
//-2 + 0 + 3 = 1
//accumulatedSum = [ -2, -2, 1,  ]

//[-2, 0, 3, -5, 2, -1]
//            ^
//-2 + 0 + 3 -5 = -4
//accumulatedSum = [ -2, -2, 1, -4,  ]

//[-2, 0, 3, -5, 2, -1]
//               ^
//-2 + 0 + 3 -5 + 2 = -2
//accumulatedSum = [ -2, -2, 1, -4, -2, ]

//[-2, 0, 3, -5, 2, -1]
//                   ^
//-2 + 0 + 3 -5 + 2 - 1 = -3
//accumulatedSum = [ -2, -2, 1, -4, -2, -3 ]

//(2, 5)
//sum[right] = [5] = -3
//left = 2 > 0 -> sum[left - 1] = [1] = -2

//-3 - -2 = -1
