//1760. Minimum Limit of balls in a bag
//given an integer array 'nums' - where the i_th bag contains nums[i] balls
//also given an integer 'maxOperation'

//can perform the following operation at most maxOperations times:
//take any bag of balls and divide it into two new bags with a positive number of balls
//for example, a bag og 5 balls can become two new bags of 1 and 4 balls or two new bags of 2 and 3 balls

//your penalty is the max number of balls in a bag
//you want to minimize your penalty after the operations
//return the min possible penalty after performing the operations

//Approach:
//using binary search
//forEach(): executes a provided function once for each array element
var minLimitBallsInBag = (nums, maxOperations) => {
    //two pointers
    let low = 1;
    let high = Math.max(...nums);

    //binary search
    while (low <= high) {
        let mid = Math.floor((high - low) / 2 + low);
        let count = 0;

        nums.forEach(n => count += Math.floor((n - 1) / mid));

        if (count <= maxOperations) high = mid - 1;
        else low = mid + 1;
    }

    return low;
}
minLimitBallsInBag([9], 2); //3
//- Divide the bag with 9 balls into two bags of sizes 6 and 3. [9] -> [6,3]
//- Divide the bag with 6 balls into two bags of sizes 3 and 3. [6,3] -> [3,3,3]
//The bag with the most number of balls has 3 balls, so your penalty is 3 and you should return 3

minLimitBallsInBag([2,4,8,2], 4); //2
//- Divide the bag with 8 balls into two bags of sizes 4 and 4. [2,4,8,2] -> [2,4,4,4,2]
//- Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,4,4,4,2] -> [2,2,2,4,4,2]
//- Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2,4,4,2] -> [2,2,2,2,2,4,2]
//- Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2,2,2,4,2] -> [2,2,2,2,2,2,2,2]
//The bag with the most number of balls has 2 balls, so your penalty is 2, and you should return 2

//[2, 4, 8, 2]
//low=1 high=8 mid=4
//count=0
//(2-1)/4=0 | (4-1)/4=0 | (8-1)/4=1 | (2-1)/4=0
//count=0 -> 1

//low=1 high=3 mid=2
//(2-1)/2=0 | (4-1)/2=1 | (8-1)/2=3 | (2-1)/2=0
//count=0 -> 4

//low=1 high=1 mid=1
//(2-1)/1=1 | (4-1)/1=3 | (8-1)/1=7 | (2-1)/1=1
//count=0 -> 12

//low=2 high=1 mid=2
//low = 2


