//1995. Count Special Quadruplets
//given a 0-indexed integer array nums
//return the number of distinct quadruplets (a, b, c, d) such that:
//nums[a] + nums[b] + nums[c] == nums[d], and
//a < b < c < d
var specialQuadruplets = (nums) => {
    let count = 0;
    let m = nums.length;

    //iterating
    for (let i = 0; i < m - 3; i++) {
        for (let j = i + 1; j < m - 2; j++) {
            for (let k = j + 1; k < m - 1; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                let quadruplet = nums.slice(k + 1).filter(num => num === sum); //comparing

                count += quadruplet.length;
            }
        }
    }

    return count;
}
specialQuadruplets([1,1,1,3,5]); //4 - 4 quadruplets
//[1, 1, 1, 3, 5]
// i  j  k
//sum = 1 + 1 + 1 = 3
//quadruplet = [3] -> quadruplet = sum
//count = 0 -> 1

//[1, 1, 1, 3, 5]
// i  j     k
//sum = 1 + 1 + 3 = 5
//quadruplet = [5] -> quadruplet = sum
//count = 0 -> 1 -> 2

//[1, 1, 1, 3, 5]
// i     j  k
//sum = 1 + 1 + 3 = 5
//quadruplet = [5] -> quadruplet = sum
//count = 0 -> 1 -> 2 -> 3

//[1, 1, 1, 3, 5]
//    i  j  k
//sum = 1 + 1 + 3 = 5
//quadruplet = [5] -> quadruplet = sum
//count = 0 -> 1 -> 2 -> 3 -> 4

//4

specialQuadruplets([1,2,3,6]); //1 - 1 + 2 + 3 == 6

specialQuadruplets([3,3,6,4,5]); //0
