//1431. Kids With The Greatest Number Of Candies
//there are n kids with candies
//given an integer array candies, where each candies[i] represents the number of candies the ith kid has
//and an integer extraCandies, denoting the number of extra candies that you have
//return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies
//they will have the greatest number of candies among all the kids, or false otherwise
//note that multiple kids can have the greatest number of candies
var kidsWithCandies = (candies, extraCandies) => {
    let max = Math.max(...candies);
    let res = [];

    for (let i = 0; i < candies.length; i++) {
        //greatest number of candies
        if (candies[i] + extraCandies >= max) res.push(true);
        else res.push(false);
    }

    return res;
}
kidsWithCandies(candies = [2,3,5,1,3], extraCandies = 3); //[true,true,true,false,true] 
//max = 5

//[2, 3, 5, 1, 3], extraCandies = 3
// ^
//2 + 3 = 5 = max -> res = [ true, ]

//[2, 3, 5, 1, 3], extraCandies = 3
//    ^
//3 + 3 = 6 > max -> res = [ true, true, ]

//[2, 3, 5, 1, 3], extraCandies = 3
//       ^
//5 + 3 = 8 > max -> res = [ true, true, true, ]

//[2, 3, 5, 1, 3], extraCandies = 3
//          ^
//1 + 3 = 4 < max -> res = [ true, true, true, false,  ]

//[2, 3, 5, 1, 3], extraCandies = 3
//             ^
//3 + 3 = 6 > max -> res = [ true, true, true, false, true ]

//[ true, true, true, false, true ]

kidsWithCandies(candies = [4,2,1,1,2], extraCandies = 1); //[true,false,false,false,false] 
//max = 4

//[4, 2, 1, 1, 2], extraCandies = 1
// ^
//4 + 1 = 5 > max -> res = [ true, ]

//[4, 2, 1, 1, 2], extraCandies = 1
//    ^
//2 + 1 = 3 < max -> res = [ true, false, ]

//[4, 2, 1, 1, 2], extraCandies = 1
//       ^
//1 + 1 = 2 < max -> res = [ true, false, false, ]

//[4, 2, 1, 1, 2], extraCandies = 1
//          ^
//1 + 1 = 2 < max -> res = [ true, false, false, false, ]

//[4, 2, 1, 1, 2], extraCandies = 1
//             ^
//2 + 1 = 3 < max -> res = [ true, false, false, false, false ]

//[ true, false, false, false, false ]

kidsWithCandies(candies = [12,1,12], extraCandies = 10); //[true,false,true]
