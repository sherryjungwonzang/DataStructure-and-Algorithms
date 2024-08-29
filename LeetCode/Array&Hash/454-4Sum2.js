//454. 4Sum2
//given four integer arrays 'nums1', 'nums2', 'nums3', 'num4' - all of length n
//return the number of tuples (i, j, k, l) such that:
//0 <= i, j, k, l < n
//nums1[i] + nums2[j] + nums3[k] + nums4[l] === 0

//Approach:
//using map
var fourSum2 = (nums1, nums2, nums3, nums4) => {
    //two arrays to store half sum
    let sum1 = halfSum(nums1, nums2);
    let sum2 = halfSum(nums3, nums4);
    let total = 0;

    //all possible sum of paris in half sum
    function halfSum(x, y) {
        let len = x.length;
        let res = new Map();

        //iterating
        for (let i = 0; i < len; i++) {
            for (let i = 0; j < len; j++) {
                let sum = x[i] + y[j];

                res.set(sum, res.get(sum) + 1 || 1);
            }
        }
        return res;
    };

    //key: sum, val: frequency of sum
    sum1.forEach((val, key) => {
        let offset = 0 - key;

        if (sum2.has(offset)) total += (sum2.get(offset) * sum1.get(key));
    });

    return total;
}
fourSum2(nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]); //2
//1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
//2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

//[1, 2], [-2, -1]
//sum = 1 - 2 || 1 - 1 || 2 - 2 || 2 - 1  = -1, 0, 0, 1
//res = { -1: 1, 0: 2, 1: 1 } 

//[-1, 2], [0, 2]
//sum = -1 + 0 || -1 + 2 || 2 + 0 || 2 + 2  = -1, 1, 2, 4
//res = { -1: 1, 1: 1, 2: 1, 4: 1 }

//         key val
//sum1 = { -1: 1, <--
//          0: 2, <--
//          1: 1 } <--
//sum2 = { -1: 1, 
//          1: 1, 
//          2: 1, 
//          4: 1 }
//total = 0

//offset = 0 - -1 = 1
//sum2 has 1 -> (1 * 1) = 1
//total = 0 -> 1

//offset = 0 + 0 = 0
//sum2 does not have 0 

//offset = 0 - 1 = -1
//sum2 has -1 -> (1 * 1) = 1
//total = 0 -> 1 -> 2

fourSum2(nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]); //1
