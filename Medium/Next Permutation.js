//Next Permutation
//permutation of an array of integers is an arrangement of its members into a sequence or linear order


//Approach:
//1. Find the first decresing index moving from end to start
//2. Swap the decreasing index num with the next large num to its right
//3. Reverse/sort nums to the right
//4. If there is no next permutation reverse the array
var nextPermutation = (nums) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            const large = nextLarge(i);
            swap(i, large);
            reverse(i + 1);
            return;
        }
    }

    //if there is no next permutation, reverse the arr
    nums.reverse();

    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    function reverse(idx) {
        let start = idx;
        let end = nums.length - 1;

        while(start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }

    function nextLarge(idx) {
        for (let i = nums.length - 1; i > idx; i--) {
            if (nums[i] > nums[idx]) return i;
        }
    }
};

//another solution
var nextPermutation = (nums) => {
    const len = nums.length - 1;

    //stores the first and second index for swapping
    let index;
    let secIndex;

    //get the first index
    for (index = len - 1; index >= 0; index--) {
        if (nums[index] < nums[index + 1]) break;
    }

    //if we dont find the first index, there is no second index
    //just reverse nums arr
    if (index < 0) {
        nums.reverse();
    } else {
        //find the second index from last
        for (secIndex = len; secIndex > index; secIndex--) {
            if (nums[secIndex] > nums[index]) break;
        }

        //swap values of index and secondindex
        [nums[index], nums[secIndex]] = [nums[secIndex], nums[index]];

        //reverse values after the index value till last
        let low = index + 1;
        let high = len;

        while(low < high) {
            [nums[low], nums[high]] = [nums[high], nums[low]];
            low++;
            high--;
        }
    }
    return nums;
}
//Time Complexity: O(n)
//Space Complexity: O(1)
