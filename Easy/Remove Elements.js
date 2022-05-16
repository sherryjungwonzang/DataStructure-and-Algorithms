var removeElement = (nums, val) => {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i] //if the current num is different from val, retains it by assigning to index k
            k++; //move to the next index
        }
        //if the current num equals to val, then skip it by checking the next num
    }
    return k
};
