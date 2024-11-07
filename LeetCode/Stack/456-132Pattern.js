//456. 132 Pattern
//given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] 
//such that i < j < k and nums[i] < nums[k] < nums[j]
//return true if there is a 132 pattern in nums, otherwise, return false

//Approach:
//using stack
var find123Pattern = (nums) => {
    let stack = [];
    let numK = Number.MIN_SAFE_INTEGER; //-9007

    for (let i = nums.length - 1; i >= 0; i--) {
        //checking updated nums[k] with nums[i] - [i] < [k]
        if (nums[i] < numK) return true;

        //132 pattern - checking [k] < [j]
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            numK = stack.pop();
        }
        
        stack.push(nums[i]);
    }

    return false;
}
find123Pattern([1,2,3,4]); //false
//[1, 2, 3, 4]
//          ^
//stack = [ ] -> [ 4, ]
//third = -9007 < 4

//[1, 2, 3, 4]
//       ^
//stack = [ ] -> [ 4, ]
//third = -9007 < 3 -> nums[k] = 4 > nums[j] = 3 -> not 132 pattern
//stack = [ ] -> [ 4, ] -> [ 4, 3, ] 

//[1, 2, 3, 4]
//    ^
//stack = [ ] -> [ 4, ] -> [ 4, 3, ] 
//third = -9007 < 2 -> nums[k] = 3 > nums[j] = 2 -> not 132 pattern
//stack = [ ] -> [ 4, ] -> [ 4, 3, ] -> [ 4, 3, 2, ] 

//[1, 2, 3, 4]
// ^
//stack = [ ] -> [ 4, ] -> [ 4, 3, ] -> [ 4, 3, 2, ] 
//third = -9007 < 1 -> nums[k] = 2 > nums[j] = 1 -> not 132 pattern
//stack = [ ] -> [ 4, ] -> [ 4, 3, ] -> [ 4, 3, 2, ] -> [ 4, 3, 2, 1 ]
//false

find123Pattern([-1,3,2,0]); //true - [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0]
//[-1, 3, 2, 0]
//           ^
//stack = [ ] -> [ 0, ]
//third = -9007 < 0

//[-1, 3, 2, 0]
//        ^
//stack = [ ] -> [ 0, ]
//third = -9007 < 2 -> nums[k] = 0 < nums[j] = 2 -> 132 pattern
//popping 0 and add 2
//stack = [ ] -> [ 0, ] -> [ 2, ] 
//third = -9007 -> 0

//[-1, 3, 2, 0]
//     ^
//nums[i] = 3 > nums[k] = 2 -> not valid on i and k part
//stack = [ ] -> [ 0, ] -> [ 2, ] 
//third = 0 < 3 -> nums[k] = 2 < nums[j] = 3 -> 132 pattern
//popping 2 and add 3
//stack = [ ] -> [ 0, ] -> [ 2, ] -> [ 3, ]
//third = -9007 -> 0 -> 2

//[-1, 3, 2, 0]
//  ^
//nums[i] = -1 < nums[k] = 2 -> true 
//-> nums[i] = - 1 < nums[k] = 2 < nums[j] = 3
//true

find123Pattern([3,1,4,2]); //true - [1,4,2]
//[3, 1, 4, 2]
//          ^
//stack = [ ] -> [ 2, ]
//third = -9007 < 2

//[3, 1, 4, 2]
//       ^
//stack = [ ] -> [ 2, ]
//third = -9007 < 4 -> nums[k] = 2 < nums[j] = 4 -> 132 pattern
//popping 2 and add 4
//stack = [ ] -> [ 2, ] -> [ 4, ] 
//third = -9007 -> 2

//[3, 1, 4, 2]
//    ^
//nums[i] = 1 < nums[k] = 2 -> true
//-> nums[i] = 1 < nums[k] = 2 < nums[j] = 4
//true
