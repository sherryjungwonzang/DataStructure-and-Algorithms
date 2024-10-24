//3074. Apple Redistribution Into Boxes
//given an array apple of size n and an array capacity of size m
//there are n packs where the ith pack contains apple[i] apples
//there are m boxes as well, and the ith box has a capacity of capacity[i] apples
//return the minimum number of boxes you need to select to redistribute these n packs of apples into boxes
//note that, apples from the same pack can be distributed into different boxes

//Approach:
//using greedy algorithms
var appleRedistribution = (apple, capacity) => {
    //sorting
    capacity.sort((a, b) => a - b);

    let total = apple.reduce((a, b) => a + b, 0);
    let res = 0;

    //checking boxed
    for (let i = capacity.length - 1; i >= 0; i--) {
        res++;

        //redistribution
        total -= capacity[i];

        //distribution done
        if (total <= 0) break;
    } 

    return res;
}
//TC: O(n logn)
//SC: O(1)
appleRedistribution(apple = [1,3,2], capacity = [4,3,1,5,2]); //2 - 4 and 5 boxes
//sorting: [1, 2, 3] || total = 1 + 2 + 3 = 7

//[4, 3, 1, 5, 2]
//             ^
//total = 7 -> 5
///res = 0 -> 1

//[4, 3, 1, 5, 2]
//          ^
//total = 7 -> 5 -> 0
///res = 0 -> 1 -> 2

appleRedistribution(apple = [5,5,5], capacity = [2,4,2,7]); //4 - need all boxes
//sorting: [5, 5, 5] || total = 5 + 5 + 5 = 15

//[2, 4, 2, 7]
//          ^
//total = 15 -> 8
///res = 0 -> 1

//[2, 4, 2, 7]
//       ^
//total = 15 -> 8 -> 6
///res = 0 -> 1 -> 2

//[2, 4, 2, 7]
//    ^
//total = 15 -> 8 -> 6 -> 2
///res = 0 -> 1 -> 2 -> 3

//[2, 4, 2, 7]
// ^
//total = 15 -> 8 -> 6 -> 2 -> 0
///res = 0 -> 1 -> 2 -> 3 -> 4
