//575. Distribute Candies
//alice has n candies, where the ith candy is of type candyType[i]
//alice noticed that she started to gain weight, so she visited a doctor
//the doctor advised Alice to only eat n / 2 of the candies she has (n is always even
//alice likes her candies very much
//and she wants to eat the maximum number of different types of candies while still following the doctor's advice

//given the integer array candyType of length n
//return the maximum number of different types of candies she can eat if she only eats n / 2 of them

//Approach:
//using Set
var distributeCandies = (candyType) => {
    //need to check unique candy types -> Set()
    return Math.min(candyType.length / 2, new Set(candyType).size);
}
distributeCandies([1,1,2,2,3,3]); //3 - Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type
//set: {1, 2, 3} = 3
//length / 2 = 3
//min (3, 3) = 3

distributeCandies([1,1,2,3]); //2 - Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types
//set: {1, 2, 3} = 3
//length / 2 = 2
//min (3, 2) = 2

distributeCandies([6,6,6,6]); //1 - Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type
//set: {6} = 1
//length / 2 = 2
//min (1, 2) = 1
