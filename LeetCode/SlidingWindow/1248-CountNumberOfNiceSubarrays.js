//1248. Count Number of Nice subarrays
//given an array of integers 'nums' and an integer 'k'
//a continuous subarray is called nice if there are k odd numbers on it
//return the number of nice sub-arrays\

//Approach:
//using sliding windows and two pointers
var niceSubarrays = (nums, k) => {
    let res = 0;
    let odds = 0; //to track num of odds and k
    let count = 0; //counting the subarrays

    //traversing to find subarrays of odds
    let start = 0;
    for (let end = 0; end < nums.length; end++) {
        if (nums[end] % 2 === 1) { //odd
            odds += 1;
            count = 0;
        }

        //found subarrays
        while (odds === k && start <= end) {
            if (nums[start] % 2 === 1) odds -= 1; //check start pointer is odd or not
            start++;
            count++; //subarrays
        }
        res += count;
    }
    return res;
}
//TC: O(n)
//SC: O(1)
niceSubarrays([1,1,2,1,1], 3); //2
//the only sub-arrays with 3 odd numbers are [1,1,2,1,] and [1,2,1,1]

niceSubarrays([2,4,6], 1); //0 - there is no odd numbers in the array

niceSubarrays([2,2,2,1,2,2,1,2,2,2], 2); //16
