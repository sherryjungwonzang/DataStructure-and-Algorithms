//2996. Smallest Missing Integer Greater Than Sequential Prefix Sum
//given a 0-indexed array of integers nums
//a prefix nums[0..i] is sequential if, for all 1 <= j <= i, nums[j] = nums[j - 1] + 1
//in particular, the prefix consisting only of nums[0] is sequential
//return the smallest integer x missing from nums such that x is greater than or equal to the sum of the longest sequential prefix

//Approach:
//using Set
var smallestMissingInteger = (nums) => {
    let set = new Set();

    for (let num of nums) set.add(num);

    let total = nums[0]; //sum all consecutive range
    let i = 1;

    //find consecutive range
    while(i < nums.length && nums[i] === nums[i - 1] + 1) {
        total += nums[i]; //adding to consecutive total
        
        i++;
    }

    //checking missing integer with traversing
    while(set.has(total)) total++;

    return total;
}
//TC: O(n)
//SC: O(n)
smallestMissingInteger([3,4,5,1,12,14,13]); //15
//[3, 4, 5, 1, 12, 14, 13]

//set = [3, 4, 5, 1, 12, 14, 13]
//          ^
//3 + 1 = 4 -> consecutive
//total = 3 -> 7

//set = [3, 4, 5, 1, 12, 14, 13]
//             ^
//4 + 1 = 5 -> consecutive
//total = 3 -> 7 -> 12

//set = [3, 4, 5, 1, 12, 14, 13]        set = [3, 4, 5, 1, 12, 14, 13]         set = [3, 4, 5, 1, 12, 14, 13]          set = [3, 4, 5, 1, 12, 14, 13]
//                ^                                         ^                                          ^                                           ^
//5 + 1 != 1 -> non-consecutive         1 + 1 != 12 -> non-consecutive         12 + 1 != 14 -> non-consecutive         14 + 1 != 13 -> non-consecutive
//total = 3 -> 7 -> 12

//set = [3, 4, 5, 1, 12, 14, 13] 
//                    ^
//checking total is in set or not -> yes
//total = 12 -> 13

//set = [3, 4, 5, 1, 12, 14, 13] 
//                            ^
//checking total is in set or not -> yes
//total = 12 -> 13 -> 14

//set = [3, 4, 5, 1, 12, 14, 13] 
//                       ^
//checking total is in set or not -> yes
//total = 12 -> 13 -> 14 -> 15

//set = [3, 4, 5, 1, 12, 14, 13] 
//                                ^
//checking total is in set or not -> no
//total = 15

smallestMissingInteger([1,2,3,2,5]); //6
