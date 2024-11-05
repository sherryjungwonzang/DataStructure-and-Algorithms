//3095. Shortest Subarray With OR At Least K
//given an array nums of non-negative integers and an integer k
//an array is called special if the bitwise OR of all of its elements is at least k
//return the length of the shortest special non-empty subarray of nums
//or return -1 if no special subarray exists

//Approach:
//using OR bitwise operation
var shortestSubarrayOR = (nums, k) => {
    let min = Infinity;

    //checking all paris
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];

        for (let j = i; j < nums.length; j++) {
            //OR bitwise operation
            curr |= nums[j];

            //shortest subarray
            if (curr >= k && min > j - i + 1) min = j - i + 1;
        }
    }

    return min === Infinity ? -1 : min;
}
shortestSubarrayOR(nums = [1,2,3], k = 2); //1
//[1, 2, 3]                                         [1, 2, 3]                                           [1, 2, 3]
// i                                                 i                                                   i
// j                                                    j                                                      j
//curr = 1 -> 1 | 1 = 1                             curr = 1 -> 1 | 2 = 3                               curr = 3 -> 3 | 3 = 3
//curr < k: F && Infinity > 0 - 0 + 1: T = F        curr > k: T && Infinity > 1 - 0 + 1: T = T          curr > k: T && 2 < 2 - 0 + 1: F = F
//min = Infi -> Infi                                min = Infi -> Infi -> 2                             min = Infi -> Infi -> 2 -> 2                

//[1, 2, 3]                                         [1, 2, 3]                                           
//    i                                                 i  
//    j                                                    j
//curr = 2 -> 2 | 2 = 2                             curr = 2 -> 2 | 3 = 3
//curr = k: T && 2 > 1 - 1 + 1: T = F               curr > k: T && 1 < 2 - 1 + 1: F = F
//min = Infi -> Infi -> 2 -> 2 -> 1                 min = Infi -> Infi -> 2 -> 2 -> 1 -> 1

//[1, 2, 3]                                 
//       i      
//       j       
//curr = 3 -> 3 | 3 = 3          
//curr > k: T && 1 = 2 - 2 + 1: F = F  
//min = Infi -> Infi -> 2 -> 2 -> 1 -> 1 -> 1

shortestSubarrayOR(nums = [2,1,8], k = 10); //3
//[2, 1, 8]                                         [2, 1, 8]                                           [2, 1, 8]
// i                                                 i                                                   i
// j                                                    j                                                      j
//curr = 2 -> 2 | 2 = 2                             curr = 2 -> 2 | 1 = 3                               curr = 3 -> 3 | 8 = 11
//curr < k: F && Infinity > 0 - 0 + 1: T = F        curr < k: F && Infinity > 1 - 0 + 1: T = F          curr > k: T && Infi > 2 - 0 + 1: T = T
//min = Infi -> Infi                                min = Infi -> Infi -> Infi                          min = Infi -> Infi -> Infi -> 3   

//[2, 1, 8]                                         [2, 1, 8] 
//    i                                                 i   
//    j                                                    j      
//curr = 1 -> 11 | 1 = 1                            curr = 1 -> 1 | 8 = 9     
//curr < k: F && 3 > 0 - 0 + 1: T = F               curr < k: F && 3 > 2 - 1 + 1: T = F     
//min = Infi -> Infi -> Infi -> 3 -> 3              min = Infi -> Infi -> Infi -> 3 -> 3 -> 3

shortestSubarrayOR(nums = [1,2], k = 0); //1
