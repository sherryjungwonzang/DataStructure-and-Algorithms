//2164. Sort Even And Odd Indices Independently
//given a 0-indexed integer array nums
//rearrange the values of nums according to the following rules:
//sort the values at odd indices of nums in non-increasing order
//for example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after
//the values at odd indices 1 and 3 are sorted in non-increasing order
//sort the values at even indices of nums in non-decreasing order
//ror example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after
//the values at even indices 0 and 2 are sorted in non-decreasing order
//return the array formed after rearranging the values of nums

//Approach:
//using sorting
var sortEvenOdd = (nums) => {
    let even = [];
    let odd = [];
    let res = [];

    //collecting even and odd respectively
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) even.push(nums[i]); //even
        else odd.push(nums[i]); //odd
    }

    //sorting
    even = even.sort((a, b) => a - b);
    odd = odd.sort((a, b) => b - a);

    //filling res from even and odd array
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) res.push(even.shift()); //even
        else res.push(odd.shift()); //odd
    }

    return res;
}
sortEvenOdd([4,1,2,3]); // [2,3,4,1]
//[4, 1, 2, 3]      || [4, 1, 2, 3] 
// ^     ^                 ^     ^
//even = [4, 2]         odd = [1, 3]

//sorting: even = [2, 4]
//         odd = [3, 1]

//[4, 1, 2, 3] 
// ^            -> 4 % 2 = 0: even
//res = [2, ]

//[4, 1, 2, 3] 
//    ^            -> 1 % 2 != 0: odd
//res = [2, 3, ]

//[4, 1, 2, 3] 
//       ^          -> 2 % 2 = 0: even
//res = [2, 3, 4, ]

//[4, 1, 2, 3] 
//          ^       -> 3 % 2 != 0: odd
//res = [ 2, 3, 4, 1 ]

sortEvenOdd([2,1]); //[2,1]
