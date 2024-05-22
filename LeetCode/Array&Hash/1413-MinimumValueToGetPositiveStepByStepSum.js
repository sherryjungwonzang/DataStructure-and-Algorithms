//1413. Minimum Value to Get Positive Step by Step Sum
//given an array of integers 'nums' 
//start with an initial positive value startValue

//in each iteration, you calculate the step by step sum of startValue + elements in 'nums - from left to right
//return the min positive value of startValue - the step by step sum is never less than 1
var minValuePositiveStepSum = (nums) => {
    //variables
    let minSum = 1;
    let sumUp = 0;

    //looping through and updating sumUp and minSum
    for (let num of nums) {
        sumUp += num;

        minSum = Math.min(sumUp, minSum);
    }

    //updating minSum - if it is positive value
    if(minSum > 0) return 1;

    //otherwise - negative value
    return (-1 * minSum + 1);
}
minValuePositiveStepSum([-3, 2, -3, 4, 2]); //5
//[-3, 2, -3, 4, 2]
// ^
//minSum = 1 | -3 | -3 | -4 | -4 | -4
//sumUp = 0 | -3 | -1 | -4 | 0 | 2
//minSum is negative value -> -1 * -4 + 1 = 5

minValuePositiveStepSum([1, 2]); //1 - min start value should be positive
//[1, 2]
// ^
//minSum = 1 | 1 | 1
//sumUp = 0 | 1 | 3
//minSum is positive value -> 1
