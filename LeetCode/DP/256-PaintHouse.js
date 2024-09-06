//256. Paint House
//there are a row of n houses
//each house can be painted with one of the three colors: red, blue, green
//the cost of paintinf each house with a certain color is different
//you have to paint all the houses such that no two adjacent houses have the same color

//the cost of painting each house with a certain color is represented by n x 3 cost matrix
//for example, costs[0][0] is the cost of painting house 0 with color red
//costs[1][2] is the cost of painting house 1 with color green, and so on
//find the minimum cost to paint all houses

//Approach:
//using DP
var paintHouse = (costs) => {
    //dp
    let [r, b, g] = [0, 0, 0];

    for (let [cA, cB, cC] of costs) {
        //the sum of cost
        [r, b, g] = [Math.min(b, g) + cA, Math.min(r, g) + cB, Math.min(r, b) + cC];
    }

    return Math.min(r, b, g);
}
//TC: O(n) <- O(n x 3)
//SC: O(1)
paintHouse([[17,2,17], [16,16,5], [14,3,19]]); //10
//paint house 0 into blue, paint house 1 into green, paint house 2 into blue
//minimum cost is 2 + 5 + 3 = 10

//[r, b, g] = [0, 0, 0]
//[17, 2, 17], [16, 16, 5], [14, 3, 19]]
// cA  cB cC
//[r, b, g] = [min(0, 0) + 17, min(0, 0) + 2, min(0, 0) + 17] = [17, 2, 17]

//[r, b, g] = [17, 2, 17]
//[17, 2, 17], [16, 16, 5], [14, 3, 19]]
//              cA  cB cC
//[r, b, g] = [min(2, 17) + 16, min(17, 17) + 16, min(17, 2) + 5] = [18, 33, 7]

//[r, b, g] = [18, 33, 7]
//[17, 2, 17], [16, 16, 5], [14, 3, 19]]
//                           cA  cB cC
//[r, b, g] = [min(33, 7) + 14, min(18, 7) + 3, min(18, 33) + 19] = [21, 10, 39]
//min(21, 10, 39) = 10
