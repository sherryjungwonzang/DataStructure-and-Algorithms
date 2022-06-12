//Summary Ranges
//given a sorted unique integer array: nums
//range[a, b] is the set of all integers from a to b
//return the smallest sorted list of ranges-cover all numbers in the array exactly

/*
ex:
input=[0,1,2,4,5,7] -> output=[0->2, 4->5, 7]
input=[0,2,3,4,6,8,9] -> output=[0,2->4, 6->8, 9]
*/

function summaryRanges(nums) {
    var res = [];
    for (var i = 0, left = nums[0]; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            res.push(left === nums[i] ? '' + nums[i] : left + '->' + nums[i]);
            left = nums[i + 1];
        }
    }
    return res;
}

//another solution
var summaryRanges = (nums) => {
    let list = [];

    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];
        while(i + 1 < nums.length && nums[i + 1] - nums[i] == 1){
            i++;
        }
        if (nums[i] != start) {
            list.push(start + "->" + nums[i]);
        } else {
            list.push(start + "");
        }
    }
    return list;
}


//another solution
var summaryRanges = (nums) => {
    let res = [];

    let i = 0;
    while(i < nums.length) {
        let cur = i;
        let next = i + 1;

        while(nums[cur] + 1 === nums[next]) {
            cur++;
            next++;
        }

        if (cur > i) {
            let str = `${nums[i]}->${nums[next - 1]}`;
            res.push(str);
            i = cur + 1;
        } else {
            res.push(nums[i].toString());
            i++;
        }
    }
    return res;
}
