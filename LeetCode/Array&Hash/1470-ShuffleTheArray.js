//1470. Shuffle The Array
//given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn]
//return the array in the form [x1,y1,x2,y2,...,xn,yn]
var shuffleArray = (nums, n) => {
    let res = [];
    
    for (i = 0; i < n; i++) res.push(nums[i], nums[i + n]);

    return res;
}
shuffleArray(nums = [2,5,1,3,4,7], n = 3); //[2,3,5,4,1,7] 
//[2, 5, 1, 3, 4, 7]
// ^        ^
//i = 0 || i = 0 + 3 = 3
//res = [ 2, 3 ]

//[2, 5, 1, 3, 4, 7]
//    ^        ^
//i = 1 || i = 1 + 3 = 4
//res = [ 2, 3, 5, 4 ]

//[2, 5, 1, 3, 4, 7]
//       ^        ^
//i = 2 || i = 2 + 3 = 5
//res = [ 2, 3, 5, 4, 1, 7 ]

shuffleArray(nums = [1,2,3,4,4,3,2,1], n = 4); //[1,4,2,3,3,2,4,1]

shuffleArray(nums = [1,1,2,2], n = 2); //[1,2,1,2]
