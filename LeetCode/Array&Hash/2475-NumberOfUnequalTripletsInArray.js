//2475. Number Of Unequal Triplets In Array
//given a 0-indexed array of positive integers nums
//find the number of triplets (i, j, k) that meet the following conditions:
//0 <= i < j < k < nums.length
//nums[i], nums[j], and nums[k] are pairwise distinct
//in other words, nums[i] != nums[j], nums[i] != nums[k], and nums[j] != nums[k]
//return the number of triplets that meet the conditions
var unequalTriplets = (nums) => {
    let m = nums.length;
    let res = 0;

    //using three loops
    for (let i = 0; i < m - 2; i++) {
        for (let j = i + 1; j < m - 1; j++) {
            for (let k = j + 1; k < m; k++) {
                //unequal triplets
                if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) res++;
            }
        }
    }    
    
    return res
}
unequalTriplets([4,4,2,4,3]); //3 - (0, 2, 4), (1, 2, 4), (2, 3, 4)
//[4, 4, 2, 4, 3]
// i  j  k
//(4, 4, 2): i = j

//[4, 4, 2, 4, 3]
// i  j     k
//(4, 4, 4): i = j & j = k & i = k

//[4, 4, 2, 4, 3]
// i  j        k
//(4, 4, 3): i = j 

//[4, 4, 2, 4, 3]
// i     j  k
//(4, 2, 4): i = k 

//[4, 4, 2, 4, 3]
// i     j     k
//(4, 2, 3): i != j & j != k & i != k
//res = 0 -> 1 

//[4, 4, 2, 4, 3]
// i        j  k
//(4, 4, 3): i = j

//[4, 4, 2, 4, 3]
//    i  j  k
//(4, 2, 4): i = k

//[4, 4, 2, 4, 3]
//    i  j     k
//(4, 2, 3): i != j & j != k & i != k
//res = 0 -> 1 -> 2

//[4, 4, 2, 4, 3]
//       i  j  k
//(2, 4, 3): i != j & j != k & i != k
//res = 0 -> 1 -> 2 -> 3

unequalTriplets([1,1,1,1,1]); //0



