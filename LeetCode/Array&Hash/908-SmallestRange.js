//908. Smallest Range
//you are given an integer array nums and an integer k
//in one operation, you can choose any index i where 0 <= i < nums.length 
//and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]
//you can apply this operation at most once for each index i

//the score of nums is the difference between the maximum and minimum elements in nums
//return the minimum score of nums after applying the mentioned operation at most once for each index in it
var smallestRange = (nums, k) => {
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    if (max - min <= 2 * k) return 0;
    
    //need to add k and -k so 2 * k
    return max - min - 2 * k;
}
smallestRange([1,3,6], 3); //0 - 4 - 4 = 0
//min = 1
//max = 6
//max - min = 6 - 1 = 5 >= k
//6 - 1 - 2 * 3 = 0

smallestRange([0, 10], 2); //6 - 8 - 2 = 6
//min = 0
//max = 10
//max - min = 10 - 0 = 10 >= k
//10 - 0 - 2 * 2 = 6

smallestRange([1], 0); //0 - 1 - 1 = 0
