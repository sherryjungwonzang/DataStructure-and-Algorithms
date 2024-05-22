//238. Product of Array except Self
//given an integer array 'nums'
//return an array 'answer' such that answer[i] is equal to the product of all the elements of nums except nums[i]
//the product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer

//Approach:
//loop through the nums array in both forwards and backwards
//calculate the product of each index with place holder
//use two arrays to computate the answer into res array
var productArrayExceptSelf = (nums) => {
    let forwardArr = [];
    let start = 1; //placeholder for forwards

    //loop through forwards
    for (let i = 0; i < nums.length; i++) {
        forwardArr.push(start);
        start = start * nums[i];
    }

    let res = [];
    let start2 = 1; //placeholder for backwards

    //loop through backwards
    for (let i = nums.length - 1; i >= 0; i--) {
        res.unshift(start2 * forwardArr[i]); //need to add from the backwards - unshift() function
        start2 = start2 * nums[i];
    }
    return res;
}
//TC: O(2n) -> O(n)
//SC: O(n + m) - n is the array of forwards array and m is the array of backwards array
productArrayExceptSelf([1,2,3,4]); //[24, 12, 8, 6]
//start = 1
//forwardArr = [1, ] | start = 1 * 1
//forwardArr = [1, 1, ] | start = 1 * 2
//forwardArr = [1, 1, 2, ] | start = 2 * 3
//forwardArr = [1, 1, 2, 6] | start = 2 * 3

//start2 = 1
//res = [ ,6] - 6 * 1 | start2 = 1 * 4 = 4
//res = [  ,8 ,6] - 4 * 2 | start2 = 4 * 3 = 12
//res = [ ,12 ,8 ,6] - 12 * 1 | start2 = 12 * 2 = 24
//res = [24 ,12 ,8 ,6] - 24 * 1 | start2 = 12 * 2 = 24

productArrayExceptSelf([-1,1,0,-3,3]); //[0,0,9,0,0]
//forwardArr = [1, ] - start=1
//forwardArr = [1, -1, ] - 1 * -1
//forwardArr = [1, -1, -1, ] - -1 * 1
//forwardArr = [1, -1, -1, 0, ] - -1 * 0 
//forwardArr = [1, -1, -1, 0, 0] - 0 * -3 

//res = [ ,0] - 0 * 1 | start2=1
//res = [  0, 0] - 3 * 0  | start2 = 1 * 3 = 3
//res = [  9, 0, 0] - -9 * -1  | start2 = 3 * -3 = -9
//res = [  0, 9, 0, 0] - 0 * -1  | start2 = -9 * 0 = 0
//res = [ 0, 0, 9, 0, 0] - 0 * -1  | start2 = 0 * 1 = 0


//Approach:
//for O(1) space complexity - only having one array to store
//initialize the empty array as res instead of using forwards array
//push start into res
//instead of folding array, in the backwards array loop, need to calculate with start2 placehpder and res[i] array
var productArrayExceptSelf2 = (nums) => {
    let res = [];
    let start = 1;

    for (let i = 0; i < nums.length; i++) {
        res.push(start);
        start = start * nums[i];
    }

    let start2 = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = start2 * res[i];
        start2 = start2 * nums[i];
    }
    return res;
}
//TC: O(n)
//SC: O(1) 
