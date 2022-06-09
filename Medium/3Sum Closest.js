//3Sum Closest
//given an integer array nums of length n and an integer target
//find three integers in nums such that the sum is closet to target
//return the sum of the three integers

var threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a - b);

    let i = 0;
    let start;
    let end;
    let sum;
    let diff = Infinity;
    let res;

    while(i < nums.length) {
        start = i + 1;
        end = nums.length - 1;

        while(start < end) {
            sum = nums[start] + nums[end] + nums[i];
            if(sum === target) return target;

            if (Math.abs(target - sum) < diff) {
                diff = Math.abs(target - sum);
                res = sum;
            }

            if (sum > target) {
                end -= 1;
            } else if (sum < target) {
                start += 1;
            }
        }
        i++;
    }
    return res;
}
