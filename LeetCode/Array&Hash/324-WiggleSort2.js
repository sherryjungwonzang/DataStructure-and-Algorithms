//324. Wiggle Sort2
//given an integer array nums
//reorder it such that nums[0] < nums[1] > nums[2] < nums[3]...

//Approach:
//using sorting
var wiggleSort2 = (nums) => {
    let copy = [...nums]; //create a copy array
    let index = copy.length - 1; //tracking from backwards

    //sorting
    copy.sort((a, b) => a - b);

    //checking even position
    for (let i = 1; i < copy.length; i += 2) {
        nums[i] = copy[index];

        index--;
    }

    //checking odd position
    for (let i = 0; i < copy.length; i += 2) {
        nums[i] = copy[index];

        index--;
    }
}
//TC: O(n)
//SC: O(1)
wiggleSort2(nums = [1,5,1,1,6,4]); //[1,6,1,5,1,4] or [1,4,1,5,1,6] 
//copy after sorting: [1, 1, 1, 4, 5, 6]

//checking even position first
//nums = [1, 5, 1, 1, 6, 4]     ||   copy = [1, 1, 1, 4, 5, 6]
//           ^                                              ^
//5 -> 6 & index--

//nums = [1, 6, 1, 1, 6, 4]     ||   copy = [1, 1, 1, 4, 5, 6]
//                 ^                                     ^
//1 -> 5  & index--

//nums = [1, 6, 1, 5, 6, 4]     ||   copy = [1, 1, 1, 4, 5, 6]
//                       ^                            ^
//4 -> 4  & index--

//checking odd position
//nums = [1, 6, 1, 5, 6, 4]     ||   copy = [1, 1, 1, 4, 5, 6]
//        ^                                        ^
//1 -> 1  & index--

//nums = [1, 6, 1, 5, 6, 4]     ||   copy = [1, 1, 1, 4, 5, 6]
//              ^                               ^
//1 -> 1  & index--

//nums = [1, 6, 1, 5, 6, 4]     ||   copy = [1, 1, 1, 4, 5, 6]
//                    ^                      ^
//6 -> 1  & index--

//nums = [1, 6, 1, 5, 1, 4]

wiggleSort2(nums = [1,3,2,2,3,1]); //[2,3,1,3,1,2]
//copy after sorting: [1, 1, 2, 2, 2, 3, 3]

//checking even position first
//nums = [1, 3, 2, 2, 3, 1]     ||   copy = [1, 1, 2, 2, 3, 3]
//           ^                                              ^
//3 -> 3 & index--

//nums = [1, 3, 2, 2, 3, 1]     ||   copy = [1, 1, 2, 2, 3, 3]
//                 ^                                     ^
//2 -> 3 & index--

//nums = [1, 3, 2, 3, 3, 1]     ||   copy = [1, 1, 2, 2, 3, 3]
//                       ^                            ^
//1 -> 2 & index--

//checking odd position
//nums = [1, 3, 2, 3, 3, 2]     ||   copy = [1, 1, 2, 2, 3, 3]
//        ^                                        ^
//1 -> 2 & index--

//nums = [2, 3, 2, 3, 3, 2]     ||   copy = [1, 1, 2, 2, 3, 3]
//              ^                               ^
//2 -> 1 & index--

//nums = [2, 3, 1, 3, 1, 2]     ||   copy = [1, 1, 2, 2, 3, 3]
//                    ^                      ^
//3 -> 1 & index--

//nums = [2, 3, 1, 3, 1, 2]  
