//922. Sort Array By Parity2
//given an array of integers 'nums'
//half of the integers in nums are odd and the other half are even
//sort the array so that whatever nums[i] is odd, i is odd and whenever nums[i] is even, i is even
//return any answer array that satisfies this condition

//Approach:
//using array with checking odd and even
var parityArraySorting2 = (nums) => {
    let res = [];
    let evenIdx = 0;
    let oddIdx = 1;

    for (let i = 0; i < nums.length; i++) {
        //even
        if (nums[i] % 2 === 0) {
            res[evenIdx] = nums[i];
            evenIdx = evenIdx + 2;
        } else { //odd
            res[oddIdx] = nums[i];
            oddIdx = oddIdx + 2;
        }
    }
    return res;
}
parityArraySorting2([4,2,5,7]); //[4,5,2,7]
//[4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted

//evenIdx = 0
//oddIdx = 1
//[4, 2, 5, 7]
// ^
//even
//res = [ 4          ]
//        0  1  2  3 
//evenIdx = 0 -> 2
//oddIdx = 1

//[4, 2, 5, 7]
//    ^
//even
//evenIdx = 0 -> 2
//oddIdx = 1
//res = [ 4     2    ]
//        0  1  2  3 

//[4, 2, 5, 7]
//       ^
//odd
//evenIdx = 0 -> 2
//oddIdx = 1 
//res = [ 4  5  2    ]
//        0  1  2  3 
//evenIdx = 0 -> 2
//oddIdx = 1 -> 3

//[4, 2, 5, 7]
//          ^
//odd
//evenIdx = 0 -> 2
//oddIdx = 1 -> 3
//res = [ 4  5  2  7 ]
//        0  1  2  3 

parityArraySorting2([2,3]); //[2,3]
