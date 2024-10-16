//2078. Two Furthest Houses With Different Colors
//there are n houses evenly lined up on the street, and each house is beautifully painted
//given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house

//return the maximum distance between two houses with different colors
//the distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of xs

//Approach:
//using Greedy algorithm
var twoFurthestHouses = (colors) => {
    let m = colors.length;
    let max = 0;

    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < m; j++) {
            //different colors
            if (colors[i] !== colors[j]) max = Math.max(max, Math.abs(i - j));
        }
    }

    return max;
}
twoFurthestHouses([1,1,1,6,1,1,1]); //3
//[1, 1, 1, 6, 1, 1, 1]
// i 
//    j
//i = j: same color
//max = 0

//[1, 1, 1, 6, 1, 1, 1]
// i 
//       j
//i = j: same color
//max = 0

//[1, 1, 1, 6, 1, 1, 1]
// i 
//          j
//i != j: different color -> distance: abs(0 - 3) = 3
//max = 0 -> 3
//...

twoFurthestHouses([1,8,3,8,3]); //4
//[1, 8, 3, 8, 3]
// i 
//    j
//i != j: different color -> distance: abs(0 - 1) = 1
//max = 0 -> 1

//[1, 8, 3, 8, 3]
// i 
//       j
//i != j: different color -> distance: abs(0 - 2) = 2
//max = 0 -> 1 -> 2

//[1, 8, 3, 8, 3]
// i 
//          j
//i != j: different color -> distance: abs(0 - 3) = 3
//max = 0 -> 1 -> 2 -> 3

//[1, 8, 3, 8, 3]
// i 
//             j
//i != j: different color -> distance: abs(0 - 4) = 4
//max = 0 -> 1 -> 2 -> 3 -> 4

twoFurthestHouses([0,1]); //1
