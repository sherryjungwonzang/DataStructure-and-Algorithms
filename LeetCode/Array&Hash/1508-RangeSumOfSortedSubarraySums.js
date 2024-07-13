//1508. Range Sum Of Sorted Subarray Sums
//given the array 'nums' consisting of n positive integeres
//computed the sum of all non-empty continuous subarrays from the array and then sorted them in non-decreasing order
//creating a new array of n * (n + 1) / 2 numbers

//return the sum of the numbers from index left to right - indexed from 1, inclusive, in the new array
//return it modulo 10^9 + 7
var rangeSumSubarray = (nums, n, left, right) => {
    let arr = []; //to collect all sums of subarrays

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;

        for (j = i; j < nums.length; j++) {
            sum += nums[j];
            arr.push(sum);
        }
    }

    //sorting
    arr.sort((a, b) => a - b);

    //calculating from L to R
    let res = 0;
    for (let i = left - 1; i < right; i++) {
        res += arr[i];
    }

    return res % 1000000007;
}
rangeSumSubarray(nums = [1,2,3,4], n = 4, left = 1, right = 5); //13 - [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]

rangeSumSubarray(nums = [1,2,3,4], n = 4, left = 3, right = 4); //6 - [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]

rangeSumSubarray(nums = [1,2,3,4], n = 4, left = 1, right = 10); //50 - [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]
