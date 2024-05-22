//31. Next Permutation
//a permutation of an array of integers is an arrangement of its members into a sequence or linear order
//Ex: arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1]

//the next permutation of an array of integers is the next lexicographically greater permutation of its integer
//more formally, if all the permutations of the array are sorted in one container - according to their lexicographical order
//then the next permutation of that array is the permutation that follows it in the sorted container
//if such arrangement is not possible, the array must by rearranged as the lowest possible order

//given an array of integers 'nums' 
//find the next permutation of nums
//the replacement must be in place and use only constant extra memory

//Approach:
//using brute-force approach & two pointers
var nextPermutation = (nums) => {
    let i = nums.length - 2;

    //to find the suffix that is being smaller than the previous one from backwards
    while (nums[i] >= nums[i + 1]) {
        i--;
    }

    //swapping process - when find the suffix
    if (i >= 0) {
        let j = nums.length - 1;

        while(nums[i] >= nums[j]) {
            j--;
        }

        //otherwise - swapping
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    //reverse process - if there is no suffix
    let left = i + 1;
    let right = nums.length - 1;

    while(left < right) {
        //keep swapping
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
} 
nextPermutation([1, 2, 3]); //[1, 3, 2]

nextPermutation([3, 2, 1]); //[1, 2, 3]

nextPermutation([1, 1, 5]); //[1, 5, 1]
