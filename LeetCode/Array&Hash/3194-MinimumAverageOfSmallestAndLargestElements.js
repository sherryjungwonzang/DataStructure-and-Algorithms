//3194. Minimum Average Of Smallest And Largest Elements
//you have an array of floating point numbers averages which is initially empty
//you are given an array nums of n integers where n is even

//you repeat the following procedure n / 2 times:
//remove the smallest element, minElement, and the largest element maxElement, from nums
//add (minElement + maxElement) / 2 to averages
//return the minimum element in averages
var minAvgSmallestLargest = (nums) => {
    //sorting
    nums.sort((a, b) => a - b);

    let res = [];

    while(nums.length) {
        //removing min and max
        let min = nums.shift();
        let max = nums.pop();

        //calculate avg
        let avg = (min + max) / 2;

        res.push(avg);
    }

    return Math.min(...res);
}
//TC: O(n * logn) - sorting steps
//SC: O(n) - list of averages
minAvgSmallestLargest([7,8,3,4,15,13,4,1]); //5.5
//sorting: [1, 3, 4, 4, 7, 8, 13, 15] -> [3, 4, 4, 7, 8, 13] 
//          ^                      ^
//(1 + 15) / 2 = 8
//res = [8, ]

//sorting: [3, 4, 4, 7, 8, 13] -> [4, 4, 7, 8] 
//          ^               ^
//(3 + 13) / 2 = 8
//res = [8, 8, ]

//sorting: [4, 4, 7, 8] -> [4, 7] 
//          ^        ^
//(4 + 8) / 2 = 6
//res = [8, 8, 6, ]

//[4, 7] 
// ^  ^
//(4 + 7) / 2 = 5.5
//res = [8, 8, 6, 5.5] -> min value is 5.5

minAvgSmallestLargest([1,9,8,3,10,5]); //5.5

minAvgSmallestLargest([1,2,3,7,8,9]); //5.0
