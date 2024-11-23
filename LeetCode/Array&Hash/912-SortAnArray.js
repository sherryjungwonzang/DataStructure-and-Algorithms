//912. Sort An Array
//given an array of integers nums
//sort the array in ascending order and return it
//you must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible

//Approach:
//using merge sort
var sortAnArray = (nums) => {
    mergeSort(nums, 0, nums.length - 1);

    //merge sort
    function mergeSort(nums, left, right) {
        //base case
        if (left >= right) return;

        let mid = Math.floor((left + right) / 2);

        //left and right side
        mergeSort(nums, left, mid);
        mergeSort(nums, mid + 1, right);

        //merging
        merge(nums, left, mid, right);
    };

    //merging
    function merge(nums, left, mid, right) {
        let leftLen = mid - left + 1;
        let rightLen = right - mid;
        let leftArr = new Array(leftLen);
        let rightArr = new Array(rightLen);

        for (let i = 0; i < leftLen; i++) leftArr[i] = nums[left + i];
        for (let i = 0; i < rightLen; i++) rightArr[i] = nums[mid + 1 + i];

        let i = 0;
        let j = 0;
        let k = left;

        while (i < leftLen && j < rightLen) {
            if (leftArr[i] <= rightArr[j]) nums[k++] = leftArr[i++];
            else nums[k++] = rightArr[j++];
        } 

        while (i < leftLen) nums[k++] = leftArr[i++];

        while (i < rightLen) nums[k++] = rightArr[j++];
    }

    return nums;
}
sortAnArray([5,2,3,1]); //[1,2,3,5]

sortAnArray([5,1,1,2,0,0]); //[0,0,1,1,2,5]
