//1300. Sum of Mutated array closest to target
//given an integer array 'arr' and a target value 'target
//return the integer 'value - suhc that when we change all the integers larger than 'value in the given array to be equal to value
//the sum of the array gets as close as possible to target

//in case of tie
//return the min such integer

//Approach:
//using Binary Search
var sumMutatedArray = (arr, target) => {
    let n = arr.length;
    let left = 0;
    let right = Math.max(...arr);

    let prevSum = Number.MIN_SAFE_INTEGER;
    let prevVal = -1;

    //binary search
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        let currSum = changeSum(mid);
        if (currSum === target) return mid;

        let currDiff = Math.abs(target - currSum);
        let prevDiff = Math.abs(target - prevSum);

        //updating prevSum and prevVal
        if (currDiff < prevDiff || (currDiff === prevDiff && mid < prevVal)) {
            prevSum = currSum;
            prevVal = mid;
        }

        //updating left and right
        if (currSum < target) left = mid + 1;
        else right = mid - 1;
    }

    //changing the array sum to find the optimal array sum
    function changeSum(val) {
        let sum = 0;

        for (let i = 0; i < n; i++) {
            let num = arr[i];

            if (num > val) sum += val;
            else sum += num;
        }
        return sum;
    };

    return prevVal;
}
sumMutatedArray([4,9,3], 10); //3 - when using 3 arr converts to [3,3,3] which sums 9 and that's the optimal answer

sumMutatedArray([2,3,5], 10); //5

sumMutatedArray([60864,25176,27249,21296,20204], 56803); //11361
