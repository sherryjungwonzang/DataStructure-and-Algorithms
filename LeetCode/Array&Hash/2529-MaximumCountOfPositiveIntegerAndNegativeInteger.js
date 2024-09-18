//2529. Maximum Count Of Positive Integer And Negative Integer
//given an array nums sorted in non-decreasing order
//return the max between the number of positive integers and the number of negative integers
//in other words, if the number of positive integers in nums is pos
//and the number of negative integers is neg, then return the max of pos and neg
var maxCountOfPosNeg = (nums) => {
    let positive = 0;
    let negative = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) positive++;
        else if (nums[i] < 0) negative++;
    }

    return (positive > negative) ? positive : negative;
}
maxCountOfPosNeg([-2,-1,-1,1,2,3]); //3 
//                ^
//pos = 0 -> 1 -> 2 -> 3
//neg = 0 -> 1 -> 2 -> 3
//pos = neg = 3

maxCountOfPosNeg([-3,-2,-1,0,0,1,2]); //3
//                ^
//pos = 0 -> 1 -> 2 -> 3 -> 4
//neg = 0 -> 1 -> 2 -> 3
//pos > neg -> 4

maxCountOfPosNeg([5,20,66,1314]); //4
//                ^
//pos = 0 -> 1 -> 2 -> 3 -> 4
//neg = 0 
//pos > neg -> 4
