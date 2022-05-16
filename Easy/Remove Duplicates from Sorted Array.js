//Two pointers algorithm
//Using insertIndex and i pointer to compare the value

//if nums[i] = nums[j]: increment j to skip the duplicate
//if nums[i] != nums[j]: duplicate has ended & copy its value to nums[i+1] & i is incremented and repeat the process

//in-place algorithm: algorithm does not use extra space for manipulating the input
//may requires a sma;l though non-constant extra space for its operation

var removeDuplicates = (nums) => {
    let insertIndex = 1;

    for (let i = 1; i < nums.length; i += 1) {
        if (nums [i] !== nums[i-1]) {
            nums[insertIndex] = nums[i];
            insertIndex += 1;
        }
    }
    return insertIndex;
}
