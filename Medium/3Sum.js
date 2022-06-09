//3Sum
//given an integer array nums
//return all triplets: i-th element which forms a triplet j-th and k-th elements
//[nums[i], nums[j], nums[k]]
//i != j, i != k, j != k
//nums[i]+nums[j]+numns[k] == 0
const threeSum  = (nums) => {
    nums.sort((a, b) => a - b);
    
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let start = i + 1;
        let end = nums.length - 1;

        while(start < end ){
            let sum = nums[i] + nums[start] + nums[end];
            if (sum === 0) {
                res.push([nums[i], nums[start], nums[end]]);
                start++;

                while(nums[start] == nums[start - 1] && start < end) {
                    start++;
                }
            } else if (sum < 0) {
                start++;
            } else {
                end--;
            }
        }
    }
    return res;
}
