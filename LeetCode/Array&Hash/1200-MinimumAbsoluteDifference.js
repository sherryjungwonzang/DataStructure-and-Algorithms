//1200. Minimum Absolute Difference
//given an array of distinct integers arr
//find all pairs of elements with the minimum absolute difference of any two elements
//return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
//a, b are from arr
//a < b
//b - a equals to the min absolute difference of any two elements in arr

//Approach:
//using sorting and map
var minAbsoluteDiff = (arr) => {
    //sorting
    arr = arr.sort((a, b) => a - b);

    let map = {};
    let diff = Infinity;
    let min = Infinity;

    for (let i = 1; i < arr.length; i++) {
        diff = Math.abs(arr[i - 1] - arr[i]);

        //updating min 
        if (diff < min) min = diff;

        //tracking all diff
        if (!map[diff]) map[diff] = [];

        //filling map
        map[diff].push([arr[i - 1], arr[i]]);
    }

    return map[min];
}
minAbsoluteDiff([4,2,1,3]); //[[1,2],[2,3],[3,4]] - The minimum absolute difference is 1
//sorting: [1, 2, 3, 4]

//[1, 2, 3, 4]
//    ^
//|2 - 1| = 1
//diff = Infi -> 1
//min = diff -> 1
//map = { 1: [ [1, 2], ] }

//[1, 2, 3, 4]
//       ^
//|3 - 2| = 1
//diff = Infi -> 1 -> 1
//min = diff -> 1 -> 1
//map = { 1: [ [1, 2], [2, 3] ] }

//[1, 2, 3, 4]
//          ^
//|4 - 3| = 1
//diff = Infi -> 1 -> 1 -> 1
//min = diff -> 1 -> 1 -> 1
//map = { 1: [ [1, 2], [2, 3], [3, 4] ] }

//[ [1, 2], [2, 3], [3, 4] ]

minAbsoluteDiff([1,3,6,10,15]); //[[1,3]]
//sorting: [1, 3, 6, 10, 15]

//[1, 3, 6, 10, 15]
//    ^
//|3 - 1| = 2
//diff = Infi -> 2
//min = diff -> 2
//map = { 2: [ [1, 3], ] }

//[1, 3, 6, 10, 15]
//       ^
//|6 - 3| = 3
//diff = Infi -> 2 -> 3
//min = diff -> 2 -> 2
//map = { 2: [ [1, 3] ], 
//        3: [ [3, 6] ]
//}

//[1, 3, 6, 10, 15]
//           ^
//|10 - 6| = 4
//diff = Infi -> 2 -> 3 -> 4
//min = diff -> 2 -> 2 -> 2
//map = { 2: [ [1, 3] ], 
//        3: [ [3, 6] ],
//        4: [ [6, 10] ],
//}

//[1, 3, 6, 10, 15]
//              ^
//|15 - 10| = 5
//diff = Infi -> 2 -> 3 -> 4 -> 5
//min = diff -> 2 -> 2 -> 2 -> 2
//map = { 2: [ [1, 3] ], 
//        3: [ [3, 6] ],
//        4: [ [6, 10] ],
//        5: [ [10, 15] ]
//}

//[ [1, 3] ]

minAbsoluteDiff([3,8,-10,23,19,-4,-14,27]); //[[-14,-10],[19,23],[23,27]]
//sorting: [-14, -10, -4, 3, 8, 19, 23, 27]

//[-14, -10, -4, 3, 8, 19, 23, 27]
//       ^
//|-10 - -14| = 4
//diff = Infi -> 4
//min = diff -> 4
//map = { 4: [ [-14, -10], ] }

//[-14, -10, -4, 3, 8, 19, 23, 27]
//           ^
//|-4 - -10| = 6
//diff = Infi -> 4 -> 6
//min = diff -> 4 -> 4
//map = { 4: [ [-14, -10] ]
//        6: [ [-10, -4] ],
//}

//[-14, -10, -4, 3, 8, 19, 23, 27]
//               ^
//|3 - -4| = 7
//diff = Infi -> 4 -> 6 -> 7
//min = diff -> 4 -> 4 -> 4
//map = { 4: [ [-14, -10] ]
//        6: [ [-10, -4] ],
//        7: [ [-4, 3] ],
//}

//[-14, -10, -4, 3, 8, 19, 23, 27]
//                  ^
//|8 - 3| = 5
//diff = Infi -> 4 -> 6 -> 7 -> 5
//min = diff -> 4 -> 4 -> 4 -> 4
//map = { 4: [ [-14, -10] ]
//        6: [ [-10, -4] ],
//        7: [ [-4, 3] ],
//        5: [ [3, 8] ],
//}

//[-14, -10, -4, 3, 8, 19, 23, 27]
//                      ^
//|19 - 8| = 11
//diff = Infi -> 4 -> 6 -> 7 -> 5 -> 11
//min = diff -> 4 -> 4 -> 4 -> 4 -> 4
//map = { 4: [ [-14, -10] ]
//        6: [ [-10, -4] ],
//        7: [ [-4, 3] ],
//        5: [ [3, 8] ],
//        11: [ [8, 19] ],
//}

//[-14, -10, -4, 3, 8, 19, 23, 27]
//                         ^
//|23 - 19| = 4
//diff = Infi -> 4 -> 6 -> 7 -> 5 -> 11 -> 4
//min = diff -> 4 -> 4 -> 4 -> 4 -> 4 -> 4
//map = { 4: [ [-14, -10], [19, 23] ]
//        6: [ [-10, -4] ],
//        7: [ [-4, 3] ],
//        5: [ [3, 8] ],
//        11: [ [8, 19] ],
//}

//[-14, -10, -4, 3, 8, 19, 23, 27]
//                             ^
//|27 - 23| = 4
//diff = Infi -> 4 -> 6 -> 7 -> 5 -> 11 -> 4 -> 4
//min = diff -> 4 -> 4 -> 4 -> 4 -> 4 -> 4 -> 4
//map = { 4: [ [-14, -10], [19, 23], [23, 27] ]
//        6: [ [-10, -4] ],
//        7: [ [-4, 3] ],
//        5: [ [3, 8] ],
//        11: [ [8, 19] ],
//}

//[ [-14, -10], [19, 23], [23, 27] ]
