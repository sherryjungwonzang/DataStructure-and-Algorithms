//2261. K Divisible Elements Subarrays
//given an integer array nums and two integers k and p
//return the number of distinct subarrays, which have at most k elements that are divisible by p

//two arrays nums1 and nums2 are said to be distinct if:
//they are of different lengths, or
//there exists at least one index i where nums1[i] != nums2[i]
//a subarray is defined as a non-empty contiguous sequence of elements in an array

//Approach:
//using set
var kDivisible = (nums, k, p) => {
    let set = new Set();
    let res = 0;

    //traversing
    for (let i = 0; i < nums.length; i++) {
        //to track at most k elements
        let count = 0;

        for (let j = i; j < nums.length; j++) {
            //divisible
            if (nums[j] % p === 0) {
                count++;

                //at most k 
                if (count > k) break;
            }

            //creating subarrays
            let curr = nums.slice(i, j + 1).join(',');

            //checking distinct or not
            if (!set.has(curr)) {
                res++;

                set.add(curr);
            }
        }
    }

    return res;
}
kDivisible(nums = [2,3,3,2,2], k = 2, p = 2); //11 - [2], [2,3], [2,3,3], [2,3,3,2], [3], [3,3], [3,3,2], [3,3,2,2], [3,2], [3,2,2], and [2,2]
//[2, 3, 3, 2, 2]                               [2, 3, 3, 2, 2]                             [2, 3, 3, 2, 2]                                 [2, 3, 3, 2, 2]                                     [2, 3, 3, 2, 2]
// i                                             i                                           i                                               i                                                   i
// j                                                j                                               j                                                 j                                                       j
//i = 0, j = 0                                  i = 0, j = 1                                i = 0, j = 2                                    i = 0, j = 3                                        i = 0, j = 4
//2 % 2 = 0 -> divisible                        3 % 2 != 0 -> not divisible                 3 % 2 != 0 -> not divisible                     2 % 2 = 0 -> divisible                              2 % 2 = 0 -> divisible
//count = 0 -> 1                                curr = slice(0, 2) = 2, 3 -> not in set     curr = slice(0, 3) = 2, 3, 3 -> not in set      count = 0 -> 1 -> 2                                 count = 0 -> 1 -> 2 -> 3 > k -> break
//curr = slice(0, 1) = 2 -> not in set          res = 0 -> 1 -> 2                           res = 0 -> 1 -> 2 -> 3                          curr = slice(0, 4) = 2, 3, 3, 2 -> not in set
//res = 0 -> 1                                  set = { '2', '2, 3',  }                     set = { '2', '2, 3', '2, 3, 3', }               res = 0 -> 1 -> 2 -> 3 -> 4
//set = { '2',  }                                                                                                                           set = { '2', '2, 3', '2, 3, 3', '2, 3, 3, 2', }

//[2, 3, 3, 2, 2]                                               [2, 3, 3, 2, 2]                                                         [2, 3, 3, 2, 2]                                                                 [2, 3, 3, 2, 2]
//    i                                                             i                                                                       i                                                                               i
//    j                                                                j                                                                           j                                                                                 j
//i = 1, j = 1                                                  i = 1, j = 2                                                            i = 1, j = 3                                                                    i = 1, j = 4
//2 % 2 = 0 -> divisible                                        3 % 2 != 0 -> not divisible                                             2 % 2 = 0 -> divisible                                                          2 % 2 = 0 -> divisible
//curr = slice(1, 2) = 3 -> not in set                          curr = slice(1, 3) = 3, 3 -> not in set                                 count = 0 -> 1                                                                  count = 0 -> 1 -> 2
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5                              res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6                                   curr = slice(1, 4) = 3, 3, 2 -> not in set                                      curr = slice(1, 5) = 3, 3, 2, 2 -> not in set
//set = { '2', '2, 3', '2, 3, 3', '2, 3, 3, 2', '3',  }         set = { '2', '2, 3', '2, 3, 3', '2, 3, 3, 2', '3', '3, 3',   }          res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7                                      res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
//                                                                                                                                      set = { '2', '2, 3', '2, 3, 3', '2, 3, 3, 2', '3', '3, 3', '3, 3, 2',  }        set = { '2', '2, 3', '2, 3, 3', '2, 3, 3, 2', '3', '3, 3', '3, 3, 2', '3, 3, 2, 2', }

//[2, 3, 3, 2, 2]                       [2, 3, 3, 2, 2]                                                                                     [2, 3, 3, 2, 2]
//       i                                     i                                                                                                    i
//       j                                         j                                                                                                     j
//i = 2, j = 2                          i = 2, j = 3                                                                                        i = 2, j = 4
//3 % 2 != 0 -> not divisible           2 % 2 = 0 -> divisible                                                                              2 % 2 = 0 -> divisible   
//curr = slice(2, 3) = 3 -> in set      count = 0 -> 1                                                                                      count = 0 -> 1 -> 2
//                                      curr = slice(2, 4) = 3, 2 -> not in set                                                             curr = slice(2, 5) = 3, 2, 2 -> not in set 
//                                      res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9                                                res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
//                                      set = { '2', '2, 3', '2, 3, 3', '2, 3, 3, 2', '3', '3, 3', '3, 3, 2', '3, 3, 2, 2', '3, 2', }       set = { '2', '2, 3', '2, 3, 3', '2, 3, 3, 2', '3', '3, 3', '3, 3, 2', '3, 3, 2, 2', '3, 2', '3, 2, 2', }

//[2, 3, 3, 2, 2]                       [2, 3, 3, 2, 2]   
//          i                                     i
//          j                                         j
//i = 3, j = 3                          i = 3, j = 4
//2 % 2 = 0 -> divisible                2 % 2 = 0 -> divisible 
//count = 0 -> 1                        count = 0 -> 1 -> 2
//curr = slice(3, 4) = 2 -> in set      curr = slice(3, 5) = 2, 2 -> not in set 
//                                      res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 11
//                                      set = { '2', '2, 3', '2, 3, 3', '2, 3, 3, 2', '3', '3, 3', '3, 3, 2', '3, 3, 2, 2', '3, 2', '3, 2, 2', '2, 2', }

//[2, 3, 3, 2, 2]  
//             i 
//             j   
//i = 4, j = 4   
//2 % 2 = 0 -> divisible 
//count = 0 -> 1   
//curr = slice(4, 5) = 2 -> in set 

//res = 11

kDivisible(nums = [1,2,3,4], k = 4, p = 1); //10
