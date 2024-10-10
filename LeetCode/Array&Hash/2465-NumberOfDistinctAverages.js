//2465. Number Of Distinct Averages
//given a 0-indexed integer array nums of even length

//as long as nums is not empty, you must repetitively:
//find the minimum number in nums and remove it
//find the maximum number in nums and remove it
//calculate the average of the two removed numbers
//the average of two numbers a and b is (a + b) / 2

//for example, the average of 2 and 3 is (2 + 3) / 2 = 2.5
//return the number of distinct averages calculated using the above process

//Approach:
//using sorting
var distinctAverage = (nums) => {
    //sorting
    nums.sort((a, b) => a - b);

    let set = new Set();
    let m = nums.length;
    let i = 0;

    while (i < m) {
        let avg = (nums[i] + nums[m - 1 - i]) / 2;

        //adding to set
        set.add(avg);

        i++;
    }

    return set.size;
}
distinctAverage([4,1,4,0,3,5]); //2
//sorting: [0, 1, 3, 4, 4, 5]
//          ^              ^
//avg = (0 + 5) / 2 = 2.5
//set = { 2.5, }

//sorting: [0, 1, 3, 4, 4, 5]
//             ^        ^
//avg = (1 + 4) / 2 = 2.5
//set = { 2.5, } -> already 2.5 in the set

//sorting: [0, 1, 3, 4, 4, 5]
//                ^  ^
//avg = (3 + 4) / 2 = 3.5
//set = { 2.5, 3,5 }
//2

distinctAverage([1,100]); //1
