//1342. Number Of Steps To Reduce A Number To Zero
//given an integer num
//return the number of steps to reduct it to zero
//in one step, if the current number is even, you have to divide it by 2
//other you have to subtract 1 from it
var numOfSteps = (num) => {
    let step = 0;

    while (num !== 0) {
        //checking odd or even
        num % 2 === 0 ? num /= 2 : num--;

        step++;
    }

    return step;
}
numOfSteps(14); //6
//n = 14 % 2 = 0 -> even => 14 / 2 = 7
//steps = 0 -> 1

//7 % 2 != 0 -> odd -> 7 - 1 = 6
//steps = 0 -> 1 -> 2

//6 % 2 = 0 -> even => 6 / 2 = 3
//steps = 0 -> 1 -> 2 -> 3

//3 % 2 != 0 -> odd -> 3 - 1 = 2
//steps = 0 -> 1 -> 2 -> 3 -> 4

//2 % 2 = 0 -> even => 2 / 2 = 1
//steps = 0 -> 1 -> 2 -> 3 -> 4 -> 5

//1 % 2 != 0 -> odd -> 1 - 1 = 0
//steps = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6

numOfSteps(8); //4
//n = 8 % 2 = 0 -> even => 8 / 2 = 4
//steps = 0 -> 1

//4 % 2 = 0 -> even => 4 / 2 = 2
//steps = 0 -> 1 -> 2

//2 % 2 = 0 -> even => 2 / 2 = 1
//steps = 0 -> 1 -> 2 -> 3

//1 % 2 != 0 -> odd -> 1 - 1 = 0
//steps = 0 -> 1 -> 2 -> 3 -> 4

numOfSteps(123); //12
